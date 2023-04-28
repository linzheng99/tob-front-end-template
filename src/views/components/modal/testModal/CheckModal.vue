<template>
  <ModalCard ref="ModalCard_ref">
    <template #content>
      <DescriptionsRender :describe-list="descripeList" :data="data" :column="2" />
    </template>
    <template #footer>
      <n-button @click="toggleModal">取消</n-button>
    </template>
  </ModalCard>
</template>

<script setup lang="ts">
import ModalCard from '@/components/ModalCardRender/index.vue'
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import { reactive, ref, unref } from 'vue'

interface Props {
  data: Object
}

defineProps<Props>()

const ModalCard_ref = ref(null)

const descripeList = reactive([
  {
    label: '名字',
    param: 'name'
  },
  {
    label: '身份证',
    param: 'idCard'
  },
  {
    label: '民族',
    param: 'nation'
  },
  {
    label: '地址',
    param: 'address'
  }
])

const toggleModal = () => {
  const domRef: any = unref(ModalCard_ref)
  domRef?.toggleModal()
}

defineExpose({ toggleModal })
</script>

<style scoped></style>
