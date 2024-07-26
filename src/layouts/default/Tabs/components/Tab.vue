<template>
  <div class="tab-wrapper c-base">
    <div
      class="tab-content gap-1"
      :style="tabStyle(info.fullPath, activeTab)"
      @click="go(info.fullPath)"
    >
      <span>{{ info.title }}</span>
      <SvgIcon v-if="showClose" icon="ep:close-bold" @click.stop="close(info)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tab } from '../TabsType'
import { useThemeStoreWithOut } from '@/store/modules/theme'
import SvgIcon from '@/components/SvgIcon/index.vue'

interface Props {
  info: Tab
  activeTab: string
  showClose: boolean
}
interface Emit {
  (e: 'go', tab: string): void
  (e: 'close', tab: Tab): void
}

defineProps<Props>()
const emit = defineEmits<Emit>()
const themeStore = useThemeStoreWithOut()

function go(path: string) {
  emit('go', path)
}
function close(tab: Tab) {
  emit('close', tab)
}
function tabStyle(path, activePath) {
  if (path === activePath) {
    return {
      border: `1px solid ${themeStore.themeColor}`,
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  &-wrapper {
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
    overflow-y: hidden;
  }
  &-content {
    display: flex;
    align-items: center;
    padding: 6px 12px;
    font-weight: bold;
    border: 1px solid #a1a3ae;
    @apply border-base bg-base border-1px;
    border-radius: 4px;
    position: relative;
  }
  &-active {
    border: 1px solid #dcee62;
  }
}
</style>
