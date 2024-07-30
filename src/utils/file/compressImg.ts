export interface CompressFile {
  file: File // The compressed image file
  origin: File // The original image file
  beforeSrc: string // The base64-encoded data URL of the original image
  afterSrc: string // The base64-encoded data URL of the compressed image
  beforeKB: number // The size of the original image file in kilobytes
  afterKB: number // The size of the compressed image file in kilobytes
}

/**
 * 压缩方法
 * @param {File[]} files 文件数组
 * @param {number} quality  0~1之间
 */
export function compressImg(files: File[], quality: number): Promise<CompressFile[]> {
  if (files.length > 0)
    return Promise.all(files.map(file => compressSingleImg(file, quality)))
  else
    return Promise.resolve([])
}

/**
 * 压缩单个图片
 * @param {File} file 单个文件
 * @param {number} quality  0~1之间
 */
export function compressSingleImg(file: File, quality: number): Promise<CompressFile> {
  return new Promise((resolve) => {
    const reader = new FileReader() // 创建 FileReader
    reader.onload = (event) => {
      if (event.target && event.target.result) {
        const src = event.target.result as string // Explicitly cast to string
        const image = new Image() // 创建 img 元素
        image.onload = async () => {
          const canvas = document.createElement('canvas') // 创建 canvas 元素
          canvas.width = image.width
          canvas.height = image.height
          const context = canvas.getContext('2d')
          if (context) {
            context.drawImage(image, 0, 0, image.width, image.height) // 绘制 canvas
            const canvasURL = canvas.toDataURL('image/jpeg', quality)
            const buffer = atob(canvasURL.split(',')[1])
            let length = buffer.length
            const bufferArray = new Uint8Array(new ArrayBuffer(length))
            while (length--)
              bufferArray[length] = buffer.charCodeAt(length)

            const miniFile = new File([bufferArray], file.name, {
              type: 'image/jpeg',
            })
            resolve({
              file: miniFile,
              origin: file,
              beforeSrc: src,
              afterSrc: canvasURL,
              beforeKB: Number((file.size / 1024).toFixed(2)),
              afterKB: Number((miniFile.size / 1024).toFixed(2)),
            })
          }
        }
        image.src = src
      }
    }
    reader.readAsDataURL(file)
  })
}
