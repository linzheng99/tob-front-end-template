<template>
  <n-modal
    v-model:show="modalState"
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
    :on-after-leave="closedCallback"
  >
    <template #header-extra>
      <slot name="header-extra" />
    </template>
    <slot name="content">
      内容
    </slot>
    <template #footer>
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
import { reactive, ref } from 'vue'
import { extend } from '@/utils'

type SizeType = 'small' | 'medium' | 'large' | 'huge'
interface Emit {
  (e: 'closed', value: boolean): void
  (e: 'cancel'): void
  (e: 'confirm'): void
}
interface Props {
  bodyStyle: object
  segmented: object
  size: SizeType
  title: any
}

const props = withDefaults(defineProps<Props>(), {
  bodyStyle: () => ({ width: '800px' }),
  segmented: () => ({}),
  size: 'huge',
  title: 'title',
})

const emit = defineEmits<Emit>()

extend(props.bodyStyle)

const modalState = ref(false)

const headerStyle = reactive({
  padding: '10px',
})
const contentStyle = reactive({
  padding: '10px',
})
const footerStyle = reactive({
  padding: '10px',
})

function toggleModal() {
  modalState.value = !modalState.value
}

function closedCallback() {
  emit('closed', modalState.value)
}

function cancelCallback() {
  toggleModal()
  emit('cancel')
}
function confirmCallback() {
  emit('confirm')
}

defineExpose({ toggleModal })
</script>

<style scoped lang="scss">
.default_btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
