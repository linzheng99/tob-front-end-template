import { useAppStore } from '../../store/modules/app'
import { computed } from 'vue'

export function useAppLocalConfig() {
  const appStore = useAppStore()

  const getSiderCollapse = computed(() => appStore.getAppLocalConfig.siderCollapse)

  return {
    getSiderCollapse,
  }
}
