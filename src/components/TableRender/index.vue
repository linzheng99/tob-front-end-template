<template>
  <n-data-table
    ref="tableElRef"
    v-bind="getBindValues"
    :row-key="(row: TableBasicRecordRow) => row.id || row._key"
    @update:page="updatePage"
    @update:page-size="updatePageSize"
  />
</template>

<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import type { TableBasicColumn, TableBasicProps } from './types'
import { usePagination } from './hooks/usePagination'
import { useLoading } from './hooks/useLoading'
import { useDataSource } from './hooks/useDataSource'
import { useColumns } from './hooks/useColumns'
import type { ActionValues, TableBasicRecordRow } from './types/column'
import type { TableActionType } from './types/tableActionType'

const props = withDefaults(defineProps<TableBasicProps>(), {
  remote: false,
  striped: true,
  singleLine: false,
  bottomBordered: true,
  flexHeight: true,
  showPagination: true,
})

const emit = defineEmits<Emit>()
const tableElRef = ref(null)

interface Emit {
  (e: 'handle-action', values: ActionValues): void
  (e: 'edit-submit', values: { record: TableBasicRecordRow, index: number }): void
  (e: 'edit-cancel', values: { record: TableBasicRecordRow, index: number }): void
  (
    e: 'edit-change',
    values: { record: TableBasicRecordRow, index: number, value: any, key: string }
  ): void
  (e: 'request-success', value: any): void
  (e: 'request-error'): void
}

const getProps = computed(() => {
  return { ...props }
})

const { getPagination, setPagination } = usePagination(unref(getProps))
const { getLoading, setLoading } = useLoading()
const { getColumns } = useColumns(getProps, emit)
const { requestData } = useDataSource({
  emit,
  setLoading,
  requestApi: props.requestApi,
  setPagination,
  getPagination,
  requestParams: props.requestParams,
})

// 横向滚动宽度
const scrollX = computed(() => {
  const calculateWidth = (columns: TableBasicColumn[]) => {
    return columns.reduce((totalWidth: number, column: TableBasicColumn) => {
      totalWidth += +(column.width || 0)

      if (column.children && column.children.length > 0)
        totalWidth += calculateWidth(column.children)

      return totalWidth
    }, 0)
  }

  return calculateWidth(props.columns)
})

const getBindValues = computed(() => {
  return {
    ...unref(getProps),
    columns: unref(getColumns),
    scrollX: unref(scrollX),
    pagination: getPagination(),
    loading: unref(getLoading),
  }
})

async function reloadData(params?: any) {
  try {
    await requestData(params)
  }
  catch (error) {
    throw new Error(`${error}`)
  }
}

// 页码切换
async function updatePage(page: number) {
  setPagination({ page })
  await reloadData()
}

// 分页数量切换
async function updatePageSize(size: number) {
  setPagination({ page: 1, pageSize: size })
  await reloadData()
}

const tableAction: TableActionType = {
  setPagination,
  reloadData,
  setLoading,
}

defineExpose({ ...tableAction, tableElRef })
</script>

<style scoped></style>
