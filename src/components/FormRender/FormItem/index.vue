<template>
  <n-form-item
    v-for="(item, index) in formItems"
    :key="index"
    :label="item.label"
    :path="item.path ? item.path : item.value"
  >
    <n-input
      v-if="item.itemType === 'input'"
      v-model:value="formValue[item.value]"
      :placeholder="item.placeholder"
    />
  </n-form-item>
  <span> form.item: {{ formValue }} </span>
</template>

<script lang="ts">
import { FormItemType } from '../form-types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'FormItem',
  props: {
    formValue: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({})
    },
    formItems: {
      type: Array as PropType<FormItemType[]>,
      default: () => [
        {
          label: 'FormItem',
          path: '',
          placeholder: '',
          value: 'name',
          itemType: 'input'
        }
      ]
    }
  },
  setup(props) {
    const { formItems, formValue } = props
    return { formItems, formValue }
  }
})
</script>

<style scoped></style>
