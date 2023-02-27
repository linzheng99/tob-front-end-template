import type { Router } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { createPermissionGuard } from './permissionGuard'
import { useAppInfo } from '@/hooks/app/system'

const { name } = useAppInfo()

export function setupRouterGuard(router: Router) {
  createPermissionGuard(router)
  router.afterEach((to) => {
    // 设置document title
    useTitle(to.meta.title + ' - ' + name)
  })
}
