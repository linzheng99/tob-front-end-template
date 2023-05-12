<template>
  <DescriptionsRender :describe-list="descripeList" :data="data" :column="3" />
</template>

<script setup lang="ts">
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import { h } from 'vue'

const data = {
  x: '吃饭',
  y: '喝酒',
  z: '睡觉'
}
const descripeList = [
  {
    label: '晚上',
    renderContent: true,
    render(data, param) {
      return data[param]
    },
    param: 'x'
  },
  {
    label: '今天',
    param: 'y'
  },
  {
    label: '大晚上',
    param: 'y',
    render(data, param) {
      return () => h('div', {style: {color: 'red'}}, data[param])
    }
  },
]
</script>

<style scoped>
</style>
