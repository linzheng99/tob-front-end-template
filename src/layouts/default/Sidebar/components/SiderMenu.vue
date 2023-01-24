<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="option"
    />
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useAppStoreWithOut } from '@/store/modules/app'
import { transformAuthRouteToMenu } from '@/router/helper/menuHelper'
import { AppRouteRecordRaw } from '@/router/routeTypes'
import { GlobalThemeOverrides } from 'naive-ui'

const permissionStore = usePermissionStoreWithOut()
const backMenuList = permissionStore.getBackMenuList

const appStore = useAppStoreWithOut()
const collapsed = computed(() => appStore.getSiderCollapse)
const option = transformAuthRouteToMenu(backMenuList as AppRouteRecordRaw[])
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#dcee62',
  },
  Menu: {
    // 图标
    itemIconColor: '#fff',
    itemIconColorHover: '#fff',
    itemIconColorActive: '#dcee62',
    itemIconColorActiveHover: '#dcee62',
    itemIconColorChildActive: '#dcee62',
    itemIconColorChildActiveHover: '#dcee62',
    // 文字
    itemTextColor: '#fff',
    itemTextColorHover: '#fff',
    itemTextColorActive: '#dcee62',
    itemTextColorActiveHover: '#dcee62',
    itemTextColorChildActiveHover: '#dcee62',
    // 下拉箭头
    arrowColor: '#fff',
    arrowColorHover: '#fff',
    arrowColorChildActiveHover: '#dcee62',
    itemColorHover: '#4c4e5e',
    itemColorActive: 'rgba(220,238,98, 0.2)',
    itemColorActiveHover: 'rgba(220,238,98, 0.2)',
  },
}
</script>

<style scoped></style>
