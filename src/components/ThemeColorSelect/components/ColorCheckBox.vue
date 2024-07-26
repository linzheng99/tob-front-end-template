<template>
  <div class="color_check_box" :style="{ background: color }">
    <SvgIcon
      v-if="checked"
      icon="material-symbols:check-small"
      :color="isWhite ? 'black' : 'white'"
      :font-size="iconSize"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

interface Props {
  /** 颜色列表 */
  color: string
  /** 选中状态 */
  checked: boolean
  /** icon大小 */
  iconSize: string
}
const props = withDefaults(defineProps<Props>(), {
  iconSize: '20px',
})
const whiteColors = ['#ffffff', '#fff', 'rgb(255,255,255)']
const isWhite = computed(() => whiteColors.includes(props.color))
</script>

<style scoped lang="scss">
.color_check_box {
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
