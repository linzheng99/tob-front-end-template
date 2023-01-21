import { defineStore } from 'pinia'
import { AppRouteRecordRaw, Menu } from '@/router/routeTypes'
import { store } from '@/store/index'
import { transformAuthRouteToVueRoutes } from '../../router/helper/routerHelper'
import { getMenuListApi } from '@/api/menu'
import { getCookieToken } from '../../utils/cookie/index'

interface PermissionState {
  // 后台路由
  backMenuList: Menu[]
  // 菜单更新时间
  lastBuildMenuTime: number
  // 动态添加路由
  isDynamicAddedRoute: boolean
}
type resultType = {
  data: any
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    backMenuList: [],
    lastBuildMenuTime: 0,
    isDynamicAddedRoute: false,
  }),
  getters: {
    getBackMenuList(): Menu[] {
      return this.backMenuList
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute
    },
  },
  actions: {
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list
      list?.length > 0 && this.setLastBuildMenuTime()
    },
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime()
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added
    },
    async buildRoutesAction() {
      const routes: AppRouteRecordRaw[] = []
      let authMenuList: AppRouteRecordRaw[] = []

      try {
        const { data } = (await getMenuListApi({
          token: getCookieToken(),
        })) as resultType
        authMenuList = data.menus
      } catch (error) {
        console.error(error)
        return
      }

      const routeList = transformAuthRouteToVueRoutes(authMenuList)

      routeList.forEach((i) => {
        routes.push(i)
      })
      this.setBackMenuList(routes)

      return routes
    },
  },
})

export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
