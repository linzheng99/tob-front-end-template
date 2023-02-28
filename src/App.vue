<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <naive-provider>
    <n-config-provider :theme="darkTheme">
      <router-view />
    </n-config-provider>
  </naive-provider>
</template>

<style scoped></style>
