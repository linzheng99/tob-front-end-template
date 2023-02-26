import vue from '@vitejs/plugin-vue'
import ComponentsPlugins from './components'
import MockServer from './mock'
import unplugins from './unplugins'
import html from './html'

export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins = [vue(), ComponentsPlugins(), ...unplugins(viteEnv), MockServer(), html(viteEnv)]
  return plugins
}
