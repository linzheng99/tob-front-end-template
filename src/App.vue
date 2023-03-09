<script setup lang="ts">
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#dcee62',
  },
  Dropdown: {
    color: 'rgb(100, 94, 147)',
    optionColorHover: 'rgb(121, 116, 164)',
    optionTextColor: 'white',
    optionTextColorHover: 'white',
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
</script>

<template>
  <naive-provider>
    <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
      <router-view />
    </n-config-provider>
  </naive-provider>
</template>

<style scoped></style>
