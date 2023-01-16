import { defineStore } from 'pinia'
import { store } from '../index'

interface AppState {
  // 侧边栏折叠状态
  siderCollapse: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    siderCollapse: false,
  }),
  getters: {
    getSiderCollapse(): boolean {
      return this.siderCollapse
    },
  },
  actions: {
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
