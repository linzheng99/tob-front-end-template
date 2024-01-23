<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <div class="setting_button c-base cursor-pointer" @click="appStore.toggleConfigDrawerVisible">
        <SvgIcon icon="material-symbols:settings-rounded" />
      </div>
    </template>
    主题配置
  </n-tooltip>
</template>

<script setup lang="ts">
import { useAppStoreWithOut } from '@/store/modules/app'

const appStore = useAppStoreWithOut()
</script>

<style lang="scss" scoped>
.setting_button {
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  &:hover {
    @apply bg-active
    cursor: pointer;
  }
}
</style>
