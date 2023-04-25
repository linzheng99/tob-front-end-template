<template>
  <div id="app_content">
    <FormRender
      ref="formRender_ref"
      :form-items="formItems"
      :form-config="formConfig"
      :form-rules="formRules"
    />
    <n-button @click="clearClick">clear</n-button>
    <n-button @click="setClick">set</n-button>
    <n-button @click="checkClick">check</n-button>
    <n-button @click="restValidate">restCheck</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { FormConfig, FormItemType } from '@/components/FormRender/form-types'
import FormRender from '@/components/FormRender/index.vue'

const formConfig: FormConfig = {
  size: 'small'
}

const formRender_ref = ref<any>(null)

const formItems: FormItemType[] = [
  {
    label: 'FormItem',
    path: 'name',
    placeholder: '',
    value: 'name',
    itemType: 'input'
  }
]

const formRules = {
  name: {
    required: true,
    message: '请输入名字',
    trigger: ['input']
  }
}

const clearClick = () => {
  const formDom = unref(formRender_ref)
  formDom?.restForm()
}
const setClick = () => {
  const formDom = unref(formRender_ref)
  formDom?.setForm({ name: '321' })
}
const checkClick = async (e:MouseEvent) => {
  const formDom = unref(formRender_ref)
  const value = formDom?.validateForm(e)
  console.log(value);
  
}
const restValidate = () => {
  const formDom = unref(formRender_ref)
  formDom?.restValidateForm()
}
</script>

<style lang="scss" scoped></style>
