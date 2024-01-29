<template>
  <template v-if="!isDropdown">
    <ActionButton
      :actions="getActions"
      :record="record"
      @handle-click="handleAction"
    />
  </template>
  <template v-else>
    <n-popover trigger="click" placement="bottom">
      <template #trigger>
        <n-button
          type="primary"
          :render-icon="iconRender({ icon: 'ep:arrow-down-bold' })"
          icon-placement="right"
        >
          更多
        </n-button>
      </template>
      <ActionButton
        :actions="getActions"
        :record="record"
        @handle-click="handleAction"
      />
    </n-popover>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ActionValues } from '../../types'
import ActionButton from './ActionButton.vue'
import type { ActionColumnProps, Actions } from './types'
import { useIconRender } from '@/hooks/component/useIconRender'
import { isBoolean } from '@/utils/is'

interface Emit {
  (e: 'handleClick', item: ActionValues): void
}

const props = withDefaults(defineProps<ActionColumnProps>(), {
  showDropdown: true,
})

const emit = defineEmits<Emit>()

const getActions = computed<Actions[] | []>(() => {
  const { actions, record, index } = props

  return actions(record, index).filter((action) => {
    const shouldInclude = isBoolean(action.show) ? action.show : !action.show

    return shouldInclude
  })
})

const { iconRender } = useIconRender()

const isDropdown = computed(() => {
  if (!props.actions)
    return false
  return props.showDropdown && props.actions?.length > 2
})

function handleAction(title: string) {
  emit('handleClick', { title, record: props.record })
}
</script>

<style scoped></style>
