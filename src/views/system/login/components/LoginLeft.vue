<template>
  <div class="login_left">
    <div class="login_left-top">
      <SvgIcon local-icon="logo" :color="themeColor" font-size="50" />
      {{ name }}
    </div>
    <div class="login_left-content">
      <SvgIcon local-icon="logo" :color="themeColor" font-size="250" />
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppInfo } from '@/hooks/app/system'
import { useThemeStoreWithOut } from '@/store/modules/theme'
import { computed } from 'vue'

const { name, title } = useAppInfo()
const themeStore = useThemeStoreWithOut()
const themeColor = computed(() => themeStore.themeColor)
</script>

<style lang="scss" scoped>
.login_left {
  height: 100vh;
  width: 100%;
  padding: 20px;
  &-top {
    font-size: 24px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: fantasy;
    height: 50px;
  }
  &-content {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-family: fantasy;
  }
}
</style>
