<template>
  <n-layout-sider class="layout_sider-wrapper" bordered>
    <div>logo</div>
    <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="option" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useAppStoreWithOut } from '@/store/modules/app'
import { transformAuthRouteToMenu } from '@/router/helper/menuHelper'
import { AppRouteRecordRaw } from '../../../router/routeTypes'

const permissionStore = usePermissionStoreWithOut()
const backMenuList = permissionStore.getBackMenuList

const appStore = useAppStoreWithOut()
const collapsed = appStore.getSiderCollapse
const option = transformAuthRouteToMenu(backMenuList as AppRouteRecordRaw[])

console.log(option)
</script>

<style lang="scss" scoped>
.layout_sider {
  &-wrapper {
    height: 100vh;
  }
}
</style>
