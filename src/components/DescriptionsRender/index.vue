<template>
  <n-descriptions :label-placement="labelPlacement" :title="title" bordered :column="column">
    <n-descriptions-item v-for="(item, index) in describeList" :key="index" :span="item.span">
      <template #label> {{ item.label }} </template>
      <template #default>
        <span v-if="item.renderContent" v-html="renderVNodeToHTML(data[item.param])" />
        <span v-else>{{ data[item.param] }}</span>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { createApp, h } from 'vue';

interface listType {
  label: string | number
  param: any
  type?: any
  span?: number
  renderContent?: boolean
}

interface Props {
  labelPlacement?: 'center' | 'left' | 'right'
  title?: any
  describeList: listType[]
  column?: number
  data: any
}
withDefaults(defineProps<Props>(), {
  labelPlacement: 'left',
  title: '',
  describeList: () => []
})
// 渲染函数
function renderVNodeToHTML(content = '321') {
  const app = createApp({
    render() {
      return h('span', {}, content)
    }
  })
  const container = document.createElement('span')
  app.mount(container)
  return container.innerHTML
}
</script>

<style scoped></style>
