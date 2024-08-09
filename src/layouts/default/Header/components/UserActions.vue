<template>
  <div class="user_actions">
    <LinksDropDown />
    <ConfigButton />
    <ColorSchemeToggle />
    <UserIdentity />
  </div>
</template>

<script setup lang="ts">
import UserIdentity from './UserIdentity.vue'
import ConfigButton from '@/components/common/ConfigButton.vue'
import ColorSchemeToggle from '@/components/common/ColorSchemeToggle.vue'
import LinksDropDown from '@/components/common/LinksDropDown.vue'
</script>

<style lang="scss" scoped>
.user_actions {
  height: 100%;
  float: right;
  display: flex;
}
</style>
