import { AppLocalConfig, getLocalKey } from '@/utils/cache/appLocal'
import { defineStore } from 'pinia'
import { store } from '../index'
import { LOCAL_CONFIG } from '@/enums/cacheEnum'
import { setLocalkey, clearLocalKey } from '@/utils/cache/appLocal'
import { deepMerge } from '@/utils/index'

interface AppState {
  appLocalConfig: AppLocalConfig
  configDrawerVisible: Boolean
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    appLocalConfig: getLocalKey(LOCAL_CONFIG),
    configDrawerVisible: false,
  }),
  getters: {
    getAppLocalConfig(): AppLocalConfig {
      return this.appLocalConfig
    },
    getConfigDrawerVisible(): Boolean {
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
      console.log('toggle')

      this.configDrawerVisible = !this.configDrawerVisible
    },
  },
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
