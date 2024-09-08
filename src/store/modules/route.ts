import { defineStore } from 'pinia'
import { nextTick } from 'vue'

interface RouteState {
  /** 路由缓存 */
  cacheRoutes: string[]
  /** 是否已重载路由 */
  reloadFlag: boolean
}

export const useRouteStore = defineStore({
  id: 'app-route',
  state: (): RouteState => ({
    cacheRoutes: [],
    reloadFlag: true,
  }),
  actions: {
    addCacheRoute(name: string) {
      const exist = this.cacheRoutes.includes(name)
      !exist && this.cacheRoutes.push(name)
    },
    removeCacheRoute(name: string) {
      this.cacheRoutes = this.cacheRoutes.filter(route => route !== name)
    },
    reloadPage(name: string) {
      const isCache = this.cacheRoutes.includes(name)
      if (isCache)
        this.removeCacheRoute(name)
      this.reloadFlag = false
      nextTick().then(() => {
        this.addCacheRoute(name)
        this.reloadFlag = true
      })
    },
  },
})

export function useRouteStoreWithout() {
  return useRouteStore()
}
