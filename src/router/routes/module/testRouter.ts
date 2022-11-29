import type { AppRouteRecordRaw } from '@/router/routeTypes'
import { LAYOUT } from '../constant'

export const TEST_ROUTER: AppRouteRecordRaw = {
  path: '/testRouter',
  name: 'TestRouter',
  component: LAYOUT,
  meta: {
    title: '测试路由',
    icon: 'testSearch',
  },
  redirect: '/testRouter/listOne',
  children: [
    {
      path: '/testRouter/listOne',
      name: 'listOne',
      component: () => import('@/views/testRouter/listOne.vue'),
      meta: {
        title: 'listOne',
      },
    }, {
      path: '/testRouter/listTwo',
      name: 'listTwo',
      component: () => import('@/views/testRouter/listTwo.vue'),
      meta: {
        title: 'listTwo',
      },
    },
  ],
}
