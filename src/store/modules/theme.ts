import { defineStore } from 'pinia'
import { store } from '../index'
import { initThemeConfig } from '@/utils/helper/themeHelper'

export const useThemeStore = defineStore({
  id: 'app-theme',
  state: (): Theme.Config => initThemeConfig(),
  getters: {
    getSiderDefaultWidth(): number {
      return this.sidebar.sidebarDefaultWidth
    },
    getSiderMinWidth(): number {
      return this.sidebar.sidebarMinWidth
    },
    getHeaderHeight(): number {
      return this.headers.headerHeight
    },
    getTabHeight(): number {
      return this.tab.tabHeight
    },
  },
  actions: {
    setSiderDefaultWidth(value: number) {
      this.sidebar.sidebarDefaultWidth = value
    },
    setSiderMinWidth(value: number) {
      this.sidebar.sidebarMinWidth = value
    },
  },
})

export function useThemeStoreWithOut() {
  return useThemeStore(store)
}
