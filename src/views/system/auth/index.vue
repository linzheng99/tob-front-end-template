<template>
  <div id="app_content">权限 <n-input v-model:value="authValue"></n-input> </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const authValue = ref('')
</script>

<style lang="scss" scoped></style>
