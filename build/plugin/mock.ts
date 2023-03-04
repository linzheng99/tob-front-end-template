import { viteMockServe } from 'vite-plugin-mock'

export default function MockServer(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock',
    // development
    localEnabled: !isBuild,
    // production
    prodEnabled: isBuild,
    injectCode: `
      import { setupMockServer } from '../mock/index';

      setupMockServer();
      `,
  })
}
