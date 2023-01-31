import { defineStore } from 'pinia'
import { store } from '../index'

interface ThemeState {
  siderDefaultWidth: number
  siderMinWidth: number
  headerHeight: number
  tabHeight: number
}

export const useThemeStore = defineStore({
  id: 'app-theme',
  state: (): ThemeState => ({
    siderDefaultWidth: 220,
    siderMinWidth: 64,
    headerHeight: 56,
    tabHeight: 44,
  }),
  getters: {
    getSiderDefaultWidth(): number {
      return this.siderDefaultWidth
    },
    getSiderMinWidth(): number {
      return this.siderMinWidth
    },
    getHeaderHeight(): number {
      return this.headerHeight
    },
    getTabHeight(): number {
      return this.tabHeight
    },
  },
  actions: {
    setSiderDefaultWidth(value: number) {
      this.siderDefaultWidth = value
    },
    setSiderMinWidth(value: number) {
      this.siderMinWidth = value
    },
  },
})

export function useThemeStoreWithOut() {
  return useThemeStore(store)
}
