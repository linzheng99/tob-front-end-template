<template>
  <div class="h-full w-full flex flex-col">
    <div flex mb-2 space-x-2>
      <n-button @click="changePage" type="primary">chang page</n-button>
      <n-button @click="fetchApi" type="primary">fetch</n-button>
      <n-button @click="changeColumn" type="primary">column</n-button>
      <n-button @click="changeLoading" type="primary">loading</n-button>
    </div>
    <TableRender
      ref="tableRef"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :request-api="promiseApiWithException"
      :action-column="actionColumn"
      @handle-action="handleAction"
      @edit-submit="editSubmit"
      @edit-change="editChange"
    />
  </div>
</template>

<script setup lang="ts">
import TableRender from '@/components/TableRender/index.vue'
import { ResponseApi } from '@/components/TableRender/types'
import { ref, reactive } from 'vue'
import { TableActionType } from '@/components/TableRender/types'
import { TableBasicActionColumn } from '@/components/TableRender/types/column'
import { ActionValues, TableBasicColumn } from '@/components/TableRender/types/column'
import { Actions } from '@/components/TableRender/components/actionColumn/types'
import { TreeOption } from 'naive-ui'

const tableRef = ref<TableActionType>()
const pagination = ref({ pageSize: 10 })
const isDisable = ref(false)

function editSubmit(values) {
  console.log(values)
}
function editChange(values) {
  const { record, key } = values
  console.log('change', values)
  console.log(record.editValueRefs)
  if (key === 'age') {
    record.editValueRefs.address = '2'
  }
}

// TODO 把 click 放到props里面
const actionColumn: TableBasicActionColumn = reactive({
  key: 'action',
  title: '操作',
  width: 200,
  actions: (record) => actionBtns(record)
})
async function handleAction(item: ActionValues) {
  console.log('page', item)
  const { record, title } = item
  switch (title) {
    case '编辑':
      record.onEdit && (await record.onEdit(true))
      options.value = [
        {
          value: 'nan',
          label: '男'
        },
        {
          value: 'nv',
          label: '女'
        }
      ]
      break
    case '保存':
      record.onSubmitEdit && (await record.onSubmitEdit())
      break
    case '取消':
      record.onCancelEdit && record.onCancelEdit()
      break

    default:
      break
  }
}

const options = ref<TreeOption[]>([])

const columns = reactive<TableBasicColumn[]>([
  {
    title: 'Name',
    key: 'name',
    editable: true,
    editComponent: 'NInput'
  },
  {
    title: 'Age',
    key: 'age',
    align: 'center',
    editRequired: true,
    editRule: async (record) => {
      console.log('editRule', record)
      if (record.age !== '18') {
        console.log('!==');
        
        return false
      }
      return true
    },
    editable: true,
    editComponent: 'NInput',
    editComponentProps: {}
  },
  {
    title: 'Address',
    key: 'address',
    editable: true,
    editComponent: 'NInput',
    editRequired: true,
    editRule: async () => {
      return true
    }
  },
  {
    title: 'sex',
    key: 'sex',
    editable: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: options,
      onUpdateValue(e) {
        console.log(e)
      }
    }
  }
])

const data = ref(
  Array.from({ length: 46 }).map((_, index) => ({
    key: index,
    name: `Edward King ${index}`,
    age: 32,
    address: `London, Park Lane no. ${index}`
  }))
)

function changePage() {
  pagination.value.pageSize = 20
}

async function fetchApi() {
  try {
    await tableRef.value?.reloadData()
  } catch (error) {
    console.log(error)
  }
}

function changeColumn() {
  isDisable.value = !isDisable.value
}

function actionBtns(record): Actions[] {
  const isShow = record.editable
  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
        disabled: isDisable.value
      }
    },
    {
      show: !!isShow,
      iconConfig: { icon: 'ep-search' },
      title: '取消',
      componentProps: {
        type: 'primary'
      }
    }
  ]
}

function promiseApiWithException() {
  return new Promise<ResponseApi>((resolve, reject) => {
    // 模拟一个异步操作
    setTimeout(() => {
      const shouldReject = Math.random() < 0.5
      if (shouldReject) {
        reject(new Error('Simulated API Error'))
      } else {
        resolve({
          content: { data: [{ name: 'haha', address: 'address' }], total: 1 },
          code: 200,
          msg: 'msg'
        })
      }
    }, 1000) // 模拟异步操作的延迟
  })
}

function changeLoading() {
  tableRef.value?.setLoading(true)
  setTimeout(() => {
    tableRef.value?.setLoading(false)
  }, 1000)
}
</script>

<style scoped></style>
