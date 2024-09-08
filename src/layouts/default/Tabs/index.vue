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
      @contextmenu="handleContextMenu($event, item.name)"
    />
  </div>
  <TabContextMenu
    :visible="dropdownConfig.visible"
    :x="dropdownConfig.x"
    :y="dropdownConfig.y"
    :current-path="dropdownConfig.currentPath"
    @update:visible="updateVisible"
  />
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { extend } from '../../../utils/share'
import Tab from './components/Tab.vue'
import TabContextMenu from './components/TabContextMenu.vue'
import { useTabsStoreWithOut } from '@/store/modules/tabs'
import { useRouterPush } from '@/hooks/router/useRouterPush'
import { useRouteStoreWithout } from '@/store/modules/route'

interface DropdownConfig {
  visible: boolean
  x: number
  y: number
  currentPath: string
}

const route = useRoute()
const tabsStore = useTabsStoreWithOut()
const routeStore = useRouteStoreWithout()
const { routerPush } = useRouterPush()

const tabs = computed(() => tabsStore.getTabs)
const activeTab = computed(() => route.fullPath)
const showClose = computed(() => tabsStore.getTabs.length > 1)
const dropdownConfig: DropdownConfig = reactive({
  visible: false,
  x: 0,
  y: 0,
  currentPath: '',
})

function handleContextMenu(e: MouseEvent, currentPath: string) {
  e.preventDefault()
  updateVisible(false)
  dropdownConfig.currentPath = currentPath
  nextTick().then(() => {
    extend(dropdownConfig, {
      visible: true,
      x: e.clientX,
      y: e.clientY,
    })
  })
}

function updateVisible(visible: boolean) {
  extend(dropdownConfig, { visible })
}

function go(fullPath: string) {
  routerPush(fullPath)
}
function close(tab) {
  tabsStore.deleteTab(tab)
  routeStore.removeCacheRoute(tab.name)
}

watch(
  () => route.fullPath,
  () => {
    tabsStore.setActiveTab(route.meta.title)
    tabsStore.addTabs({
      fullPath: route.fullPath,
      title: route.meta.title,
      name: route.name as string,
    })
    routeStore.addCacheRoute(route.name as string)
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.layout_tab {
  &-wrapper {
    @apply border-base bg-base border-y-1px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    overflow-x: auto;
  }
}
</style>
