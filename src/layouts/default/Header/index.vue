<template>
  <div class="layout_header-wrapper">
    <MenuCollapse />
    <UserActions />
  </div>
</template>

<script setup lang="ts">
import MenuCollapse from './components/MenuCollapse.vue'
import UserActions from './components/UserActions.vue'
</script>

<style lang="scss" scoped>
.layout_header {
  &-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: $theme-background-color;
  }
}
</style>
