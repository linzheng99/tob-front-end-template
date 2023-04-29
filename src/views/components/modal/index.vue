<template>
  <n-button @click="toggleAddModal"> toggle addModal </n-button>
  <n-button @click="toggleCheckModal"> toggle checkModal </n-button>
  <AddModal ref="addModal_ref" />
  <CheckModal ref="checkModal_ref" :data="checkData" />
</template>

<script setup lang="ts">
import { unref, ref, reactive } from 'vue';
import AddModal from './testModal/AddModal.vue'
import CheckModal from './testModal/CheckModal.vue'

const addModal_ref = ref(null)
const checkModal_ref = ref(null)

const checkData = reactive({
  name: 'linzheng',
  idCard: '330382xxxxxxxxxxxx',
  nation: '汉族',
  address: '浙江省xx市'
})

const toggleAddModal = (): void => {
  const domRef: any = unref(addModal_ref)
  domRef?.toggleModal()
}

const toggleCheckModal = (): void => {
  const domRef: any = unref(checkModal_ref)
  domRef?.toggleModal()
}

</script>

<style scoped></style>
