<template>
  <n-modal
    :show="show"
    transform-origin="center"
    class="custom-card"
    :mask-closable="false"
    :header-style="headerStyle"
    :footer-style="footerStyle"
    :content-style="contentStyle"
    preset="card"
    :style="bodyStyle"
    :title="title"
    :size="size"
    :segmented="segmented"
    :on-close="cancelCallback"
    :on-after-leave="closedCallback"
  >
    <template #header-extra>
      <slot name="header-extra" />
    </template>
    <slot name="default">
      内容
    </slot>
    <template v-if="footer" #footer>
      <slot name="footer">
        <div class="default_btns">
          <n-button
            strong
            secondary
            type="tertiary"
            style="margin-right: 20px"
            @click="cancelCallback"
          >
            取消
          </n-button>
          <n-button type="primary" @click="confirmCallback">
            确认
          </n-button>
        </div>
      </slot>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { extend } from '@/utils'

type SizeType = 'small' | 'medium' | 'large' | 'huge'
interface Emit {
  (e: 'closed'): void
  (e: 'cancel'): void
  (e: 'confirm'): void
}
interface Props {
  show: boolean
  bodyStyle: object
  segmented: object
  size: SizeType
  title: any
  footer: boolean
}

const props = withDefaults(defineProps<Props>(), {
  bodyStyle: () => ({ width: '800px' }),
  segmented: () => ({}),
  size: 'huge',
  title: 'title',
  footer: true,
})

const emit = defineEmits<Emit>()

extend(props.bodyStyle)

const headerStyle = reactive({
  padding: '10px',
})
const contentStyle = reactive({
  padding: '10px',
})
const footerStyle = reactive({
  padding: '10px',
})

function closedCallback() {
  emit('closed')
}

function cancelCallback() {
  emit('cancel')
}
function confirmCallback() {
  emit('confirm')
}
</script>

<style scoped lang="scss">
.default_btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
