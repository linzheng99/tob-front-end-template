import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import * as path from 'path';

const getSrcPath = () => {
  return path.resolve(__dirname, 'src')
}

// https://vitejs.dev/config/
export default defineConfig(config => {
  const { command } = config
  return {
    base: '/',
    resolve: {
      alias: {
        '@': getSrcPath()
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/variable.scss" as *;`
        }
      }
    },
  }
})
