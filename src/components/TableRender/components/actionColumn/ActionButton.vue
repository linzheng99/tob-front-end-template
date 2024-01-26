<template>
  <div class="space-x-2">
    <n-button
      v-for="(item, index) in actions"
      :key="`${index}-${item.title}`"
      v-bind="item.componentProps"
      :render-icon="iconRender(item.iconConfig || {})"
      @click="handleAction(item.title)"
    >
      {{ item.title }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { useIconRender } from '@/hooks/component/useIconRender'
import { Actions } from './types'

interface Props {
  actions: Actions[] | null
  record: Recordable
}
interface Emit {
  (e: 'handle-click', title: string): void
}
defineProps<Props>()
const emit = defineEmits<Emit>()
const { iconRender } = useIconRender()

function handleAction(title: string) {
  emit('handle-click', title)
}
</script>

<style scoped></style>
