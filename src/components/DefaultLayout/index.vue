<template>
  <div class="default-wrapper">
    <header class="default-header" :style="headerStyle">
      <slot name="header"> header </slot>
    </header>
    <div class="default-tab" :style="tabStyle">
      <slot name="tab"> tab </slot>
    </div>
    <aside class="default-sider" :style="siderStyle">
      <slot name="sider"> sider </slot>
    </aside>
    <main class="default-content" :style="contentStyle">
      <slot />
    </main>
    <footer v-if="footerVisible" class="default-footer" :style="footerStyle">
      <slot name="footer"> footer </slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStoreWithOut } from '@/store/modules/theme'

interface Props {
  siderCollapes: boolean
  footerVisible?: boolean
}
const themeStore = useThemeStoreWithOut()

const siderDefaultWidth = themeStore.getSiderDefaultWidth + 'px'
const siderMinWidth = themeStore.getSiderMinWidth + 'px'
const siderWidth = computed(() => {
  return props.siderCollapes ? siderMinWidth : siderDefaultWidth
})
const headerHeight = themeStore.getHeaderHeight + 'px'
const tabHeight = themeStore.getTabHeight + 'px'

const props = withDefaults(defineProps<Props>(), {
  footerVisible: false,
})

const siderStyle = computed(() => {
  return {
    width: !props.siderCollapes ? siderDefaultWidth : siderMinWidth,
  }
})
const headerStyle = computed(() => {
  return {
    'padding-left': `${siderWidth.value}`,
    height: headerHeight,
  }
})
const tabStyle = computed(() => {
  return {
    'padding-left': `${siderWidth.value}`,
    top: headerHeight,
    height: tabHeight,
  }
})
const contentStyle = computed(() => {
  return {
    'padding-left': `${siderWidth.value}`,
    'padding-top': `${themeStore.getHeaderHeight + themeStore.getTabHeight}` + 'px',
  }
})
const footerStyle = computed(() => {
  return {
    'padding-left': `${siderWidth.value}`,
  }
})
</script>

<style lang="scss" scoped>
.default {
  &-wrapper {
    height: 100%;
    width: 100%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    color: black;
    overflow: hidden;
  }
  &-content {
    height: 100vh;
    // flex-grow: 1;
    box-sizing: border-box;
    width: 100%;
    transition: $theme-padding-left-transition;
  }
  &-sider {
    min-width: 64px;
    position: fixed;
    left: 0;
    top: 0;
    transition: width 0.3s ease-in-out;
    background-color: $theme-background-color;
  }
  &-header {
    width: 100%;
    position: fixed;
    transition: $theme-padding-left-transition;
  }
  &-tab {
    width: 100%;
    position: fixed;
    transition: $theme-padding-left-transition;
  }
  &-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    transition: $theme-padding-left-transition;
  }
}
</style>
