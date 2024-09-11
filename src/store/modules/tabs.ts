import { defineStore } from 'pinia'
import { store } from '../index'
import type { Tab, TabsState } from '@/layouts/default/Tabs/TabsType'
import { getIndexInTabs } from '@/layouts/default/Tabs/util'
import { useRouterPush } from '@/hooks/router/useRouterPush'

export const useTabsStore = defineStore({
  id: 'app-tabs',
  state: (): TabsState => ({
    tabs: [],
    activeTab: '',
  }),
  getters: {
    getTabs(): Tab[] {
      return this.tabs
    },
    getActiveTab(): string {
      return this.activeTab
    },
  },
  actions: {
    setTabs(tabs) {
      this.tabs = tabs
    },
    addTabs(tab: Tab) {
      const index = getIndexInTabs(this.tabs, this.activeTab)
      if (index === -1)
        this.tabs.push(tab)
    },
    setActiveTab(value: any) {
      this.activeTab = value
    },
    deleteTab(tab: Tab) {
      const { routerPush } = useRouterPush(false)

      const updateTabs = this.tabs.filter(item => item.fullPath !== tab.fullPath)
      this.tabs = updateTabs
      const isActive = this.activeTab === tab.title
      if (isActive) {
        const selectedTab = this.tabs[this.tabs.length - 1]
        this.setActiveTab(selectedTab.title)
        routerPush(selectedTab.fullPath)
      }
    },
  },
})

export function useTabsStoreWithOut() {
  return useTabsStore(store)
}
