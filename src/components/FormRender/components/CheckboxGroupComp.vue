<template>
  <n-checkbox-group v-bind="attrs" :value="value">
    <n-space>
      <n-checkbox
        v-for="item in getOptions"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </n-checkbox>
    </n-space>
  </n-checkbox-group>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, unref, useAttrs } from 'vue'

type OptionsItem = { label: string; value: string | number; disabled?: boolean }

export default defineComponent({
  name: 'ApiCheckboxGroup',
  props: {
    value: [String, Number, Boolean] as PropType<String | Number>,
    options: Array as PropType<{ label: string; value: string | number }[]>,
    labelField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    }
  },
  setup(props) {
    const attrs = useAttrs()

    const getOptions = computed(() => {
      const { options, valueField, labelField } = props
      return unref(options)?.reduce((prev, next: Recordable) => {
        if (next) {
          const value = next[valueField]
          prev.push({
            label: next[labelField],
            value: value,
            disabled: next.disabled || false
          })
        }
        return prev
      }, [] as OptionsItem[])
    })

    return { attrs, getOptions }
  }
})
</script>

<style scoped></style>
