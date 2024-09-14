<template>
  <n-button @click="toggleAddModal">
    toggle addModal
  </n-button>
  <n-button @click="toggleCheckModal">
    toggle checkModal
  </n-button>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'

const addModal_ref = ref(null)
const checkModal_ref = ref(null)
const title = ref('')
const checkType = ref('')

function toggleAddModal(): void {
  const domRef: any = unref(addModal_ref)
  title.value = '这是一个新增/编辑弹窗'
  domRef?.toggleModal()
}

function toggleCheckModal(): void {
  const domRef: any = unref(checkModal_ref)
  title.value = '这是一个查看弹窗'
  checkType.value = 'add'
  domRef?.cancelBtnFn()
}
</script>

<style scoped></style>
