<template>
  <ModalCard ref="ModalCard_ref" :title="title" :body-style="bodyStyle">
    <template #content>
      <DescriptionsRender :describe-list="descripeList" :data="data" :column="2" />
    </template>
    <template #footer>
      <n-button @click="cancelBtnFn">取消</n-button>
    </template>
  </ModalCard>
</template>

<script setup lang="ts">
import ModalCard from '@/components/ModalCardRender/index.vue'
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import { reactive, ref, unref, computed } from 'vue';

interface Props {
  data: Object
  title: String
  type?: String
}

const props = defineProps<Props>()

const setBodyStyle = () => {
  if(props.type === 'add') {
    return {
      width: '400px',
      height: '500px'
    }
  }
}

const bodyStyle = computed(() => {
  return setBodyStyle()
})


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

const cancelBtnFn = () => {
  const domRef: any = unref(ModalCard_ref)
  domRef?.toggleModal()
}

defineExpose({ cancelBtnFn })
</script>

<style scoped>
</style>
