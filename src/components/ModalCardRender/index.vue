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
      <slot name="footer"> 底部 </slot>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

type SizeType = 'small' | 'medium' | 'large' | 'huge'
interface Emit {
  (e: 'closed', value: boolean)
}
interface Props {
  bodyStyle: Object
  segmented: Object
  size: SizeType
  title: any
}

const props = withDefaults(defineProps<Props>(), {
  bodyStyle: () => ({}),
  segmented: () => {
    return { content: true, footer: true }
  },
  size: 'huge',
  title: 'title'
})

Object.assign(props.bodyStyle, { width: '1000px' })

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

defineExpose({ toggleModal })
</script>

<style scoped></style>
