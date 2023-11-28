<template>
  <div class="w-100vw h-100vh flex-center layer-theme">
    <n-result status="404" title="404 路径不存在" description="检查你输入的地址" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@layer {
  .layer-theme {
    background-color: $theme-background-color;
  }
}
</style>
