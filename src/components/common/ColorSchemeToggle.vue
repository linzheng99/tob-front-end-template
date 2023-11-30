<template>
  <div
    @click="colorMode.toggleDark"
    class="cursor-pointer px-12px border-rd-4px flex-center hover:bg-active"
  >
    <SvgIcon
      :icon="colorMode.themeColorMode === 'light' ? 'ph-sun-dim-duotone' : 'ph:moon-duotone'"
      class="text-2xl"
    />
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useColorModeStore } from '@/store/modules/colorMode'

const colorMode = useColorModeStore()
</script>
