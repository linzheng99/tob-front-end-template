<template>
  <div id="app_content">账号<n-input v-model:value="accountsValue"></n-input> </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const accountsValue = ref('')
</script>

<style lang="scss" scoped></style>
