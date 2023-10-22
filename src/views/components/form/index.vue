<template>
  <div id="app_content">
    <FormRender @register="register">
      <template #statusSlot>
        <div> 占位符 </div>
      </template>
    </FormRender>
  </div>
</template>

<script setup lang="ts">
import { FormRender, useForm, FormSchema } from '@/components/FormRender/index'
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
        onInput: (e: any) => {
          console.log(e)
        }
      },
      giProps: {
        span: 1
      },
      rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }]
    },
    {
      field: '',
      label: '',
      //插槽
      slot: 'statusSlot',
      showLabel: false,
      giProps: {
        span: 2
      }
    },
    {
      field: 'age',
      component: 'NInput',
      label: '年龄',
      componentProps: {
        placeholder: '请输入姓名',
        onInput: (e: any) => {
          console.log(e)
        }
      }
    },
    {
      field: 'address',
      component: 'NInput',
      label: '地址',
      componentProps: {
        placeholder: '请输入姓名',
        onInput: (e: any) => {
          console.log(e)
        }
      }
    },
    {
      field: 'makeSource',
      component: 'NRadioGroup',
      label: '来源',
      componentProps: {
        options: [
          {
            label: '网上',
            value: 1
          },
          {
            label: '门店',
            value: 2
          }
        ],
        onUpdateChecked: (e: any) => {
          console.log(e)
        }
      }
    }
  ]
}
</script>

<style lang="scss" scoped></style>
