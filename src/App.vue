<script setup lang="ts">
import { useGlobalEvents } from '@/utils/cache/events'
import { darkTheme } from 'naive-ui'
import { useThemeStoreWithOut } from '@/store/modules/theme'
import { subscribeStore } from '@/store/subscribe/index'
import { useColorModeStore } from '@/store/modules/colorMode'

const themeStore = useThemeStoreWithOut()
const colorMode = useColorModeStore()

subscribeStore()
useGlobalEvents()
</script>

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

<style scoped></style>
