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
.dark .login {
  background-color: #18192a;
}
.light .login {
  background: #ffffff;
  color: #000;
}
.login {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
</style>
