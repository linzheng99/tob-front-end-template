<template>
  <div id="app_content">
    <FormRender :form-value="formValue" :form-items="formItems" :form-config="formConfig" />
    <n-button @click="clearClick">clear</n-button>
    {{ formValue }}
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { FormConfig, FormItemType } from '@/components/FormRender/form-types'
import FormRender from '@/components/FormRender/index.vue'
import { restRefsKey } from '../../../utils/index'

const formConfig: FormConfig = {
  size: 'small'
}
let formValue = reactive<Record<string, any>>({
  name: '321'
})

const formItems: FormItemType[] = [
  {
    label: 'FormItem',
    path: '',
    placeholder: '',
    value: 'name',
    itemType: 'input'
  }
]
const clearClick = () => {
  const refs = toRefs(formValue)
  restRefsKey(refs)
}
</script>

<style lang="scss" scoped></style>
