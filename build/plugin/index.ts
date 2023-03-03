import vue from '@vitejs/plugin-vue'
import ComponentsPlugins from './components'
import MockServer from './mock'
import unplugins from './unplugins'
import html from './html'
import { devMode } from '../../src/utils/env'

export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const { VITE_HTTP_PROXY } = viteEnv

  const plugins = [vue(), ComponentsPlugins(), ...unplugins(viteEnv), html(viteEnv)]

  VITE_HTTP_PROXY === devMode && plugins.push(MockServer())

  return plugins
}
