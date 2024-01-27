<template>
  <template v-if="!isEdit">
    <n-ellipsis :class="`${column.width ? `max-w: ${column.width}` : ''}`">
      {{ tramsformValue }}
    </n-ellipsis>
  </template>
  <template v-else>
    <div :class="getEditColumnClass">
      <CellComponent
        v-bind="getComponentProps"
        :component="getComponent"
        :ruleMessage="ruleMessage"
        :popoverVisible="popoverVisible"
        :editRule="getEditRule"
      />
      <EditRenderVNode
        v-for="v in editRenders"
        :key="v.key"
        :create-v-node="v.render"
        :value="getEditValueRefs?.[v.key]"
        :edit-values="getEditValueRefs"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, ref, unref, watchEffect, nextTick } from 'vue'
import { TableBasicColumn, TableBasicRecordRow, EmitType } from '../../types/column'
import { isArray } from '@/utils/is'
import { set } from 'lodash-es'
import { createPlaceholderMessage } from '@/utils/helper/createPlaceholder'
import { CellComponent } from '../editableCell/CellComponent'
import EditRenderVNode from './EditRenderVNode'
import { isBoolean, isFunction } from '@/utils/is'

defineOptions({
  name: 'EditableCell'
})

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
const ruleMessage = ref<string>('')
const ruleVisible = ref(false)

// edit模式下 render 多个自定义的 comp
const editRenders = ref(props.column.editRenders)
const getEditValueRefs = computed(() => {
  return props.record.editValueRefs
})

const getEditRule = computed(() => props.column.editRule)

const popoverVisible = computed(() => {
  return unref(ruleMessage) && unref(ruleVisible)
})

watchEffect(() => {
  defaultValueRef.value = props.value
})

// 样式
const getEditColumnClass = computed(() => {
  return props.column.editCompClass
})

async function handleChange(e) {
  const { emit, record, index, column } = props
  currentValueRef.value = e
  await nextTick()
  emit('edit-change', { record, index, value: unref(currentValueRef), key: column.key })

  await handleEditableRule()
}

async function AddRecordAttribute() {
  initCbs('cancelCbs', handleCancel)
  initCbs('submitCbs', handleSubmit)
  initCbs('validCbs', handleEditableRule)
  collectEditValue()
  collectEditRenderValue()
  props.record.onSubmitEdit = async () => onSubmitEdit()
  props.record.onCancelEdit = () => onCancelEdit()
}

function initCbs(cbs: 'submitCbs' | 'validCbs' | 'cancelCbs', handle: Fn) {
  const { record } = props
  if (record) {
    isArray(record[cbs]) ? record[cbs]?.push(handle) : (record[cbs] = [handle])
  }
}

async function onSubmitEdit() {
  const pass = await handleVerify()
  if (!pass) return false

  isArray(props.record?.submitCbs) && props.record?.submitCbs.forEach((fn) => fn())
  const { record, index, emit } = props
  emit('edit-submit', { record, index })
  return record
}

async function handleVerify() {
  const validFns = (props.record?.validCbs || []).map((fn) => fn())
  const res = await Promise.all(validFns)
  return res.every((item) => !!item)
}

async function handleEditableRule(): Promise<boolean> {
  const { column, record } = props
  const { editRule, editComponent } = column
  const currentValue = unref(currentValueRef)

  if (isBoolean(editRule)) {
    if (!currentValue) {
      setupEditRuleStatus(true, (createPlaceholderMessage(editComponent) || '') + column.title)
      return false
    }
  } else if (isFunction(editRule)) {
    try {
      const res = await editRule(currentValue, record)
      if (res) {
        setupEditRuleStatus(false, '')
      }
      return res
    } catch (error) {
      const msg = (error as Error).message
      setupEditRuleStatus(true, msg)
      return false
    }
  }
  setupEditRuleStatus(false, '')
  return true
}

function onCancelEdit() {
  isArray(props.record?.cancelCbs) && props.record?.cancelCbs.forEach((fn) => fn())
  const { record, index, emit } = props
  emit('edit-cancel', { record, index })
}

function handleCancel() {
  props.record.editable = false
  currentValueRef.value = defaultValueRef.value
  setupEditRuleStatus(false, '')
  collectEditValue()
  collectEditRenderValue()
}

function collectEditValue() {
  const { column, record } = props
  if (column.key) {
    if (!record.editValueRefs) record.editValueRefs = {}
    record.editValueRefs[column.key] = currentValueRef
  }
}

function collectEditRenderValue() {
  const {
    column: { editRenders },
    record
  } = props
  if (editRenders && editRenders.length) {
    const { editValueRefs } = record
    editRenders.forEach((render) => {
      const key = render['key']
      if (editValueRefs) editValueRefs[key] = ref(record[key])
    })
  }
}

function handleSubmit() {
  props.record.editable = false
  const { record } = props
  if (!record) return false

  setEditValue(record)
  setEditRenderValues(record)
  setupEditRuleStatus(false, '')
}

function setEditValue(record: TableBasicRecordRow) {
  const { column } = props
  const { key } = column
  if (key) set(record, key, unref(currentValueRef))
}

function setEditRenderValues(record: TableBasicRecordRow) {
  const renders = unref(editRenders)
  const values = unref(getEditValueRefs)
  if (renders && renders.length) {
    renders.forEach((v) => set(record, v.key, values?.[v.key]))
  }
}

// 回显
const tramsformValue = computed(() => {
  const { column, record } = props
  const { editComponent, textKey } = column
  let currentValue = unref(currentValueRef)

  if (editComponent?.includes('NSelect')) {
    return textKey ? record[textKey] : currentValue
  }

  return currentValue
})

const isEdit = computed(() => {
  const { column, record } = props
  return column.editable && record.editable
})

const getComponent = computed(() => props.column.editComponent || 'NInput')

// 是否是 v-model:checked 的组件(checkBox,radio组件)
const isCheckComp = computed(() => {
  const {
    column: { editComponent }
  } = props
  if (!editComponent) return false

  return ['NCheckbox'].includes(editComponent)
})

const getComponentProps = computed(() => {
  const { column } = props
  const { editComponentProps } = column
  const isChecked = unref(isCheckComp)
  // 绑定value & change事件
  const value = isChecked ? 'checked' : 'value'
  const onEvent = isChecked ? 'on-update:checked' : 'on-update:value'

  return {
    clearable: true,
    [value]: unref(currentValueRef),
    [onEvent]: handleChange,
    ...(editComponentProps || {})
  }
})

function setupEditRuleStatus(visble: boolean, message: string) {
  ruleVisible.value = visble
  ruleMessage.value = message
}

AddRecordAttribute()
</script>

<style scoped></style>
