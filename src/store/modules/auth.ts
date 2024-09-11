import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getPermissionApi } from '@/api/menu'

export const useUserAuth = defineStore('app-user-auth', () => {
  const permissions = ref<string[]>([])

  async function getPermission() {
    permissions.value = await getPermissionApi()
  }

  return {
    permissions,
    getPermission,
  }
})
