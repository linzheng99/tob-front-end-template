<template>
  <n-data-table
    ref="tableElRef"
    class="flex-1"
    v-bind="getBindValues"
    @update:page="updatePage"
    @update:page-size="updatePageSize"
  />
</template>

<script setup lang="ts">
import { computed, reactive, ref, unref } from 'vue'
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
  (e: 'edit-submit', values: TableBasicRecordRow): void
  (e: 'edit-cancel', values: { record: TableBasicRecordRow, index: number }): void
  (
    e: 'edit-change',
    values: { record: TableBasicRecordRow, index: number, value: any, key: string }
  ): void
}

const getProps = computed(() => {
  return { ...props }
})
const tableData = ref<Recordable[]>([])

const { getPagination, setPagination } = usePagination(unref(getProps))
const { getLoading, setLoading } = useLoading()
const { getColumns } = useColumns(getProps, emit)
const { requestData } = useDataSource({
  setLoading,
  requestApi: props.requestApi,
  setPagination,
  getPagination,
})

// 横向滚动宽度
const scrollX = computed(() => {
  return props.columns?.reduce((a: number, b: TableBasicColumn) => {
    return a + +(b.width || 0)
  }, 0)
})

const getBindValues = computed(() => {
  const { remote } = unref(getProps)

  const configProps = reactive<Recordable>({})

  // 是否异步
  if (remote)
    configProps.data = unref(tableData)

  return {
    ...unref(getProps),
    columns: unref(getColumns),
    scrollX: unref(scrollX),
    pagination: getPagination(),
    loading: unref(getLoading),
    ...configProps,
  }
})

async function reloadData(params?: any) {
  try {
    const data = await requestData(params)
    tableData.value = data || []
  }
  catch (error) {
    tableData.value = []
    throw new Error(`${error}`)
  }
}

// 页码切换
function updatePage(page: number) {
  setPagination({ page })
}

// 分页数量切换
function updatePageSize(size: number) {
  setPagination({ page: 1, pageSize: size })
}

const tableAction: TableActionType = {
  setPagination,
  reloadData,
  setLoading,
}

defineExpose({ ...tableAction, tableElRef })
</script>

<style scoped></style>
