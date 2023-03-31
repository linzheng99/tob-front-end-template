<template>
  <div class="login">
    <LoginLeft />
    <LoginRight />
  </div>
</template>

<script setup lang="ts">
import LoginLeft from './components/LoginLeft.vue'
import LoginRight from './components/LoginRight.vue'
</script>

<style scoped lang="scss">
.login {
  display: flex;
  background-color: #18192a;
  height: 100vh;
  overflow: hidden;
}
</style>
