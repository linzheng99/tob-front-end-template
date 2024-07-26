<template>
  <n-config-provider
    :theme-overrides="themeStore.naiveThemeOverrides"
    :theme="colorMode.themeColorMode === 'dark' ? darkTheme : undefined"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useGlobalEvents } from '@/utils/cache/events'
import { useThemeStoreWithOut } from '@/store/modules/theme'
import { subscribeStore } from '@/store/subscribe/index'
import { useColorModeStore } from '@/store/modules/colorMode'

const themeStore = useThemeStoreWithOut()
const colorMode = useColorModeStore()

subscribeStore()
useGlobalEvents()
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 2147483646;
}
.dark::view-transition-old(root) {
  z-index: 2147483646;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
