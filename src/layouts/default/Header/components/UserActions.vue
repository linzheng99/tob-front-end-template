<template>
  <div class="user_actions">
    <UserIdentity style="100%" />
  </div>
</template>

<script setup lang="ts">
import UserIdentity from './UserIdentity.vue'
</script>

<style lang="scss" scoped>
.user_actions {
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
