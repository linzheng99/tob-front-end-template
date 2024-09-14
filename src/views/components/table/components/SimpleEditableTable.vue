<template>
  <div class="h-full flex flex-col">
    <TableRender
      ref="tableRef"
      class="flex-1"
      :data="data"
      :columns="columns"
      :request-api="requestDataSource"
      :action-column="actionColumn"
      :request-params="getParams"
      @request-success="requestSuccess"
      @handle-action="handleAction"
      @edit-submit="editSubmit"
      @edit-change="editChange"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import TableRender from '@/components/TableRender/index.vue'
import type { ResponseApi, TableActionType } from '@/components/TableRender/types'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
  TableBasicRecordRow,
} from '@/components/TableRender/types/column'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'

interface Data {
  name: string
  age: number
  address: string
}

onMounted(() => {
  fetchApi()
})

const getParams = reactive({
  type: 1,
  name: 'lin',
})

const tableRef = ref<TableActionType>()
const data = ref<Data[]>([])

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
    editable: true,
  },
  {
    title: '年龄',
    key: 'age',
    align: 'center',
    width: 250,
    editable: true,
  },
  {
    title: '地址',
    key: 'address',
    align: 'center',
    width: 250,
    editable: true,
  },
])

const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})

// 操作列按扭渲染
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

// 在保存 edit 时触发
function editSubmit(values: { index: number, record: Recordable }) {
  console.warn(values)
}

// 在改变 column 中数据触发
function editChange(values) {
  const { record, key } = values
  console.warn(record, key)
}

// 点击操作列按扭触发
async function handleAction(item: ActionValues) {
  const { record, title } = item
  switch (title) {
    case '编辑':
      await record.onEdit?.(true)
      break
    case '保存':
      await record.onSubmitEdit?.()
      break
    case '取消':
      record.onCancelEdit?.()
      break

    default:
      break
  }
}

// fetch
async function fetchApi() {
  await tableRef.value?.reloadData()
}

// 请求成功
function requestSuccess(responseData) {
  data.value = responseData
}

// api
function requestDataSource() {
  return new Promise<ResponseApi>((resolve) => {
    // 模拟一个异步操作
    setTimeout(() => {
      const apiResponse = Array.from({ length: 9 }).map((_, index) => ({
        name: `name - ${index}`,
        age: 18,
        address: `address - ${index}`,
      }))
      resolve({
        items: apiResponse,
        totalItems: apiResponse.length,
        totalPages: 1,
        currentPage: 1,
      })
    }, 1000) // 模拟异步操作的延迟
  })
}
</script>

<style scoped></style>
