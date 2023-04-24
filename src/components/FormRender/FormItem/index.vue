<template>
  <n-form-item
    v-for="(item, index) in props.formItems"
    :key="index"
    :label="item.label"
    :path="item.path ? item.path : item.value"
  >
    <n-input
      v-if="item.itemType === 'input'"
      v-model:value="props.formValue[item.value]"
      :placeholder="item.placeholder"
    />
  </n-form-item>
  <span>
  form.item: {{ formValue }}
  </span>
</template>

<script setup lang="ts">
import { FormItemType } from '../form-types'
import { ref } from 'vue'

interface FormItemProps {
  formItems: FormItemType[]
  formValue: Record<string, any>
}

const props = withDefaults(defineProps<FormItemProps>(), {
  formItems: () => [
    {
      label: 'FormItem',
      path: '',
      placeholder: '',
      value: 'name',
      itemType: 'input'
    }
  ],
  formValue: () => ref({})
})
</script>

<style scoped></style>
