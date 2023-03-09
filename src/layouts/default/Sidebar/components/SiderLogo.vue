<template>
  <div class="sider_logo">
    <div v-if="!collapsed" class="sider_logo-unfold">
      <img width="32" :src="logo" />
      <h2 style="margin-left: 10px">template</h2>
    </div>
    <div v-else>
      <img width="32" :src="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppLocalConfig } from '@/hooks/setting/useAppLocalConfig'
import logo from '@/assets/images/logo.png'
const { getSiderCollapse } = useAppLocalConfig()
const collapsed = computed(() => getSiderCollapse.value)
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
}
</style>
