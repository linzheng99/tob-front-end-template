<template>
  <div>
    <n-form
      ref="formRef"
      :inline="formConfig.inline"
      :label-width="formConfig.labelWidth"
      :model="formValue"
      :rules="formRules"
      :size="formConfig.size"
      :label-placement="formConfig.labelPlacement"
    >
      <FormItem :form-items="formItems" :form-value="formValue" />
    </n-form>
    <span>
      form:
      {{ formValue }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormItemType, FormConfig } from './form-types';
import FormItem from './FormItem/index.vue'
import { FormRules } from 'naive-ui'

/**
 * @description form表单的配置
 * @param formValue - 数据来源
 * @param formItem - 元素结构
 * @param formConfig - form主题配置
 * @param formRules - 数据规则
 */
interface FormProps {
  formValue: Record<string, any>
  formItems: FormItemType[]
  formConfig: FormConfig
  formRules?: FormRules
}

withDefaults(defineProps<FormProps>(), {
  formValue: () => ref({}),
  formItems: () => [
    {
      label: 'FormItem',
      path: '',
      placeholder: '',
      value: 'name',
      itemType: 'input'
    }
  ],
  formConfig: () => 
    reactive({
      labelPlacement: 'left',
      size: 'medium',
      labelWidth: 80,
      inline: true
    })
})

</script>

<style scoped></style>
