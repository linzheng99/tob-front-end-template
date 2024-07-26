<template>
  <div class="collpase-wrapper" @click="setAppLocalConfig({ siderCollapse: !collpase })">
    <div class="flex-center py-12px text-16px c-base">
      <SvgIcon v-if="!collpase" :icon="leftFold" />
      <SvgIcon v-else :icon="rightFold" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStoreWithOut } from '@/store/modules/app'
import { useAppLocalConfig } from '@/hooks/setting/useAppLocalConfig'
import SvgIcon from '@/components/SvgIcon/index.vue'

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
.collpase-wrapper {
  float: left;
  cursor: pointer;
}
</style>
