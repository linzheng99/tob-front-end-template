import { defineStore } from 'pinia'
import type { AppRouteRecordRaw, Menu } from '@/router/routeTypes'
import { store } from '@/store/index'
import { transformAuthRouteToVueRoutes } from '@/utils/helper/routerHelper'
import { getUserMenus } from '@/api/user'

interface PermissionState {
  // 后台路由
  backMenuList: Menu[]
  // 菜单更新时间
  lastBuildMenuTime: number
  // 动态添加路由
  isDynamicAddedRoute: boolean
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
      if (list?.length > 0)
        this.setLastBuildMenuTime()
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
        const data = await getUserMenus()
        authMenuList = data
      }
      catch (error) {
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
