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

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FormItemType, FormConfig } from './form-types'
import FormItem from './FormItem/index.vue'
import { FormRules } from 'naive-ui'

const defaultFormConfig = {
  labelPlacement: 'left',
  size: 'medium',
  labelWidth: 80,
  inline: true
}

export default defineComponent({
  name: 'FormRender',
  /**
   * @description form表单的配置
   * @param formValue - 数据来源
   * @param formItem - 元素结构
   * @param formConfig - form主题配置
   * @param formRules - 数据规则
   */
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
    },
    formConfig: {
      type: Object as PropType<FormConfig>,
      default: () => ({})
    },
    formRules: {
      type: Object as PropType<FormRules>,
      default: () => ({})
    }
  },
  setup(props) {
    const { formConfig, formItems, formRules, formValue } = props
    const mergeFormConfig = Object.assign({}, defaultFormConfig, formConfig)

    return {
      formValue,
      formConfig: mergeFormConfig,
      formItems,
      formRules
    }
  }
})
</script>

<style scoped></style>
