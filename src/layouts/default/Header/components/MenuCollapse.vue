<template>
  <div class="icon_size" @click="setAppLocalConfig({ siderCollapse: !collpase })">
    <SvgIcon v-if="!collpase" :icon="leftFold" />
    <SvgIcon v-else :icon="rightFold" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStoreWithOut } from '@/store/modules/app'
import { useAppLocalConfig } from '@/hooks/setting/useAppLocalConfig'

const appStore = useAppStoreWithOut()
const { getSiderCollapse } = useAppLocalConfig()
const { setAppLocalConfig } = appStore

const collpase = computed(() => getSiderCollapse.value)
/** 展开 */
const leftFold = 'line-md:menu-fold-left'
/** 收起 */
const rightFold = 'line-md:menu-fold-right'
</script>

<style lang="scss" scoped>
.icon_size {
  float: left;
  font-size: 16px;
  cursor: pointer;
  color: white;
}
</style>
