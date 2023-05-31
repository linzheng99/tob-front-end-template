<template>
  <n-descriptions :label-placement="labelPlacement" :title="title" bordered :column="column" :label-align="labelAlign">
    <n-descriptions-item v-for="(item, index) in describeList" :key="index" :span="item.span"
      :label-style="itemLabelStyle || { width: '130px', padding: '11px 10px' }"
      :content-style="itemContentStyle || { padding: '11px 10px' }">
      <template #label> {{ item.label }} </template>
      <template #default>
        <span v-if="item.render">
          <renderVNode :createVNode="item.render(data, item.param)" />
        </span>
        <span v-else>{{ data[item.param] }}</span>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import renderVNode from './renderVNode'

interface listType {
  label: string | number
  param: any
  type?: any
  span?: number
  renderContent?: boolean
  render?: (a, b) => {}
}

interface Props {
  labelPlacement?: 'center' | 'left' | 'right'
  title?: any
  describeList: listType[]
  column?: number
  data: any
  itemLabelStyle?: any
  itemContentStyle?: any
  labelAlign?: 'left' | 'right'
}
withDefaults(defineProps<Props>(), {
  labelPlacement: 'left',
  title: '',
  describeList: () => [],
  labelAlign: 'right'
})
</script>

<style scoped>
</style>
