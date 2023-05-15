<template>
  <DescriptionsRender :describe-list="descripeList" :data="data" :column="3" />
  <RenderVNode :create-render="renderDiv" />
</template>

<script setup lang="ts">
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import RenderVNode from '@/components/common/RenderVNode.vue'
import { NButton } from 'naive-ui'
import { h} from 'vue';

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
      return () => h('div', { style: { color: 'red' } }, data[param])
    }
  }
]
const renderDiv = () => h(NButton, { type: 'primary', style: { color: 'red' } }, {default: () => '123'})
</script>

<style scoped></style>
