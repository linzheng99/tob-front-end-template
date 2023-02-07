<template>
  <div class="tab-wrapper">
    <div
      class="tab-content"
      :class="{ 'tab-active': info.fullPath === activeTab }"
      @click="go(info.fullPath)"
    >
      <span>{{ info.name }}</span>
      <button v-if="showClose" class="close_btn" @click.stop="close(info)">
        <SvgIcon icon="ep:close-bold" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

interface Props {
  info: any
  activeTab: string
  showClose: boolean
}
interface Emit {
  (e: 'go', tab): void
  (e: 'close', tab): void
}
defineProps<Props>()
const emit = defineEmits<Emit>()

const go = (path) => {
  emit('go', path)
}
const close = (tab) => {
  emit('close', tab)
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
  }
  &-content {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px 12px;
    font-weight: bold;
    color: white;
    border: 1px solid #a1a3ae;
    border-radius: 4px;
    position: relative;
  }
  &-active {
    border: 1px solid #dcee62;
  }
}
.close_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border-radius: 3px;
  height: 18px;
  width: 18px;
  font-size: 14px;
  outline: none;
  border: none;
  position: relative;
  padding: 0;
  margin-left: 6px;
  &:hover {
    color: #dcee62;
  }
}
</style>
