<template>
  <div class="layout_tab-wrapper">
    <Tab
      v-for="item in tabs"
      :key="item.fullPath"
      :info="item"
      :active-tab="activeTab"
      :show-close="showClose"
      @go="go"
      @close="close"
    />
  </div>
</template>

<script lang="ts" setup>
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTabsStoreWithOut } from '@/store/modules/tabs'
import { useRouterPush } from '@/hooks/router/useRouterPush'
import Tab from './components/Tab.vue'

const route = useRoute()
const tabsStore = useTabsStoreWithOut()
const { routerPush } = useRouterPush()

const tabs = computed(() => tabsStore.getTabs)
const activeTab = computed(() => route.fullPath)
const showClose = computed(() => tabsStore.getTabs.length > 1)

const go = (fullPath: string) => {
  routerPush(fullPath)
}
const close = (tab) => {
  tabsStore.deleteTab(tab)
}

watch(
  () => route.fullPath,
  () => {
    tabsStore.setActiveTab(route.name)
    tabsStore.addTabs({ fullPath: route.fullPath, name: route.name })
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.layout_tab {
  &-wrapper {
    background-color: #181929;
    border-top: 1px solid #a1a3ae;
    border-bottom: 1px solid #a1a3ae;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
