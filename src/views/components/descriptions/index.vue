<template>
  <DescriptionsRender :describe-list="descripeList" />
</template>

<script setup lang="ts">
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import { h } from 'vue'

const descripeList = [
  {
    label: '晚上',
    renderContent: true,
    content: h('span', { style: { color: 'red' } }, ['123456789'])
  },
  {
    label: '晚上',
    content: '喝酒'
  }
]
</script>

<style scoped></style>
