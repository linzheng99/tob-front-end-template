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
import type { PropType } from 'vue'
import { computed, defineComponent, unref, useAttrs } from 'vue'

interface OptionsItem { label: string, value: string | number, disabled?: boolean }

export default defineComponent({
  name: 'ApiCheckboxGroup',
  props: {
    value: [] as PropType<string | number | (string | number)[]>,
    options: Array as PropType<OptionsItem[]>,
    labelField: {
      type: String,
      default: 'label',
    },
    valueField: {
      type: String,
      default: 'value',
    },
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
            value,
            disabled: next.disabled || false,
          })
        }
        return prev
      }, [] as OptionsItem[])
    })

    return { attrs, getOptions }
  },
})
</script>

<style scoped></style>
