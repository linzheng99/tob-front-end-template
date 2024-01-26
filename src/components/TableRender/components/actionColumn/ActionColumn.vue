<template>
  <template v-if="!isDropdown">
    <ActionButton
      :actions="getActions"
      :record="record"
      @handleClick="handleAction"
    />
  </template>
  <template v-else>
    <n-popover trigger="click" placement="bottom">
      <template #trigger>
        <n-button
          type="primary"
          :renderIcon="iconRender({ icon: 'ep:arrow-down-bold' })"
          icon-placement="right"
        >
          更多
        </n-button>
      </template>
      <ActionButton
        :actions="getActions"
        :record="record"
        @handleClick="handleAction"
      />
    </n-popover>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ActionButton from './ActionButton.vue'
import { useIconRender } from '@/hooks/component/useIconRender'
import { ActionColumnProps, Actions } from './types'
import { ActionValues } from '../../types'
import { isBoolean } from '@/utils/is'

interface Emit {
  (e: 'handle-click', item: ActionValues): void
}

const props = withDefaults(defineProps<ActionColumnProps>(), {
  showDropdown: true
})

const getActions = computed<Actions[] | []>(() => {
  const { actions, record } = props

  return actions(record).filter((action) => {
    const shouldInclude = isBoolean(action.show) ? action.show : !action.show

    return shouldInclude
  })
})

const emit = defineEmits<Emit>()
const { iconRender } = useIconRender()

const isDropdown = computed(() => {
  if (!props.actions) return false
  return props.showDropdown && props.actions?.length > 2
})

function handleAction(title: string) {
  emit('handle-click', { title, record: props.record })
}
</script>

<style scoped></style>
