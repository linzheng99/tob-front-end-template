<template>
  <div class="default-wrapper">
    <div class="default-sider" :style="siderStyle">
      <slot name="sider"> sider </slot>
    </div>
    <div class="default-content" :style="contentStyle">
      <div class="default-header">
        <slot name="header"> header </slot>
      </div>
      <div class="default-tab">
        <slot name="tab"> tab </slot>
      </div>
      <slot />
      <div v-if="footerVisible" class="default-footer">
        <slot name="footer"> footer </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  siderWidth?: string
  siderCollapsedWidth?: string
  siderCollapes: boolean
  footerVisible?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  siderWidth: '220px',
  siderCollapsedWidth: '64px',
  footerVisible: false,
})
// interface Emits {
//   (e: 'update:sider-collapse', collapse: boolean): void
// }
// const emit = defineEmits<Emits>()

const siderStyle = computed(() => {
  return {
    width: !props.siderCollapes ? props.siderWidth : props.siderCollapsedWidth,
    background: '#18192a',
  }
})
const contentStyle = {
  width: `calc(100% - ${props.siderWidth})`,
}
</script>

<style lang="scss" scoped>
.default {
  &-wrapper {
    height: 100vh;
    width: 100%;
    font-size: 12px;
    display: flex;
    color: black;
    overflow: hidden;
  }
  &-content {
    height: 100vh;
    position: relative;
  }
  &-sider {
    min-width: 64px;
    border-right: 1px solid #eee;
    position: relative;
    transition: width 0.3s ease-in-out;
  }
  &-header {
    width: 100%;
  }
  &-tab {
    width: 100%;
  }
  &-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
