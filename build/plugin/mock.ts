import { viteMockServe } from 'vite-plugin-mock'

export default function MockServer() {
  return viteMockServe({
    mockPath: 'mock',
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  })
}
