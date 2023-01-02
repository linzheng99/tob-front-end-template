import { defineStore } from 'pinia'
import { Menu } from '@/router/routeTypes'
import { store } from '@/store/index'

interface PermissionState {
  // 后台路由
  backMenuList: Menu[]
  // 菜单更新时间
  lastBuildMenuTime: number
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    backMenuList: [],
    lastBuildMenuTime: 0,
  }),
  getters: {
    getBackMenuList(): Menu[] {
      return this.backMenuList
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime
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
    buildRoutesAction() {
      const routes = []
      return routes
    },
  },
})

export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
