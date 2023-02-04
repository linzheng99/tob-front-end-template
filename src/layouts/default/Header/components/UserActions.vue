<template>
  <n-config-provider :theme-overrides="themeOverrides" style="height: 100%">
    <div class="user_actions">
      <UserIdentity style="100%" />
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import UserIdentity from './UserIdentity.vue'
import { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  Dropdown: {
    color: 'rgb(100, 94, 147)',
    optionColorHover: 'rgb(121, 116, 164)',
    optionTextColor: 'white',
    optionTextColorHover: 'white',
  },
}
</script>

<style lang="scss" scoped>
.user_actions {
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
