<template>
  <n-drawer
    :show="appStore.configDrawerVisible"
    :width="330"
    :placement="placement"
    @mask-click="appStore.toggleConfigDrawerVisible"
  >
    <n-drawer-content title="主题配置">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DrawerPlacement } from 'naive-ui'
import { useAppStoreWithOut } from '@/store/modules/app'

const appStore = useAppStoreWithOut()
const placement = ref<DrawerPlacement>('right')
</script>

<style scoped></style>
