<template>
  <n-radio-group v-bind="attrs" :value="value">
    <n-space>
      <n-radio
        v-for="item in getOptions"
        :key="`${item.value}`"
        :value="item.value"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </n-radio>
    </n-space>
  </n-radio-group>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent, unref, useAttrs } from 'vue'

interface OptionsItem { label: string, value: string | number | boolean, disabled?: boolean }

export default defineComponent({
  name: 'RadioGroupComp',
  props: {
    value: [String, Number, Boolean] as PropType<string | number | boolean>,
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
