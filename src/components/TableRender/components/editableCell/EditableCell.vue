<template>
  <template v-if="!isEdit">
    <n-ellipsis :class="`${column.width ? `max-w: ${column.width}` : ''}`">
      {{ tramsformValue }}
    </n-ellipsis>
  </template>
  <template v-else>
    <CellComponent
      v-bind="getComponentProps"
      :component="getComponent"
    />
    <!-- 能否抽成一个组件 后面还会出现日期选择器的组件 -->
    <!-- <n-popover :show="!!showPop" placement="bottom" trigger="manual" :animated="false">
      <template #trigger>
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
      <div>
        {{ ruleMsg }}
      </div>
    </n-popover> -->
  </template>
</template>

<script setup lang="ts">
import { computed, ref, unref, watchEffect, nextTick } from 'vue'
import { TableBasicColumn, TableBasicRecordRow, EmitType } from '../../types/column'
import { isArray } from '@/utils/is'
import { set } from 'lodash-es'
import { createPlaceholderMessage } from '@/utils/helper/createPlaceholder'
import { CellComponent } from '../editableCell/CellComponent.ts'

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
const ruleMsg = ref<string>('')
const ruleVisible = ref(false)

const showPop = computed(() => {
  console.log(ruleMsg.value, ruleVisible.value)

  return unref(ruleMsg) && unref(ruleVisible)
})

watchEffect(() => {
  defaultValueRef.value = props.value
})

async function handleChange(e) {
  const { emit, record, index, column } = props
  console.log(e);
  
  currentValueRef.value = e;
  console.log(currentValueRef.value);
  

  await nextTick()
  emit('edit-change', { record, index, value: unref(currentValueRef), key: column.key })

  await handleEditableRule()
}

async function AddRecordAttribute() {
  initCbs('cancelCbs', handleCancel)
  initCbs('submitCbs', handleSubmit)
  initCbs('validCbs', handleEditableRule)
  collectEditValue()
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
  // TODO 优化成pop组件
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

async function handleEditableRule(): Promise<Error | boolean> {
  const { column, record } = props
  const { editRule, editRequired, editComponent } = column
  const currentValue = unref(currentValueRef)

  if (editRequired) {
    // TODO 数字
    if (!currentValue) {
      ruleVisible.value = true
      ruleMsg.value = createPlaceholderMessage(editComponent) || ''
      // window.$message?.error('必填')
      return false
    }
    if (editRule) {
      try {
        const res = await editRule(currentValue, record)
        if (res) {
          resetRule()
        }
        return res
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
  }

  resetRule()
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
  resetRule()
}

function collectEditValue() {
  const { column, record } = props
  if (column.key) {
    if (!record.editValueRefs) record.editValueRefs = {}
    record.editValueRefs[column.key] = currentValueRef
  }
}

function handleSubmit() {
  props.record.editable = false
  const { column, record } = props
  if (!record) return false

  const { key } = column
  if (!key) return

  set(record, key, unref(currentValueRef))
  resetRule()
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

// const getComponent = computed(() => componentMap.get(props.column.editComponent || 'NInput'))
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
  const isChecked =unref(isCheckComp)
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

function resetRule() {
  ruleVisible.value = false
  ruleMsg.value = ''
}

AddRecordAttribute()
</script>

<style scoped></style>
