<template>
  <div class="sider_logo">
    <div v-if="!collapsed" class="sider_logo-unfold">
      <SvgIcon local-icon="logo" :color="themeColor" font-size="28" />
      <span class="sider_logo-name" :style="{ color: themeColor }">{{ name }}</span>
    </div>
    <div v-else>
      <SvgIcon local-icon="logo" :color="themeColor" font-size="28" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppLocalConfig } from '@/hooks/setting/useAppLocalConfig'
import { useAppInfo } from '@/hooks/app/system'
import { useThemeStoreWithOut } from '@/store/modules/theme'

const { getSiderCollapse } = useAppLocalConfig()
const themeStore = useThemeStoreWithOut()
const { name } = useAppInfo()
const collapsed = computed(() => getSiderCollapse.value)
const themeColor = computed(() => themeStore.themeColor)
</script>

<style scoped lang="scss">
.sider_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  font-size: 16px;
  color: #dcee62;
  width: 100%;
  &-unfold {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  &-name {
    margin-left: 10px;
  }
}
</style>
