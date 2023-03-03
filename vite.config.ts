import { defineConfig, loadEnv } from 'vite'
import { getSrcPath } from './build/utils'
import { setupVitePlugins } from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  const viteEnv = loadEnv(config.mode, process.cwd()) as unknown as ImportMetaEnv

  return {
    base: '/',
    resolve: {
      alias: {
        '@': getSrcPath(),
      },
    },
    plugins: setupVitePlugins(viteEnv),
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
    },
  }
})
