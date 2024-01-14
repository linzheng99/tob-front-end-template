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
    :loading="loading"
    :scroll-x="scrollX"
  />
</template>

<script setup lang="ts">
import { EditBasicColumn } from '@/components/EditRowTable/types/editColumn'
import { useColumns } from './composable'
import { createTableContext } from './composable/useTableContext'
import { EditRecordResponse, EditRecordRow } from './types/editColumn'
import { ref, computed } from 'vue';

defineOptions({
  name: 'basicEditTable'
})
interface Emit {
  (e: 'edit-cancel', value: EditRecordResponse): void
  (e: 'edit-submit', value: EditRecordRow): void
}
interface Props {
  data: Recordable[]
  columns: EditBasicColumn[]
  loading: boolean
  scrollX?: number
}
const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const tableElRef = ref(null)
createTableContext({ emit, wrapRef: tableElRef })

const { getColumns } = useColumns()

const getBindValues = computed(() => {
  return {
    columns: getColumns(props.columns)
  }
})

function submitAllEditable(): EditRecordRow[] {
  const arrayRecord: EditRecordRow[] = []
  let rows = props.data.filter((i) => i.editable === true)
  rows.forEach((r) => {
    arrayRecord.push(r?.onSubmitEdit())
  })
  return arrayRecord
}

defineExpose({ submitAllEditable })
</script>

<style scoped></style>
