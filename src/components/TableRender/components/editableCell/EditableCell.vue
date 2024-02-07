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
        :rule-message="ruleMessage"
        :popover-visible="popoverVisible"
        :edit-rule="getEditRule"
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
import { computed, nextTick, ref, unref, watchEffect } from 'vue'
import { omit, set } from 'lodash-es'
import type { EmitType, TableBasicColumn, TableBasicRecordRow } from '../../types/column'
import { CellComponent } from '../editableCell/CellComponent'
import EditRenderVNode from './EditRenderVNode'
import { isArray, isBoolean, isFunction, isNumber, isString } from '@/utils/is'
import { createPlaceholderMessage } from '@/utils/helper/createPlaceholder'

defineOptions({
  name: 'EditableCell',
})

const props = defineProps<Props>()

interface Props {
  column: TableBasicColumn
  value: any
  record: TableBasicRecordRow
  index: number
  emit: EmitType
}

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

// 每次开启收集数据
watchEffect(() => {
  if (props.record.editable)
    addRecordAttribute()
})

watchEffect(() => {
  // 在某一些联动的场景下需要监听一下
  if (props.record.editValueRefs?.[props.column.key])
    handleEditableRule()
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

async function addRecordAttribute() {
  initCbs('cancelCbs', handleCancel)
  initCbs('submitCbs', handleSubmit)
  initCbs('validCbs', handleEditableRule)
  collectEditValue()
  collectEditRenderValue()
  // eslint-disable-next-line vue/no-mutating-props
  props.record.onSubmitEdit = async () => onSubmitEdit()
  // eslint-disable-next-line vue/no-mutating-props
  props.record.onCancelEdit = () => onCancelEdit()
}

function cleanRecordCbs() {
  const { record } = props
  const cbs = ['submitCbs', 'validCbs', 'cancelCbs']
  cbs.forEach((cb) => {
    if (record[cb]?.length)
      record[cb] = []
  })
}

function initCbs(cbs: 'submitCbs' | 'validCbs' | 'cancelCbs', handle: Fn) {
  const { record } = props
  if (record)
    isArray(record[cbs]) ? record[cbs]?.push(handle) : (record[cbs] = [handle])
}

async function onSubmitEdit() {
  const pass = await handleVerify()
  if (!pass)
    return false

  isArray(props.record?.submitCbs) && props.record?.submitCbs.forEach(fn => fn())
  const { record, index, emit } = props
  emit('edit-submit', {
    record: omitRecordKey(record),
    index,
  })
  cleanRecordCbs()
  return omitRecordKey(record)
}

async function handleVerify() {
  const validFns = (props.record?.validCbs || []).map(fn => fn())
  const res = await Promise.all(validFns)
  return res.every(item => !!item)
}

async function handleEditableRule(): Promise<boolean> {
  const { column, record } = props
  const { editRule, editComponent } = column
  const editCurrentValue = record.editValueRefs?.[column.key]

  if (isBoolean(editRule)) {
    if (!editCurrentValue && !isNumber(editCurrentValue)) {
      setupEditRuleStatus(true, (createPlaceholderMessage(editComponent) || '') + column.title)
      return false
    }
  }
  else if (isFunction(editRule)) {
    try {
      const res = await editRule(editCurrentValue, record)
      if (res)
        setupEditRuleStatus(false, '')

      return res
    }
    catch (error) {
      const msg = (error as Error).message
      setupEditRuleStatus(true, msg)
      return false
    }
  }
  setupEditRuleStatus(false, '')
  return true
}

function onCancelEdit() {
  isArray(props.record?.cancelCbs) && props.record?.cancelCbs.forEach(fn => fn())
  const { record, index, emit } = props
  emit('edit-cancel', { record, index })
}

function handleCancel() {
  // TODO
  // eslint-disable-next-line vue/no-mutating-props
  props.record.editable = false
  currentValueRef.value = defaultValueRef.value
  setupEditRuleStatus(false, '')
  collectEditValue()
  collectEditRenderValue()
}

function collectEditValue() {
  const { column, record } = props
  if (column.key) {
    if (!record.editValueRefs)
      record.editValueRefs = {}
    record.editValueRefs[column.key] = currentValueRef
  }
}

function collectEditRenderValue() {
  const {
    column: { editRenders },
    record,
  } = props
  if (editRenders && editRenders.length) {
    const { editValueRefs } = record
    editRenders.forEach((render) => {
      const key = render.key
      if (editValueRefs)
        editValueRefs[key] = ref(record[key])
    })
  }
}

function omitRecordKey(record: TableBasicRecordRow) {
  return omit(
    record,
    'editable',
    'onEdit',
    'onCancelEdit',
    'onSubmitEdit',
    '_key',
    'submitCbs',
    'cancelCbs',
    'editValueRefs',
    'validCbs',
  )
}

function handleSubmit() {
  // TODO
  // eslint-disable-next-line vue/no-mutating-props
  props.record.editable = false
  const { record } = props
  if (!record)
    return false

  setEditValue(record)
  setEditRenderValues(record)
  setupEditRuleStatus(false, '')
}

function setEditValue(record: TableBasicRecordRow) {
  const { column } = props
  const { key } = column
  if (key)
    set(record, key, unref(currentValueRef))
}

function setEditRenderValues(record: TableBasicRecordRow) {
  const renders = unref(editRenders)
  const values = unref(getEditValueRefs)
  if (renders && renders.length)
    renders.forEach(v => set(record, v.key, values?.[v.key]))
}

// 回显
const tramsformValue = computed(() => {
  const { column, record } = props
  const { labelKey } = column
  const currentValue = unref(currentValueRef)

  if (isString(labelKey))
    return record[labelKey]
  else if (isFunction(labelKey))
    return labelKey(record, currentValue)

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
    column: { editComponent },
  } = props
  if (!editComponent)
    return false

  return ['NCheckbox'].includes(editComponent)
})

const getComponentProps = computed(() => {
  const { column } = props
  const { editComponentProps, editComponent } = column
  const isChecked = unref(isCheckComp)
  // 绑定value & change事件
  let value = isChecked ? 'checked' : 'value'
  const onEvent = isChecked ? 'on-update:checked' : 'on-update:value'

  if (editComponent === 'NDatePicker') {
    if (isString(value)) {
      if (editComponentProps?.valueFormat)
        value = 'formatted-value'
    }
    else if (isArray(value)) {
      if (editComponentProps?.valueFormat)
        value = 'formatted-value'
    }
  }

  return {
    clearable: true,
    [value]: unref(currentValueRef),
    [onEvent]: handleChange,
    ...(editComponentProps || {}),
  }
})

function setupEditRuleStatus(visible: boolean, message: string) {
  ruleVisible.value = visible
  ruleMessage.value = message
}
</script>

<style scoped></style>
