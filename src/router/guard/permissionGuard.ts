import type { Router, RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import { WHITE_PATH_LIST } from '../index'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useUserStoreWithOut } from '@/store/modules/user'
import { AppRouteRecordRaw } from '../routeTypes'
import { searchRoute } from '@/utils/helper/routerHelper'

const LOGIN_PATH = PageEnum.Login_page

const redirectLogin: {
  path: string
  replace: boolean
  query?: Recordable<string>
} = {
  path: LOGIN_PATH,
  replace: true,
}

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut()
  router.beforeEach(async (to, _from, next) => {
    const token = userStore.getToken
    const permissionStore = usePermissionStoreWithOut()
    /**
     * router逻辑顺序
     * 判断是否是白名单
     * 判断token
     * !token 做什么 return
     * token ->
     * 用户信息需不需要更换 ->
     * 有没有动态添加路由 [true next()] [false addRoutes]
     * 添加玩动态路由 -> 判断路由是否存在 / 是否有权限
     */

    // 判断是否是白名单
    if (WHITE_PATH_LIST.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        try {
          await userStore.afterLoginAction()
          return
        } catch { }
      }
      next()
      return
    }

    // !token
    if (!token) {
      next(redirectLogin)
      return
    }

    // 主动刷新页面时 重新获取用户信息
    if (userStore.getLastUpdateTime === 0) {
      try {
        permissionStore.setDynamicAddedRoute(false)
        await userStore.getUserInfoAction()
      } catch (error) {
        next()
        return
      }
    }

    // 已添加动态路由
    if (permissionStore.getIsDynamicAddedRoute) {
      // 判断路由是否存在 / 是否有权限
      const isExist = searchRoute(permissionStore.backMenuList, to.path)
      if (!isExist) {
        next('/404')
      } else {
        next()
      }
      return
    }

    // 动态添加
    const routes = await permissionStore.buildRoutesAction()
    routes?.forEach((route) => {
      router.addRoute(route as RouteRecordRaw)
    })
    permissionStore.setDynamicAddedRoute(true)

    next({ ...to, replace: true })

    // 跳转路由
    if (to.path === LOGIN_PATH) {
      next('/')
    }
  })
}
