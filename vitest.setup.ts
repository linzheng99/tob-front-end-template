import { beforeEach, vi } from 'vitest'
// vue router mock
import { VueRouterMock, createRouterMock, injectRouterMock } from 'vue-router-mock';
import { config } from '@vue/test-utils';


function setupRouterMock() {
  // init custom router
  const router = createRouterMock({
    spy: {
      create: fn => vi.fn(fn),
      reset: spy => spy.mockClear()
    }
  })
  // before test exe todo
  beforeEach(() => {
    router.reset()
    injectRouterMock(router)
  })
  // install
  config.plugins.VueWrapper.install(VueRouterMock)
}

setupRouterMock()
