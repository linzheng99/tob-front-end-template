# 路由守卫
::: tip
路由守卫来控制路由的访问权限。路由守卫是一个函数，它会在路由切换时被调用，可以用来检查用户是否有权限访问该路由。

`通过全局前置路由对路由进行动态添加`
:::
## step1(创建路由守卫)
```ts
function createPermissionGuard(router) {
  router.beforeEach(async (to, form, next) => {
    // 用户信息
    const userStore = useUserStoreWithOut()
    const token = userStore.getToken
    // 用户通行权限
    const permissionStore = usePermissionStoreWithOut()
  })
}
```
## step2(判断路由)
1. 路由包含（白名单路由和基本路由）
2. 判断路由 (是否存在特例)
```ts
router.beforeEach(async (to, form, next) => {
  // ... 省略其他逻辑
  if (WHITE_PATH_LIST.includes(to.path)) {
    if (to.path === LOGIN_PATH && token) {
      // 路由设置了 重定向redirect
      try {
        await userStore.afterLoginAction()
        return
      }
      catch {}
    }
    next()
  }
})
```
## step3(判断token)
```ts
router.beforeEach(async (to, form, next) => {
  // ... 省略其他逻辑
  if (!token)
    next('/login')
})
```
## step4(用户的主动刷新操作)
```ts
router.beforeEach(async (to, form, next) => {
  // ... 省略其他逻辑
  // 在登录成功时存储时间戳至pinia
  if (userStore.getLastUpdateTime === 0) {
    try {
      // 更新用户状态
      permissionStore.setDynamicAddedRoute(false)
      await userStore.getUserInfoAction()
    }
    catch (error) {
      next()
    }
  }
})
```
## step5(动态添加路由)
1. 是否已经添加过动态路由
2. 添加用户的路由
3. 跳转路由
```ts
router.beforeEach(async (to, form, next) => {
  // ... 省略其他逻辑
  if (permissionStore.getIsDynamicAddedRoute) {
    next()
    return
  }

  const routes = await permissionStore.buildRoutesAction()

  routes.forEach((route) => {
    router.addRoute(route)
  })

  permissionStore.setDynamicAddedRoute(true)
  next({ ...to, replace: true })
})
```
::: warning
需要注意的是`动态路由`是`json格式`需要额外处理
:::
```ts
await permissionStore.buildRoutesAction()
// 详细查看 /src/utils/helper/routerHelper.ts
```
## step6(用户手动更改路由)
```ts
router.beforeEach(async (to, form, next) => {
  // ... 省略其他逻辑
  // 强制手动退出登录逻辑
  if (to.path === LOGIN_PATH)
    next('/')
})
```
## step7(挂载路由守卫)
在main.ts（项目入口文件）中挂载 `在router挂载之后`
