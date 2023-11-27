<template>
  <RouterView>
    <template #default="{ Component, route }">
      <keep-alive :include="routeStore.cacheRoutes">
        <component :is="Component" :key="route.path" v-if="routeStore.reloadFlag" />
      </keep-alive>
    </template>
  </RouterView>
</template>

<script setup lang="ts">
import { useRouteStoreWithout } from '@/store/modules/route'

const routeStore = useRouteStoreWithout()
</script>

<style lang="scss" scoped></style>
