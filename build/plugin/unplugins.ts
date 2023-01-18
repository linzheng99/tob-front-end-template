import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default function unplugins(viteEnv: ImportMetaEnv) {
  return [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg-icon')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ]
}
