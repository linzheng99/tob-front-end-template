<template>
  <n-divider> 系统主题 </n-divider>
  <n-grid :x-gap="8" :y-gap="12" :cols="8">
    <n-grid-item
      v-for="(color, index) in themeStore.themeColorList"
      :key="index"
      class="color_check_box_wrapper"
    >
      <ColorCheckBox
        :color="color"
        :checked="color === themeStore.themeColor"
        @click="themeStore.setThemeColor(color)"
      />
    </n-grid-item>
  </n-grid>
  <n-space :vertical="true" class="color_picker">
    <n-color-picker
      :value="themeStore.themeColor"
      :show-alpha="false"
      @update-value="themeStore.setThemeColor"
    />
  </n-space>
</template>

<script setup lang="ts">
import { useThemeStoreWithOut } from '@/store/modules/theme'
import { ColorCheckBox } from './components'

const themeStore = useThemeStoreWithOut()
</script>

<style scoped lang="scss">
.color_check_box_wrapper {
  display: flex;
  justify-content: center;
}
.color_picker {
  padding-top: 12px;
}
</style>
