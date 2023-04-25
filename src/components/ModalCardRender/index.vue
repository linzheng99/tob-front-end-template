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

<script lang="ts">
import { defineComponent, ref, PropType, reactive, defineEmits } from 'vue'

type SizeType = 'small' | 'medium' | 'large' | 'huge'

export default defineComponent({
  name: 'modalRender',
  props: {
    bodyStyle: {
      type: Object,
      default: () => ({
        width: '600px'
      })
    },
    segmented: {
      type: Object,
      default: () => ({
        content: true,
        footer: true
      })
    },
    size: {
      type: String as PropType<SizeType>,
      default: 'huge'
    },
    title: {
      type: String,
      default: '模态框title'
    }
  },
  emits: ['closed'],
  setup(props, { emit }) {
    const { bodyStyle, segmented } = props

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

    const closedCallback = () => emit('closed', modalState.value)

    return {
      bodyStyle,
      headerStyle,
      contentStyle,
      footerStyle,
      segmented,
      modalState,
      toggleModal,
      closedCallback
    }
  }
})
</script>

<style scoped></style>
