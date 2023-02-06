<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-menu
      :value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="option"
      @update:value="handleUpdateMenu"
    />
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useAppStoreWithOut } from '@/store/modules/app'
import { transformAuthRouteToMenu } from '@/router/helper/menuHelper'
import { AppRouteRecordRaw } from '@/router/routeTypes'
import { GlobalThemeOverrides } from 'naive-ui'
import { useRouterPush } from '@/hooks/router/useRouterPush'

const permissionStore = usePermissionStoreWithOut()
const backMenuList = permissionStore.getBackMenuList
const route = useRoute()
const { routerPush } = useRouterPush()

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
    itemIconColorCollapsed: '#fff',
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

const activeKey = computed(() => route.name)

const handleUpdateMenu = (_key, item) => {
  routerPush(item.routePath)
}
</script>

<style scoped></style>
