<template>
  <n-modal
    transform-origin="center"
    v-model:show="modalState"
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
    <slot name="content"> 内容 </slot>
    <template #footer>
      <slot name="footer">
        <div class="default_btns">
          <n-button
            @click="cancelCallback"
            strong
            secondary
            type="tertiary"
            style="margin-right: 20px"
          >
            取消
          </n-button>
          <n-button @click="confirmCallback" type="primary">确认</n-button>
        </div>
      </slot>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { extend } from '@/utils'

type SizeType = 'small' | 'medium' | 'large' | 'huge'
interface Emit {
  (e: 'closed', value: boolean)
  (e: 'cancel')
  (e: 'confirm')
}
interface Props {
  bodyStyle: Object
  segmented: Object
  size: SizeType
  title: any
}

const props = withDefaults(defineProps<Props>(), {
  bodyStyle: () => ({}),
  segmented: () => ({}),
  size: 'huge',
  title: 'title'
})

extend(props.bodyStyle, { width: '800px' })

const emit = defineEmits<Emit>()

let modalState = ref(false)

const headerStyle = reactive({
  padding: '10px'
})
const contentStyle = reactive({
  padding: '10px'
})
const footerStyle = reactive({
  padding: '10px'
})

const toggleModal = () => {
  modalState.value = true
}

const closedCallback = () => {
  emit('closed', modalState.value)
}

const cancelCallback = () => {
  toggleModal()
  emit('cancel')
}
const confirmCallback = () => {
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
