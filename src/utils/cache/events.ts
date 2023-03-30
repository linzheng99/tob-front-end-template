import { useEventListener } from '@vueuse/core'
import { useThemeStoreWithOut } from '@/store/modules/theme'

/** 全局事件 */
export function useGlobalEvents() {
  const themeStore = useThemeStoreWithOut()

  /** 关闭页面时 */
  useEventListener(window, 'beforeunload', () => {
    themeStore.cacheThemeConfig()
  })
}
