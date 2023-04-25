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
      <FormItem
        :form-items="formItems"
        :form-value="formValue"
        :form-item-config="formItemConfig"
      />
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, reactive, ref } from 'vue'
import { FormItemType, FormConfig, FormItemConfig } from './form-types'
import FormItem from './FormItem/index.vue'
import { FormRules, useMessage, FormInst } from 'naive-ui'
import { extend, restRefsKey } from '@/utils'

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
   * @param formRules - 数据校验
   */
  props: {
    // formValue: {
    //   type: Object as PropType<Record<string, any>>,
    //   default: () => ({})
    // },
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
    },
    formItemConfig: {
      type: Object as PropType<FormItemConfig>,
      default: () => ({})
    }
  },
  setup(props) {
    const { formConfig, formItems, formRules } = props
    const mergeFormConfig = Object.assign({}, defaultFormConfig, formConfig)

    const message = useMessage()
    const formRef = ref<FormInst | null>(null)
    let formValue = reactive<Record<string, any>>({})

    const setFormKeys = () => {
      formItems.map((i) => (formValue[i.value] = ''))
    }

    setFormKeys()

    const restForm = () => {
      const refs = toRefs(formValue)
      restRefsKey(refs)
    }
    const setForm = (data) => {
      extend(formValue, data)
    }
    const validateForm = async (e: MouseEvent) => {
      e.preventDefault()
      let pass = false
      await formRef.value?.validate((errors) => {
        if (!errors) {
          pass = true
          message.success('Valid')
        } else {
          console.log(errors)
          message.error('Invalid')
        }
      })
      return pass
    }
    const restValidateForm = () => {
      formRef.value?.restoreValidation()
    }

    return {
      formValue,
      formConfig: mergeFormConfig,
      formItems,
      formRules,
      formRef,
      restForm,
      setForm,
      validateForm,
      restValidateForm
    }
  }
})
</script>

<style scoped></style>
