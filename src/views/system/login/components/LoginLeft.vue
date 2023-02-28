<template>
  <div class="login_left">
    <div class="login_left-top">
      <img :src="logo" alt="" width="50" height="50" style="margin-right: 10px" />
      {{ name }}
    </div>
    <div class="login_left-content">
      <img :src="logo" alt="" width="250" height="250" style="margin-bottom: 20px" />
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppInfo } from '@/hooks/app/system'
import logo from '@/assets/images/logo.png'
const { name, title } = useAppInfo()
</script>

<style lang="scss" scoped>
.login_left {
  height: 100vh;
  width: 100%;
  padding: 20px;
  &-top {
    font-size: 24px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: fantasy;
    height: 50px;
  }
  &-content {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-family: fantasy;
  }
}
</style>
