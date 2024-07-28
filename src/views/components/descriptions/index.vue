<template>
  <DescriptionsRender :describe-list="descripeList" :data="data" :column="3" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import type { ListType } from '@/components/DescriptionsRender/types'

const data = {
  x: '吃饭',
  y: '喝酒',
  z: '睡觉',
}
const descripeList: ListType[] = [
  {
    label: '晚上',
    render(data, param) {
      return data[param]
    },
    param: 'x',
  },
  {
    label: '今天',
    param: 'y',
  },
  {
    label: '大晚上',
    param: 'y',
    render(data, param) {
      return h('div', { style: { color: 'red' } }, { default: () => data[param] })
    },
  },
]
</script>

<style scoped></style>
