import { defineStore } from 'pinia';


interface RouteState {
  /** 路由缓存 */
  cacheRoutes: string[]
}

export const useRouteStore = defineStore({
  id: 'app-route',
  state: (): RouteState => ({
    cacheRoutes: []
  }),
  actions: {
    addCacheRoute(name: string) {
      this.cacheRoutes.push(name)
    },
    removeCacheRoute(name: string) {
      this.cacheRoutes = this.cacheRoutes.filter(route => route !== name)
    }
  }
})

export function useRouteStoreWithout() {
  return useRouteStore()
}
