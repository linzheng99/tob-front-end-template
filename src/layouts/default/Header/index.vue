<template>
  <div class="layout_header-wrapper">
    <MenuCollapse />
  </div>
</template>

<script setup lang="ts">
import MenuCollapse from './components/MenuCollapse.vue'
</script>

<style lang="scss" scoped>
.layout_header {
  &-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: $theme-background-color;
  }
}
</style>
