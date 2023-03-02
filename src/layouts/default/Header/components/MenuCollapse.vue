<template>
  <div class="icon_size" @click="setSiderCollapse(!collpase)">
    <SvgIcon v-if="!collpase" :icon="leftFold" />
    <SvgIcon v-else :icon="rightFold" />
  </div>
</template>

<script setup lang="ts">
import { useAppStoreWithOut } from '@/store/modules/app'
import { computed } from 'vue'

const appStore = useAppStoreWithOut()
const { setSiderCollapse } = appStore

const collpase = computed(() => appStore.getSiderCollapse)
/** 展开 */
const leftFold = 'line-md:menu-fold-left'
/** 收起 */
const rightFold = 'line-md:menu-fold-right'
</script>

<style lang="scss" scoped>
.icon_size {
  font-size: 16px;
  cursor: pointer;
  color: white;
}
</style>
