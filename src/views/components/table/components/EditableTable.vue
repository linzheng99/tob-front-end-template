<template>
  <div class="h-full flex">
    <TableRender
      ref="tableRef"
      :data="data"
      :columns="columns"
      :request-api="requestDataSource"
      :action-column="actionColumn"
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
} from '@/components/TableRender/types/column'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'

interface Data {
  name: string
  age: number
  address: string
  sex: number
  sexStr: string
  date: string[]
}

onMounted(() => {
  fetchApi()
})

const tableRef = ref<TableActionType>()
const isDisable = ref(false)
const data = ref<Data[]>([])
const options = ref([
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 2,
  },
])

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
    title: '日期范围',
    key: 'date',
    align: 'center',
    width: 250,
    editable: true,
    labelKey: (record) => {
      return `${record.date.join('-')}`
    },
    editComponent: 'NDatePicker',
    editComponentProps: {
      type: 'daterange',
      valueFormat: 'yyyy-MM-dd',
    },
  },
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    width: 250,
    editable: true,
  },
  {
    title: '性别',
    key: 'sex',
    labelKey: 'sexStr',
    align: 'center',
    width: 250,
    editable: true,
    editRule: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: options.value,
    },
    editRenders: [
      {
        key: '',
        render({ editValues }) {
          return editValues.sex === 1 ? '男' : ''
        },
      },
    ],
  },
  {
    title: '年龄',
    key: 'age',
    align: 'center',
    width: 250,
    editable: true,
    editComponent: 'NInput',
    editRule: async (value, _record) => {
      if (+value > 18)
        throw new Error('请输入小于18的值')
      return true
    },
  },
  {
    title: '地址',
    key: 'address',
    align: 'center',
    width: 250,
    editable: true,
  },
])

function editSubmit(values) {
  const { record, index } = values
  data.value[index].sexStr = record.sex === 1 ? '男' : '女'
}
// 请求成功
function requestSuccess(responseData: Data[]) {
  data.value = responseData
}
function editChange(values) {
  const { record, key } = values
  console.log(record, key)
}

// TODO 把 click 放到props里面
const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})
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

async function fetchApi() {
  try {
    await tableRef.value?.reloadData()
  }
  catch (error) {
    console.log(error)
  }
}

function actionBtns(record): Actions[] {
  const isShow = record.editable
  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
        disabled: isDisable.value,
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

// api
function requestDataSource() {
  return new Promise<ResponseApi>((resolve) => {
    // 模拟一个异步操作
    setTimeout(() => {
      const apiResponse = Array.from({ length: 9 }).map((_, index) => ({
        name: `name - ${index}`,
        sex: index % 2 ? 1 : 2,
        sexStr: index % 2 ? '男' : '女',
        age: 18,
        address: `address - ${index}`,
        date: ['2024-02-09', '2024-02-10'],
      }))
      resolve({
        content: { data: apiResponse, total: apiResponse.length },
        code: 200,
        msg: 'success',
      })
    }, 1000) // 模拟异步操作的延迟
  })
}
</script>

<style scoped></style>
