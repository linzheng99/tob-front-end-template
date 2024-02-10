<template>
  <TableRender
    :data="data"
    :columns="columns"
    :action-column="actionColumn"
    :flex-height="false"
    @handle-action="handleAction"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
  TableBasicRecordRow,
} from '@/components/TableRender/types/column'
import TableRender from '@/components/TableRender/index.vue'

// 数据源
const data = ref(
  Array.from({ length: 21 }).map((_, index) => ({
    name: `name - ${index}`,
    age: 18,
    address: `address - ${index}`,
  })),
)
// 列
const columns = reactive<TableBasicColumn[]>([
  {
    title: '序号',
    align: 'center',
    key: 'index',
    width: 60,
    fixed: 'left',
    render: (_, index) => `${index + 1}`,
  },
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '年龄',
    key: 'name',
    align: 'center',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '地址',
    key: 'address',
    align: 'center',
    width: 250,
    ellipsis: { tooltip: true },
  },
])
// 操作列
const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})
// 使用函数去创建操作列的按扭(个人觉得使用函数可以接收这个列的数据,可以做更多的事情)
function actionBtns(record: TableBasicRecordRow): Actions[] {
  const isShow = record.editable
  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
      },
    },
    {
      show: !!isShow,
      iconConfig: { icon: 'ep-search' },
      title: '取消',
      componentProps: {
        type: 'primary',
      },
    },
  ]
}
// 点击操作列中按扭的回调
function handleAction(item: ActionValues) {
  console.log(item)
}
</script>
