<template>
  <n-data-table
    ref="tableElRef"
    class="flex-1"
    v-bind="getBindValues"
    :data="data"
    :columns="columns"
    @update:page="updatePage"
    @update:page-size="updatePageSize"
  />
</template>

<script setup lang="ts">
import { computed, unref } from 'vue'
import { TableBasicColumn, TableBasicProps } from './types'
import { usePagination } from './hooks/usePagination'

const props = withDefaults(defineProps<TableBasicProps>(), {
  remote: false,
  striped: true,
  singleLine: false,
  bottomBordered: true,
  flexHeight: true,
  showPagination: true
})

const getProps = computed(() => {
  return { ...props }
})

const { getPagination, setPagination } = usePagination(unref(getProps))

// 横向滚动宽度
const scrollX = computed(() => {
  return props.columns?.reduce((a: number, b: TableBasicColumn) => {
    return a + +(b.width || 0)
  }, 0)
})

const getBindValues = computed(() => {
  const { columns } = unref(getProps)

  return {
    ...unref(getProps),
    columns,
    scrollX: unref(scrollX),
    pagination: getPagination()
  }
})
console.log(getBindValues.value)

//页码切换
function updatePage(page: number) {
  setPagination({ page: page })
}

//分页数量切换
function updatePageSize(size: number) {
  setPagination({ page: 1, pageSize: size })
}

defineExpose({ setPagination })
</script>

<style scoped></style>
