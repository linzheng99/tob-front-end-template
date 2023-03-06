import viteImagemin from 'vite-plugin-imagemin'

export default function imageMin() {
  return viteImagemin({
    // 无损压缩配置，无损压缩下图片质量不会变差
    optipng: {
      optimizationLevel: 7,
    },
    // svg 优化
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  })
}
