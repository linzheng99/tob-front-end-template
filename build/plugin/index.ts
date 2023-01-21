import vue from '@vitejs/plugin-vue'
import ComponentsPlugins from './components'
import MockServer from './mock'
import unplugins from './unplugins'

export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins = [vue(), ComponentsPlugins(), ...unplugins(viteEnv), MockServer()]
  return plugins
}
