<template>
  <n-button @click="toggleAddModal"> toggle addModal </n-button>
  <n-button @click="toggleCheckModal"> toggle checkModal </n-button>
  <AddModal ref="addModal_ref" :title="title" />
  <CheckModal ref="checkModal_ref" :data="checkData" :title="title" :type="checkType" />
  <UploadRender />
</template>

<script setup lang="ts">
import { unref, ref, reactive } from 'vue'
import AddModal from './testModal/AddModal.vue'
import CheckModal from './testModal/CheckModal.vue'
import UploadRender from '@/components/UploadRender/index.vue'

const addModal_ref = ref(null)
const checkModal_ref = ref(null)
const title = ref('')
const checkType = ref('')

const checkData = reactive({
  name: 'linzheng',
  idCard: '330382xxxxxxxxxxxx',
  nation: '汉族',
  address: '浙江省xx市'
})

const toggleAddModal = (): void => {
  const domRef: any = unref(addModal_ref)
  title.value = '这是一个新增/编辑弹窗'
  domRef?.toggleModal()
}

const toggleCheckModal = (): void => {
  const domRef: any = unref(checkModal_ref)
  title.value = '这是一个查看弹窗'
  checkType.value = 'add'
  domRef?.cancelBtnFn()
}
</script>

<style scoped></style>
