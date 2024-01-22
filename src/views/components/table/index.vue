<template>
  <div class="h-full w-full flex flex-col">
    <div flex mb-2 space-x-2>
      <n-button @click="changeProps" type="primary">chang click</n-button>
      <n-button @click="fetchApi" type="primary">fetch</n-button>
    </div>
    <TableRender
      ref="tableRef"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :request-api="promiseApiWithException"
    />
  </div>
</template>

<script setup lang="ts">
import TableRender from '@/components/TableRender/index.vue'
import { ResponseApi } from '@/components/TableRender/types'
import { ref } from 'vue'
import { TableActionType } from '@/components/TableRender/types'

const tableRef = ref<TableActionType>()
const pagination = ref({ pageSize: 10 })

const columns = [
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
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

function changeProps() {
  pagination.value.pageSize = 20
}

async function fetchApi() {
  // TODO
  try {
    tableRef.value?.reloadData()
  } catch (error) {
    console.log(error)
  }
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
