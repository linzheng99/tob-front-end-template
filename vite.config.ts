import { defineConfig } from 'vite'
import { setupVitePlugins } from './build/plugin'
import * as path from 'path'

const getSrcPath = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    base: '/',
    resolve: {
      alias: {
        '@': getSrcPath,
      },
    },
    plugins: setupVitePlugins(config),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/variable.scss" as *;`,
        },
      },
    },
    server: {
      host: true,
      open: true,
      port: 8080,
      hmr: true,
    },
  }
})
