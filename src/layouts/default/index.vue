<template>
  <DefaultLayout :sider-collapes="appStore.getSiderCollapse">
    <template #sider>
      <Sidebar />
    </template>
    <template #header>
      <Header />
    </template>
    <template #tab>
      <Tabs />
    </template>
    <Content />
  </DefaultLayout>
</template>

<script setup lang="ts">
import Content from './Content/index.vue'
import Header from './Header/index.vue'
import Tabs from './Tabs/index.vue'
import Sidebar from './Sidebar/index.vue'
import DefaultLayout from '@/components/DefaultLayout/index.vue'
import { useAppStoreWithOut } from '@/store/modules/app'
const appStore = useAppStoreWithOut()
</script>

<style scoped></style>
