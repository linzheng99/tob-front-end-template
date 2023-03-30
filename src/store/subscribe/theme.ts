import { effectScope, watch } from 'vue'
import { useThemeStoreWithOut } from '@/store/modules/theme'
import { setLocalkey } from '@/utils/cache/appLocal'
import { LOCAL_THEME_COLOR } from '@/enums/cacheEnum'

/** 订阅theme store */
export default function subscribeThemeStore() {
  const themeStore = useThemeStoreWithOut()
  const scope = effectScope()

  scope.run(() => {
    // 监听主题颜色
    watch(
      () => themeStore.themeColor,
      (newValue) => {
        setLocalkey(LOCAL_THEME_COLOR, newValue)
      },
      { immediate: true },
    )
  })
}
