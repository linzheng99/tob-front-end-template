<template>
  <div class="h-full w-full flex flex-col">
    <div mb-2>
      <n-button @click="changeProps" type="primary">chang click</n-button>
    </div>
    <TableRender :data="data" :columns="columns" :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
import TableRender from '@/components/TableRender/index.vue'
import { ref } from 'vue'

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
</script>

<style scoped></style>
