<template>
  <div class="h-full w-full flex flex-col">
    <div flex mb-2 space-x-2>
      <n-button @click="changePage" type="primary">chang page</n-button>
      <n-button @click="fetchApi" type="primary">fetch</n-button>
      <n-button @click="changeColumn" type="primary">column</n-button>
    </div>
    <TableRender
      ref="tableRef"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :request-api="promiseApiWithException"
      :action-column="actionColumn"
      @handle-action="handleAction"
    />
  </div>
</template>

<script setup lang="ts">
import TableRender from '@/components/TableRender/index.vue'
import { ResponseApi } from '@/components/TableRender/types'
import { ref, reactive } from 'vue'
import { TableActionType } from '@/components/TableRender/types'
import { TableBasicActionColumn } from '@/components/TableRender/types/column'
import { ActionValues } from '../../../components/TableRender/types/column'

const tableRef = ref<TableActionType>()
const pagination = ref({ pageSize: 10 })
const isDisable = ref(false)

const actionColumn: TableBasicActionColumn = reactive({
  key: 'action',
  title: '操作',
  width: 200,
  actions: () => {
    return [
      {
        iconConfig: { icon: 'ep-search' },
        title: '查看',
        componentProps: {
          type: 'primary',
          disabled:  isDisable.value
        }
      },
      {
        iconConfig: { icon: 'ep-search' },
        title: '查看2',
        componentProps: {
          type: 'primary'
        }
      }
    ]
  }
})
function handleAction(item: ActionValues) {
  console.log('page', item)
}

const columns = ref([
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
])

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

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
</script>

<style scoped></style>
