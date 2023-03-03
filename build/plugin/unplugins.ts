import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getSrcPath } from '../utils'

export default function unplugins(viteEnv: ImportMetaEnv) {
  // TODO
  console.log(viteEnv)

  const srcPath = getSrcPath()
  const localIconPath = `${srcPath}/assets/svg-icon`

  return [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [localIconPath],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ]
}
