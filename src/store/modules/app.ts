import { defineStore } from 'pinia'
import { store } from '../index'
import type { AppLocalConfig } from '@/utils/cache/appLocal'
import { clearLocalKey, getLocalKey, setLocalkey } from '@/utils/cache/appLocal'
import { LOCAL_CONFIG } from '@/enums/cacheEnum'
import { deepMerge } from '@/utils/index'

interface AppState {
  appLocalConfig: AppLocalConfig
  configDrawerVisible: boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    appLocalConfig: getLocalKey(LOCAL_CONFIG) || {},
    configDrawerVisible: false,
  }),
  getters: {
    getAppLocalConfig(): AppLocalConfig {
      return this.appLocalConfig
    },
    getConfigDrawerVisible(): boolean {
      return this.configDrawerVisible
    },
  },
  actions: {
    setAppLocalConfig(config: DeepPartial<AppLocalConfig>): void {
      this.appLocalConfig = deepMerge(this.appLocalConfig, config)
      setLocalkey(LOCAL_CONFIG, this.appLocalConfig)
    },
    clearAppLocalConfig() {
      clearLocalKey(LOCAL_CONFIG)
    },
    /** 切换主题配置可见状态 */
    toggleConfigDrawerVisible() {
      this.configDrawerVisible = !this.configDrawerVisible
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
