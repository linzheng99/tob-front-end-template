<template>
  <n-grid :x-gap="formItemConfig.xGap" :y-gap="formItemConfig.yGap" :cols="formItemConfig.cols">
    <n-gi v-for="(item, index) in formItems" :key="index">
      <n-form-item
        :label="item.label"
        :path="item.path ? item.path : item.value"
        :require-mark-placement="formItemConfig.requireMarkPlacement"
      >
        <n-input
          v-if="item.itemType === 'input'"
          v-model:value="formValue[item.value]"
          :placeholder="item.placeholder"
        />
      </n-form-item>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
import { extend } from '@/utils'
import { FormItemType, FormItemConfig } from '../form-types'
import { defineComponent, PropType } from 'vue'

const defaultFormItemConfig = {
  xGap: '12',
  yGap: '0',
  cols: 4,
  requireMarkPlacement: 'left'
}

export default defineComponent({
  name: 'FormItem',
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
    formItemConfig: {
      type: Object as PropType<FormItemConfig>,
      default: () => defaultFormItemConfig
    }
  },
  setup(props) {
    const { formItems, formValue, formItemConfig } = props
    const mergeFormItemConfig = extend({}, defaultFormItemConfig, formItemConfig)

    return { formItems, formValue, formItemConfig: mergeFormItemConfig }
  }
})
</script>

<style scoped></style>
