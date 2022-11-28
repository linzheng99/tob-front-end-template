import { viteMockServe } from 'vite-plugin-mock'
export default function MockServer(config) {
  const { command } = config
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: command === 'serve',
  })
}
