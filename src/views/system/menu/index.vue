<template>
  <div id="app_content">
    <div class="mb-2.5">
      <n-button type="primary" size="small">
        新增菜单
      </n-button>
    </div>
    <TableRender
      :data="data"
      :columns="columns"
      :action-column="actionColumn"
      :flex-height="false"
      @handle-action="handleAction"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import TableRender from '@/components/TableRender/index.vue'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
  TableBasicRecordRow,
} from '@/components/TableRender/types'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'

interface Data {
  name: string
  age: number
  address: string
}

const data = ref<Data[]>([{ name: 'linzheng', age: 18, address: 'china' }])
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

const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 260,
  actions: record => actionBtns(record),
})
async function handleAction(item: ActionValues) {
  const { record, title } = item
  console.log(record, title)
  // switch (title) {
  //   case '编辑':
  //     await record.onEdit?.(true)
  //     break
  //   case '保存':
  //     await record.onSubmitEdit?.()
  //     break
  //   case '取消':
  //     record.onCancelEdit?.()
  //     break

  //   default:
  //     break
  // }
}

function actionBtns(record: TableBasicRecordRow): Actions[] {
  console.log(record)
  return [
    {
      iconConfig: { icon: 'ep-plus' },
      title: '新增',
    },
    {
      iconConfig: { icon: 'ep-edit' },
      title: '编辑',
    },
    {
      iconConfig: { icon: 'ep-search' },
      title: '删除',
      componentProps: {
        type: 'error',
      },
    },
  ]
}
</script>

<style lang="scss" scoped></style>
