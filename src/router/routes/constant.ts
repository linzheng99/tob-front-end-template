/** 固定路由 */
export const constantRoutes = [
  {
    name: 'login',
    path: '/login',
    component: import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
    }
  }
]
