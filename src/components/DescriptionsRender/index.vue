<template>
  <n-descriptions
    :label-placement="labelPlacement"
    :title="title"
    bordered
    :column="column"
    :label-align="labelAlign"
  >
    <n-descriptions-item
      v-for="(item, index) in describeList"
      :key="index"
      :span="item.span"
      :label-style="finallyItemLabelStyle"
      :content-style="finallyItemContentStyle"
    >
      <template #label> {{ item.label }} </template>
      <template #default>
        <span v-if="item.render">
          <RenderVNode :createVNode="item.render" :data="data" :param="item.param" />
        </span>
        <span v-else>{{ data[item.param] }}</span>
      </template>
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { extend } from '@/utils/share'
import { ListType } from './types'
import RenderVNode from './renderVNode.tsx'

interface Props {
  labelPlacement?: 'center' | 'left' | 'right'
  title?: any
  describeList: ListType[]
  column?: number
  data: any
  itemLabelStyle?: any
  itemContentStyle?: any
  labelAlign?: 'left' | 'right'
}
const props = withDefaults(defineProps<Props>(), {
  labelPlacement: 'left',
  title: '',
  describeList: () => [],
  labelAlign: 'right',
  itemContentStyle: () => {},
  itemLabelStyle: () => {}
})

const finallyItemContentStyle = ref({ padding: '11px 10px', verticalAlign: 'middle' })
const finallyItemLabelStyle = ref({ width: '130px', padding: '11px 10px' })
onMounted(() => {
  extend(finallyItemContentStyle.value, props.itemContentStyle)
  extend(finallyItemLabelStyle.value, props.itemLabelStyle)
})
</script>

<style scoped></style>
