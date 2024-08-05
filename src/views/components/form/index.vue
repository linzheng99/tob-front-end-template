<template>
  <div id="app_content">
    <FormRender @register="register" @submit="formSubmit">
      <template #statusSlot="{ model, field }">
        <div> 内容:{{ model }} {{ field }} </div>
      </template>
    </FormRender>
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from '@/components/FormRender/index'
import { FormRender, useForm } from '@/components/FormRender/index'

const [register] = useForm({
  schemas: initSchemas(),
})
function initSchemas(): FormSchema[] {
  return [
    {
      field: 'name',
      component: 'NInput',
      label: '姓名',
      componentProps: {
        placeholder: '请输入姓名',
      },
      rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
    },
    {
      field: 'age',
      component: 'NInput',
      label: '年龄',
      componentProps: {
        placeholder: '请输入姓名',
      },
    },
    {
      field: 'address',
      component: 'NInput',
      label: '地址',
      componentProps: {
        placeholder: '请输入姓名',
      },
      giProps: {
        span: 2,
      },
    },
    {
      field: 'slot',
      label: '这里是插槽',
      // 插槽
      slot: 'statusSlot',
      showLabel: true,
      giProps: {
        span: 2,
      },
    },
    {
      field: 'makeSource',
      component: 'RadioGroupComp',
      label: '来源',
      componentProps: {
        options: [
          {
            label: '网上',
            value: 1,
          },
          {
            label: '门店',
            value: 2,
          },
        ],
      },
    },
  ]
}
function formSubmit(_values: Recordable) {}
</script>

<style lang="scss" scoped></style>
