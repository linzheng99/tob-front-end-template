# 系统路由

## step1(创建固定路由、白名单路由等)
```ts
// 白名单
const WHITE_PATH_LIST = []

const basicRoutes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/system/login/index.vue'),
    meta: {
      title: '登录',
    },
  }
]

function getWhiteRouteList(array) {
  array.forEach((item) => {
    WHITE_PATH_LIST.push(item.path)
    getWhiteRouteList(item.children || [])
  })
}
getWhiteRouteList(basicRoutes)
```
## step2(创建router实例)
```ts
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
```
## step3(挂载router)
```ts
export async function setupRouter(app) {
  app.use(router)
}
// 在main.ts（项目入口文件）中挂载
```
