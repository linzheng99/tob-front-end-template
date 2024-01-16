<template>
  <template v-if="!isEdit">
    <!-- 内容过长以及不需要增加 ellipsis: { tooltip: true } -->
    <n-ellipsis :class="`${column.width ? `max-w: ${column.width}` : ''}`">
      {{ value }}
    </n-ellipsis>
  </template>
  <template v-else>
    <component
      v-if="!getIsCheckComp"
      v-bind="getComponentProps(column)"
      :is="getComponent"
      v-model:value="currentValueRef"
      class="flex-1"
    />
    <component
      v-if="getIsCheckComp"
      v-bind="getComponentProps(column)"
      :is="getComponent"
      v-model:checked="currentValueRef"
      class="flex-1"
    />
  </template>
</template>

<script setup lang="ts">
import { computed, unref, ref, watchEffect } from 'vue';
import { EditBasicColumn, EditRecordRow, EditRecordValue } from '../types/editColumn'
import { componentMap } from '../componentMap'
import { useTableContext } from '../composable/useTableContext'
import { isArray, isBoolean, isNumber } from '@/utils/is'
import { set, omit } from 'lodash-es'

defineOptions({
  name: 'EditableCell'
})

interface Props {
  column: EditBasicColumn
  value: EditRecordValue
  record: EditRecordRow
  index: number
}
const props = defineProps<Props>()
const table = useTableContext()

// 当前值
const currentValueRef = ref(props.value)
const defaultValueRef = ref(props.value)
watchEffect(() => {
  defaultValueRef.value = props.value
})
const isEdit = computed(() => {
  return props.column.editable && props.record.editable
})

// 注册回调 cbs(callbacks)
function initCbs(callbacks: 'submitCbs' | 'validCbs' | 'cancelCbs', handle: Fn) {
  if (props.record) {
    /* eslint-disable  */
    isArray(props.record[callbacks])
      ? props.record[callbacks]?.push(handle)
      : (props.record[callbacks] = [handle])
  }
}

if (props.record) {
  initCbs('cancelCbs', handleCancel)
  initCbs('submitCbs', handleSubmit)
  initCbs('validCbs', handleRuleSubmit)
  /* eslint-disable  */
  props.record.onCancelEdit = () => {
    props.record.editable = false
    isArray(props.record?.cancelCbs) && props.record?.cancelCbs.forEach((fn) => fn())
  }
  props.record.onSubmitEdit = async () => {
    if (!isArray(props.record?.submitCbs)) return false
    const validFns = (props.record?.validCbs || []).map((fn) => fn())
    const res = await Promise.all(validFns)
    const pass = res.every((item) => !!item)
    if (!pass) return false

    props.record?.submitCbs.forEach((fn) => fn())
    table.emit?.(
      'edit-submit',
      omit(props.record, [
        'editable',
        'cancelCbs',
        'submitCbs',
        'validCbs',
        'onCancelEdit',
        'onEdit',
        'onSubmitEdit'
      ])
    )
    props.record.editable = false
    return props.record
  }
}

function handleCancel() {
  currentValueRef.value = defaultValueRef.value
  const { column, index, record } = props
  const { key } = column
  table.emit?.('edit-cancel', {
    record,
    index,
    key,
    value: unref(currentValueRef)
  })
}

function handleSubmit() {
  const { column, record } = props
  if (!record) return false
  const { key } = column
  const value = unref(currentValueRef)
  if (!key) return false

  set(record, key, value)
  return true
}

async function handleRuleSubmit() {
  const { column } = props
  const { editRequired, title } = column
  const currentValue = unref(currentValueRef)
  if (editRequired && !currentValue && !isBoolean(currentValue) && !isNumber(currentValue)) {
    window.$message?.error(`${title} 是必填的`)
    return false
  }
  return true
}

const getIsCheckComp = computed(() => {
  return ['NCheckbox'].includes(props.column.editComponent || '')
})

const getComponent = computed(() => {
  return componentMap.get(props.column.editComponent || 'NInput')
})

/**
 * @description 匹配组件并赋值对应组件的所有配置
 */
function getComponentProps(schema: EditBasicColumn) {
  const compProps = schema?.editComponentProps || {}

  return {
    clearable: true,
    ...compProps
  }
}
</script>

<style scoped></style>
