<template>
  <div class="layout_content">
    <RouterView>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout_content {
  padding: 10px;
  height: 100%;
  background-color: #18192b;
}
</style>
