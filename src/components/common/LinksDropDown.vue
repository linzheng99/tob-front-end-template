<template>
  <n-dropdown trigger="hover" :options="options">
    <div class="docs_button c-base cursor-pointer">
      <SvgIcon icon="f7:link-circle" />
    </div>
  </n-dropdown>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

const options = [
  {
    label: '文档地址',
    key: 'docs',
    props: {
      onClick: () => {
        window.open('https://linzheng99.github.io/tob-docs-site/')
      },
    },
  },
]
</script>

<style lang="scss" scoped>
.docs_button {
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  &:hover {
    @apply bg-active
    cursor: pointer;
  }
}
</style>
