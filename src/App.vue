<script setup lang="ts">
import { useGlobalEvents } from '@/utils/cache/events'
import { darkTheme } from 'naive-ui'
import { useThemeStoreWithOut } from '@/store/modules/theme'
import { subscribeStore } from '@/store/subscribe/index'

const themeStore = useThemeStoreWithOut()

subscribeStore()
useGlobalEvents()
</script>

<template>
  <n-config-provider :theme-overrides="themeStore.naiveThemeOverrides" :theme="darkTheme">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<style scoped></style>
