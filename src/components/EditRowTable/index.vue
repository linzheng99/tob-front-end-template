<template>
  <n-data-table
    ref="tableElRef"
    class="flex-1"
    striped
    :single-line="false"
    :bottom-bordered="true"
    flex-height
    remote
    v-bind="getBindValues"
    :data="data"
    :scroll-x="scrollX"
    @update:page="updatePage"
    @update:page-size="updatePageSize"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useColumns } from './composable'
import { createTableContext } from './composable/useTableContext'
import { EditRecordResponse, EditRecordRow } from './types/editColumn'
import { BasicTableProps } from './types/props';
import { usePagination } from './composable/usePagination';
import { useLoading } from './composable/useLoading';
import { useDataSource } from './composable/useDataSource';

defineOptions({
  name: 'basicEditTable'
})
interface Emit {
  (e: 'edit-cancel', value: EditRecordResponse): void
  (e: 'edit-submit', value: EditRecordRow): void
  (e: 'fetch-success', value: any): void
}

const props = defineProps<BasicTableProps>()
const emit = defineEmits<Emit>()

const tableElRef = ref(null)
createTableContext({ emit, wrapRef: tableElRef })

const { getColumns } = useColumns()
const { getPaginationInfo, setPaginationInfo, getPagination } = usePagination(props)
const { getLoading, setLoading } = useLoading()
const { reload } = useDataSource({ emit, setLoading, getPagination, requestApi: props.requestApi })

const getBindValues = computed(() => {
  const { columns, showPagination, ...restProps } = props

  return {
    columns: getColumns(columns),
    pagination: showPagination ? getPaginationInfo.value : false,
    loading: getLoading.value,
    restProps
  }
})

async function fetchTableData () {
  const res = await reload(props.requestParams)
  return res
}

//页码切换
function updatePage(page: number) {
  setPaginationInfo({ page })
  fetchTableData()
}
//分页数量切换
function updatePageSize(size: number) {
  setPaginationInfo({ page: 1, pageSize: size })
  fetchTableData()
}

function submitAllEditable(): EditRecordRow[] {
  const arrayRecord: EditRecordRow[] = []
  let rows = props.data.filter((i) => i.editable === true)
  rows.forEach((r) => {
    arrayRecord.push(r?.onSubmitEdit())
  })
  return arrayRecord
}

defineExpose({ submitAllEditable, fetchTableData })
</script>

<style scoped></style>
