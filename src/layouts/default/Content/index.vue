<template>
  <div class="layout_content">
    <RouterView>
      <template #default="{ Component, route }">
        <keep-alive :include="routeStore.cacheRoutes">
          <component :is="Component" :key="route.path" v-if="routeStore.reloadFlag" />
        </keep-alive>
      </template>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { useRouteStoreWithout } from '@/store/modules/route';

const routeStore = useRouteStoreWithout()

</script>

<style lang="scss" scoped>
.layout_content {
  padding: 10px;
  height: 100%;
  background-color: #18192b;
}
</style>
