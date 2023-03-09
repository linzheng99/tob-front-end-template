<template>
  <DefaultLayout :sider-collapes="siderCollapes">
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
import { useAppLocalConfig } from '@/hooks/setting/useAppLocalConfig'
import { computed } from 'vue'
const { getSiderCollapse } = useAppLocalConfig()
const siderCollapes = computed(() => getSiderCollapse.value)
</script>

<style scoped></style>
