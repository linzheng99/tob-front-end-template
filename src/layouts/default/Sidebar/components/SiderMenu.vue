<template>
  <n-menu
    :value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="option"
    @update:value="handleUpdateMenu"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { transformAuthRouteToMenu } from '@/utils/helper/menuHelper'
import type { AppRouteRecordRaw } from '@/router/routeTypes'
import { useRouterPush } from '@/hooks/router/useRouterPush'
import { useAppLocalConfig } from '@/hooks/setting/useAppLocalConfig'

const permissionStore = usePermissionStoreWithOut()
const backMenuList = permissionStore.getBackMenuList
const route = useRoute()
const { routerPush } = useRouterPush()

const { getSiderCollapse } = useAppLocalConfig()
const collapsed = computed(() => getSiderCollapse.value)
const option = transformAuthRouteToMenu(backMenuList as AppRouteRecordRaw[])

const activeKey = computed(() => route.name)

function handleUpdateMenu(_key, item) {
  routerPush(item.routePath)
}
</script>

<style scoped></style>
