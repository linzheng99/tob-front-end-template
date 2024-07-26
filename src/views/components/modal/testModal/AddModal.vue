<template>
  <ModalCard ref="ModalCard_ref" :title="title" @closed="closed">
    <template #content>
      <FormRender ref="formRender_ref" :form-items="formItems" :form-item-config="formItemConfig" />
    </template>
  </ModalCard>
</template>

<script setup lang="ts">
import { reactive, ref, unref } from 'vue'
import ModalCard from '@/components/ModalCardRender/index.vue'
import FormRender from '@/components/FormRender/index.vue'
import type { FormItemConfig, FormItemType } from '@/components/FormRender/types'

defineProps<Props>()
const ModalCard_ref = ref(null)
function toggleModal(): void {
  const domRef: any = unref(ModalCard_ref)
  domRef?.toggleModal()
}

interface Props {
  title: any
}
const formItemConfig: FormItemConfig = {
  cols: 2,
}

const formItems: FormItemType[] = reactive([
  {
    label: '组织名称',
    path: 'name',
    placeholder: 'name input',
    value: 'name',
    itemType: 'input',
  },
  {
    label: '所属上级组织',
    path: 'gender',
    placeholder: 'gender select',
    value: 'gender',
    itemType: 'select',
    selectConfig: {
      toggleFilter: true,
      options: [],
      labelField: 'wantLabel',
      valueField: 'wantValue',
    },
  },
  {
    label: '组织级别',
    path: 'gender',
    placeholder: 'gender select',
    value: 'gender',
    itemType: 'select',
    selectConfig: {
      toggleFilter: true,
      options: [],
      labelField: 'wantLabel',
      valueField: 'wantValue',
    },
  },
  {
    label: '业务线',
    path: 'boxValue',
    value: 'boxValue',
    itemType: 'checkboxGroup',
    checkboxList: [
      {
        value: 'beijing',
        label: '终端定位服务',
      },
      {
        value: 'shanghai',
        label: '卡定位服务',
      },
    ],
  },
  {
    label: '联系人姓名',
    placeholder: 'name input',
    value: 'name',
    itemType: 'input',
  },
  {
    label: '联系人号码',
    placeholder: 'name input',
    value: 'name',
    itemType: 'input',
  },
  {
    label: '行政区域',
    path: 'gender',
    placeholder: 'gender select',
    value: 'gender',
    itemType: 'select',
    selectConfig: {
      toggleFilter: true,
      options: [],
      labelField: 'wantLabel',
      valueField: 'wantValue',
    },
  },
  {
    label: '联系地址',
    placeholder: 'name input',
    value: 'name',
    itemType: 'input',
  },
])

function closed(toggle) {
  console.log('closed', toggle)
}

defineExpose({ toggleModal })
</script>

<style scoped></style>
