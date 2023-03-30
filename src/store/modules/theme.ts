import { defineStore } from 'pinia'
import { store } from '../index'
import { initThemeConfig, getNaiveThemeOverrides } from '@/utils/helper/themeHelper'
import { setLocalkey } from '@/utils/cache/appLocal'
import { LOCAL_THEME_CONFIG } from '@/enums/cacheEnum'

type ThemeState = Theme.Config

export const useThemeStore = defineStore({
  id: 'app-theme',
  state: (): ThemeState => initThemeConfig(),
  getters: {
    /** naiveUI的主题配置 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({ primary: state.themeColor, ...state.otherColor })
      return overrides
    },
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
    /** 缓存themeConfig */
    cacheThemeConfig() {
      setLocalkey(LOCAL_THEME_CONFIG, this.$state)
    },
    /** 设置系统主题颜色 */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor
    },
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
