<template>
  <div class="user_actions">
    <ConfigButton />
    <UserIdentity />
  </div>
</template>

<script setup lang="ts">
import UserIdentity from './UserIdentity.vue'
import ConfigButton from './ConfigButton.vue'
</script>

<style lang="scss" scoped>
.user_actions {
  height: 100%;
  float: right;
  display: flex;
}
</style>
