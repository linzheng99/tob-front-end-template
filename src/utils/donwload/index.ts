// 下载 Blob 格式的文件
export async function downloadFile(res: Blob, title: string, suffix: string = '.xlsx'): Promise<void> {
  const downloadElement: HTMLAnchorElement = document.createElement('a')
  const href: string = window.URL.createObjectURL(res)

  downloadElement.href = href
  downloadElement.download = title + suffix

  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement)

  window.URL.revokeObjectURL(href)
}

// 下载 url 的文件
export function downloadFileFromUrl(url: string, name?: string): void {
  const fileName: string = name || url.split('/').pop() || 'download'
  const downloadElement: HTMLAnchorElement = document.createElement('a')

  downloadElement.href = url
  downloadElement.download = fileName

  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement)
}
