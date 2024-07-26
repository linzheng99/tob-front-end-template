<template>
  <n-dropdown :options="options" @select="handleSelect">
    <div class="identity">
      <SvgIcon icon="mdi:user-circle-outline" style="font-size: 20px" />
      <span style="padding-left: 8px">{{ userStore.userInfo.username }}</span>
    </div>
  </n-dropdown>
</template>

<script setup lang="ts">
import { useUserStoreWithOut } from '@/store/modules/user'
import { useIconRender } from '@/hooks/component/useIconRender'
import SvgIcon from '@/components/SvgIcon/index.vue'

const userStore = useUserStoreWithOut()
const { iconRender } = useIconRender()
const options = [
  {
    label: '退出登录',
    key: 'logout',
    icon: iconRender({
      icon: 'humbleicons:logout',
    }),
  },
]
function handleSelect(key: string) {
  if (key === 'logout')
    logout()
}

function logout() {
  userStore.logout()
}
</script>

<style lang="scss" scoped>
.identity {
  @apply c-base;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  &:hover {
    @apply bg-active;
    cursor: pointer;
  }
}
</style>
