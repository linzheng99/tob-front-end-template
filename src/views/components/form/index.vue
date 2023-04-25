<template>
  <div id="app_content">
    <FormRender ref="form" :form-items="formItems" :form-config="formConfig" />
    <n-button @click="clearClick">clear</n-button>
    <n-button @click="setClick">set</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { FormConfig, FormItemType } from '@/components/FormRender/form-types'
import FormRender from '@/components/FormRender/index.vue'

const formConfig: FormConfig = {
  size: 'small'
}

const form = ref<any>(null)

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
  const formDom = unref(form)
  formDom?.restForm()
}
const setClick = () => {
  const formDom = unref(form)
  formDom?.setForm({ name: '321' })
}
</script>

<style lang="scss" scoped></style>
