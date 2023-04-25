<template>
  <div id="app_content">
    <FormRender
      ref="formRender_ref"
      :form-items="formItems"
      :form-config="formConfig"
      :form-rules="formRules"
    />
    {{ unref(formRender_ref) }}
    <n-button @click="clearClick">clear</n-button>
    <n-button @click="setClick">set</n-button>
    <n-button @click="checkClick">check</n-button>
    <n-button @click="restValidate">restCheck</n-button>
    <n-button @click="resultAdd">根据接口返回添加数据</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref, unref, reactive } from 'vue'
import { FormConfig, FormItemType } from '@/components/FormRender/form-types'
import FormRender from '@/components/FormRender/index.vue'
import { FormItemRule } from 'naive-ui'
import { selectConfig, selectOption } from '../../../components/FormRender/form-types'

const formConfig: FormConfig = {
  size: 'small'
}

const formRender_ref = ref<any>(null)

const options: selectOption<string>[] = [
  {
    label: 'boy',
    value: 'male'
  },
  {
    label: 'girl',
    value: 'female'
  }
]

const formItems: FormItemType[] = reactive([
  {
    label: 'inputItem',
    path: 'name',
    placeholder: 'name input',
    value: 'name',
    disabled: (value, param) => {
      if(value[param] === '321') return true
      return false
    },
    itemType: 'input'
  },
  {
    label: 'selectItem',
    path: 'gender',
    placeholder: 'gender select',
    value: 'gender',
    itemType: 'select',
    selectConfig: {
      toggleFilter: true,
      options: []
    }
  },
  {
    label: 'selectItem',
    path: 'boxValue',
    placeholder: 'checkbox value',
    value: 'boxValue',
    itemType: 'checkboxGroup',
    checkboxList: [
      {
        value: 'beijing',
        label: '北京'
      },
      {
        value: 'shanghai',
        label: '上海'
      }
    ]
  }
])

const formRules = {
  name: {
    required: true,
    trigger: ['input'],
    validator(_rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('请输入名字')
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return new Error('不能输入中文')
      }
      return true
    }
  },
  boxValue: {
    type: 'array',
    required: true,
    message: '至少选择一个',
    trigger: ['blur'],
  }
}

const clearClick = () => {
  const formDom = unref(formRender_ref)
  formDom?.restForm()
}
const setClick = () => {
  const formDom = unref(formRender_ref)
  formDom?.setForm({ name: '321', gender: 'male' })
}
const checkClick = async (e: MouseEvent) => {
  const formDom = unref(formRender_ref)
  try {
    await formDom?.validateForm(e)
  } catch (error) {
    console.log('error')
  }
}
const restValidate = () => {
  const formDom = unref(formRender_ref)
  formDom?.restValidateForm()
}

const resultAdd = () => {
  const selectConfig: selectConfig = formItems.filter((i) => i.value === 'gender')[0].selectConfig!
  selectConfig.options = options
}
</script>

<style lang="scss" scoped></style>
