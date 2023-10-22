<template>
  <n-grid :x-gap="formItemConfig.xGap" :y-gap="formItemConfig.yGap" :cols="formItemConfig.cols">
    <n-gi v-for="(item, index) in formItems" :key="index">
      <n-form-item
        :label="item.label"
        :path="item.path ? item.path : item.value"
        :require-mark-placement="formItemConfig.requireMarkPlacement"
      >
        <!-- input -->
        <n-input
          v-if="item.itemType === 'input'"
          v-model:value="formValue[item.value]"
          :disabled="item.disabled ? item.disabled(formValue, item.value) : false"
          :placeholder="item.placeholder"
        />
        <!-- select -->
        <n-select
          v-if="item.itemType === 'select'"
          v-model:value="formValue[item.value]"
          :disabled="item.disabled ? item.disabled(formValue, item.value) : false"
          :filterable="item.selectConfig?.toggleFilter"
          :placeholder="item.placeholder"
          :label-field="item.selectConfig?.labelField"
          :value-field="item.selectConfig?.valueField"
          :children-field="item.selectConfig?.childrenField"
          :options="item.selectConfig?.options"
        />
        <!-- checkbox-group -->
        <n-checkbox-group
          v-if="item.itemType === 'checkboxGroup'"
          v-model:value="formValue[item.value]"
        >
          <n-space item-style="display: flex;">
            <n-checkbox
              v-for="checkbox in item.checkboxList"
              :key="checkbox.value"
              :value="checkbox.value"
              :label="checkbox.label"
            />
          </n-space>
        </n-checkbox-group>
        <!-- cascader -->
        <n-cascader
          v-if="item.itemType === 'cascader'"
          :options="item.cascaderConfig?.options"
          v-model:value="formValue[item.value]"
          :label-field="item.cascaderConfig?.labelField"
          :value-field="item.cascaderConfig?.valueField"
          :children-field="item.cascaderConfig?.childrenField"
          check-strategy="all"
          filterable
          clearable
          clear-filter-after-select
        />
      </n-form-item>
    </n-gi>
  </n-grid>
</template>

<script lang="ts">
import { extend } from '@/utils'
import { FormItemType, FormItemConfig } from '../../types'
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
