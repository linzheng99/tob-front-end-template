<template>
  <ModalCardRender
    ref="modalRef"
  >
    <FormRender />
  </ModalCardRender>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormRender from '@/components/FormRender/index.vue'
import ModalCardRender from '@/components/ModalCardRender/index.vue'

const modalRef = ref<InstanceType<typeof ModalCardRender>>()
</script>

<style lang="scss" scoped>

</style>
