<template>
  <div class="layout_sider-wrapper">
    <SiderLogo />
    <SiderMenu />
  </div>
</template>

<script setup lang="ts">
import SiderLogo from './components/SiderLogo.vue'
import SiderMenu from './components/SiderMenu.vue'
</script>

<style lang="scss" scoped>
.layout_sider {
  &-wrapper {
    height: 100vh;
  }
}
</style>
