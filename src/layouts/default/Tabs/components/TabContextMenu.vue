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
import { useRouteStoreWithout } from '@/store/modules/route'

interface Props {
  visible: boolean
  x: number
  y: number
  currentPath: string
}
interface Emits {
  (e: 'update:visible', visible: boolean): void
}
type ActionKey = 'reload-page' | 'close-page'

const routeStore = useRouteStoreWithout()

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

const actionMap = new Map<ActionKey, () => void>([
  ['reload-page', () => routeStore.reloadPage(props.currentPath)]
])

const hide = () => {
  showDropdown.value = false
}

const handleSelect = (key: ActionKey) => {
  hide()
  const action = actionMap.get(key)
  action && action()
}
</script>

<style scoped></style>
