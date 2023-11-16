<template>
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="x"
    :y="y"
    :options="options"
    :show="showDropdown"
    :on-clickoutside="hide"
    @select="handleSelect"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  visible: boolean
  x: number
  y: number
  currentPath?: string
}
interface Emits {
  (e: 'update:visible', visible: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const emits = defineEmits<Emits>()

const showDropdown = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emits('update:visible', visible)
  }
})
const options = [
  {
    label: '重新加载',
    key: 'reload-page'
  }
]

const hide = () => {
  showDropdown.value = false
}

const handleSelect = () => {
  hide()
}
</script>

<style scoped></style>
