<template>
  <n-drawer
    :show="appStore.configDrawerVisible"
    :width="330"
    :placement="placement"
    @mask-click="appStore.toggleConfigDrawerVisible"
  >
    <n-drawer-content title="主题配置">
      <ThemeColorSelect />
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DrawerPlacement } from 'naive-ui'
import { useAppStoreWithOut } from '@/store/modules/app'
import ThemeColorSelect from '@/components/ThemeColorSelect/index.vue'

const appStore = useAppStoreWithOut()
const placement = ref<DrawerPlacement>('right')
</script>

<style scoped></style>
