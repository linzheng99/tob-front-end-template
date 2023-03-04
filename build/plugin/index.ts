import vue from '@vitejs/plugin-vue'
import ComponentsPlugins from './components'
import MockServer from './mock'
import unplugins from './unplugins'
import html from './html'

export function setupVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const { VITE_USE_MOCK } = viteEnv

  const plugins = [vue(), ComponentsPlugins(), ...unplugins(viteEnv), html(viteEnv)]

  // mock 模式
  VITE_USE_MOCK && plugins.push(MockServer(isBuild))

  return plugins
}
