<template>
  <div id="app_content">
    表格
    <button @click="click">message</button>
    <n-button type="primary"> primary </n-button>
    <n-button type="primary" ghost> Primary </n-button>
  </div>
</template>

<script setup lang="ts">
import { useCreateMessage } from '@/hooks/web/useMessage'
const { createMessage } = useCreateMessage()
const click = () => {
  // createMessage('success', 'success Icon', { icon: iconRender({ icon: 'material-symbols:10k' }) })
  createMessage({
    type: 'error',
    text: 'error',
  })
}
</script>

<style lang="scss" scoped></style>
