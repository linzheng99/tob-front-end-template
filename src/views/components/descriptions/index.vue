<template>
  <DescriptionsRender :describe-list="descripeList" :data="data" />
</template>

<script setup lang="ts">
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'

const data = {
  x: '吃饭',
  y: '喝酒'
}
const descripeList = [
  {
    label: '晚上',
    renderContent: true,
    param: 'x'
  },
  {
    label: '今天',
    param: 'y'
  }
]
</script>

<style scoped></style>
