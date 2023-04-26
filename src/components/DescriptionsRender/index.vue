<template>
  <n-descriptions :label-placement="labelPlacement" :title="title" bordered :column="column">
    <n-descriptions-item v-for="(item, index) in describeList" :key="index" :span="item.span">
      <template #label> {{ item.label }} </template>
      <template #default>
        <span v-if="item.renderContent" v-html="renderVNodeToHTML(item.content)" />
        <span v-else>{{ item.content }}</span>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { createApp } from 'vue'

interface listType {
  label: string | number
  content: any
  type?: any
  span?: number
  renderContent?: boolean
}

interface Props {
  labelPlacement?: 'center' | 'left' | 'right'
  title?: any
  describeList: listType[]
  column?: number
}
withDefaults(defineProps<Props>(), {
  labelPlacement: 'left',
  title: '',
  describeList: () => [
    {
      label: '早餐',
      content: '包子'
    },
    {
      label: '早餐',
      content: '包子'
    }
  ]
})
// 渲染函数
function renderVNodeToHTML(vnode) {
  const app = createApp({
    render() {
      return vnode
    }
  })
  const container = document.createElement('span')
  app.mount(container)
  return container.innerHTML
}
</script>

<style scoped></style>
