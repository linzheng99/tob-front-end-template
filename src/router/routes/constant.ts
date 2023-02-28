import { PermissionFirstPage } from '@/enums/pageEnum'

/** 默认布局 */
export const LAYOUT = () => import('@/layouts/default/index.vue')

/** 根路由 */
export const RootRoute = {
  name: 'root',
  path: '/',
  redirect: PermissionFirstPage.First_Page,
  meta: {
    title: 'Root',
  },
}

/** 固定路由 */
export const ConstantRoutes = [
  RootRoute,
  {
    name: 'login',
    path: '/login',
    component: import('@/views/system/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
]
