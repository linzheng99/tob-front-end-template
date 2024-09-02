import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import ComponentsPlugins from './components'
import MockServer from './mock'
import html from './html'
import svgIconsPlugin from './svgIcons'
import imageMin from './imageMin'

// 把全部资源打包到一个html文件里面 的插件
// import { viteSingleFile } from 'vite-plugin-singlefile'

export function setupVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const plugins = [vue(), ComponentsPlugins(), svgIconsPlugin(), html(viteEnv), UnoCSS(), imageMin()]

  // mock 模式
  VITE_USE_MOCK && plugins.push(MockServer(isBuild))

  return plugins
}
