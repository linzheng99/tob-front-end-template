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
const userStore = useUserStoreWithOut()
const { iconRender } = useIconRender()
const options = [
  {
    label: '退出登录',
    key: 'logout',
    icon: iconRender({
      icon: 'humbleicons:logout',
      color: 'white',
    }),
  },
]
const handleSelect = (key: string) => {
  if (key === 'logout') {
    logout()
  }
}

const logout = () => {
  userStore.logout()
}
</script>

<style lang="scss" scoped>
.identity {
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: #333333;
    cursor: pointer;
  }
}
</style>
