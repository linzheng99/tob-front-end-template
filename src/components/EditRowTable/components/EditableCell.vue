<template>
  <div class="flex">
    <div v-if="!isEdit"> {{ value }} </div>
    <div v-else>
      <component
        v-if="isEdit"
        v-bind="getComponentProps(column)"
        :is="getComponent(column.editComponent)"
        v-model:value="newRecordKeyValue[column.key]"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditBasicColumn } from '../types/editColumn'
import { componentMap } from '../componentMap'
import { ComponentType } from '../types/componentType'
import { useEditTableStore } from '../store/editTable'

const { data } = useEditTableStore()

defineOptions({
  name: 'EditableCell'
})

interface Props {
  column: EditBasicColumn
  value: string | number | boolean | Recordable | Recordable[]
  record: Recordable
  index: number
}

const props = defineProps<Props>()

const isEdit = computed(() => {
  return props.column.editable
})

const newRecordKeyValue = toRefs(props.record)

// const getValues = computed(() => {
//   return props.value || null
// })

/**
 * @description 匹配组件并赋值对应组件的所有配置
 */
function getComponentProps(schema: EditBasicColumn) {
  const compProps = schema?.editComponentProps || {}
  return {
    clearable: true,
    ...compProps,
    onUpdateValue: (e: any) => {
      // newRecordKeyValue = e
      data[props.index]![props.column.key] = e
      console.log(e)
    }
  }
}

/**
 * @description 匹配组件
 */

function getComponent(component: ComponentType = 'NInput') {
  return componentMap.get(component || 'NInput')
}
</script>

<style scoped></style>
