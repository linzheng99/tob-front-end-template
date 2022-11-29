import { PageEnum } from '@/enums/pageEnum';

/** 根路由 */
export const RootRoute = {
  name: 'root',
  path: '/',
  redirect: PageEnum.First_Page,
  meta: {
    title: 'Root'
  }
}

/** 固定路由 */
export const ConstantRoutes = [
  RootRoute,
  {
    name: 'login',
    path: '/login',
    component: import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
    }
  }
]
