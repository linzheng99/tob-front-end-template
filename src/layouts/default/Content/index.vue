<template>
  <n-layout-content content-style="padding: 10px;">
    <RouterView>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </template>
    </RouterView>
  </n-layout-content>
</template>

<script setup lang="ts"></script>

<style scoped></style>
