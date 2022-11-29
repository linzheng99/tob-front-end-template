<template>
  <n-layout has-sider>
    <Sidebar />
    <n-layout>
      <Header />
      <Content />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Content from './Content/index.vue'
import Header from './Header/index.vue'
import Sidebar from './Sidebar/index.vue'
</script>

<style scoped></style>
