<template>
  <template v-if="!isEdit">
    <n-ellipsis :class="`${column.width ? `max-w: ${column.width}` : ''}`">
      {{ tramsformValue }}
    </n-ellipsis>
  </template>
  <template v-else>
    <!-- 能否抽成一个组件 后面还会出现日期选择器的组件 -->
    <component
      v-if="isCheckComp"
      :is="getComponent"
      v-bind="getComponentProps"
      @update:value="handleChange"
      v-model:checked="currentValueRef"
      class="flex-1"
    />
    <component
      v-else
      :is="getComponent"
      v-bind="getComponentProps"
      @update:value="handleChange"
      v-model:value="currentValueRef"
      class="flex-1"
    />
  </template>
</template>

<script setup lang="ts">
import { computed, ref, unref, watchEffect, nextTick } from 'vue';
import { TableBasicColumn, TableBasicRecordRow, EmitType } from '../../types/column'
import { componentMap } from '@/components/EditRowTable/componentMap'
import { isArray} from '@/utils/is'
import { set} from 'lodash-es';

interface Props {
  column: TableBasicColumn
  value: any
  record: TableBasicRecordRow
  index: number
  emit: EmitType
}

const props = defineProps<Props>()

// 当前值
const currentValueRef = ref(props.value)
const defaultValueRef = ref(props.value)

watchEffect(() => {
  defaultValueRef.value = props.value
})

async function handleChange() {
  const { emit, record, index, column } = props
  await nextTick()
  emit('edit-change', { record, index, value: unref(currentValueRef), key: column.key })
}

async function AddRecordAttribute() {
  initCbs('cancelCbs', handleCancel)
  initCbs('submitCbs', handleSubmit)
  setEditValue()
  props.record.onSubmitEdit = async () => onSubmitEdit()
  props.record.onCancelEdit = () => onCancelEdit()
}

function initCbs(cbs: 'submitCbs' | 'validCbs' | 'cancelCbs', handle: Fn) {
  if (props.record) {
    isArray(props.record[cbs]) ? props.record[cbs]?.push(handle) : (props.record[cbs] = [handle])
  }
}

function onSubmitEdit() {
  isArray(props.record?.submitCbs) && props.record?.submitCbs.forEach((fn) => fn())
  const { record, index, emit } = props
  emit('edit-submit', { record, index })
  return props.record
}

function onCancelEdit() {
  isArray(props.record?.cancelCbs) && props.record?.cancelCbs.forEach((fn) => fn())
  const { record, index, emit } = props
  emit('edit-cancel', { record, index })
}

function handleCancel() {
  props.record.editable = false
  currentValueRef.value = defaultValueRef.value
}

function setEditValue() {
  if (props.column.key) {
    if (!props.record.editValueRefs) props.record.editValueRefs = {}
    props.record.editValueRefs[props.column.key] = currentValueRef
  }
}

// TODO 校验rule
function handleSubmit() {
  props.record.editable = false
  const { column, record } = props
  if (!record) return false

  const { key } = column
  if (!key) return

  set(record, key, unref(currentValueRef))
}

// 回显
const tramsformValue = computed(() => {
  const { value } = props
  return value
})

const isEdit = computed(() => {
  const { column, record } = props
  return column.editable && record.editable
})

const getComponent = computed(() => componentMap.get(props.column.editComponent || 'NInput'))

// 是否是 v-model:checked 的组件(选择类组件)
const isCheckComp = computed(() => {
  const {
    column: { editComponent }
  } = props
  if (!editComponent) return false

  return ['NCheckbox'].includes(editComponent)
})

const getComponentProps = computed(() => {
  const compProps = props.column?.editComponentProps || {}

  return {
    clearable: true,
    ...compProps,
  }
})

AddRecordAttribute()
</script>

<style scoped></style>
