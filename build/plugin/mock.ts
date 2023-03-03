import { viteMockServe } from 'vite-plugin-mock'

export default function MockServer() {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
  })
}
