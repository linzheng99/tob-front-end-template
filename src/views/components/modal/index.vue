<template>
  <n-button @click="toggleModal"> toggle </n-button>
  <ModalCard ref="ModalCard_ref" @closed="closed" :body-style="{height: '700px'}">
    <template #content>
      <FormRender ref="formRender_ref" :form-items="formItems" :form-item-config="formItemConfig" />
    </template>
    <template #footer>
      <n-button>取消</n-button>
      <n-button>确认</n-button>
    </template>
  </ModalCard>
</template>

<script setup lang="ts">
import { ref, unref, reactive } from 'vue'
import ModalCard from '@/components/ModalCardRender/index.vue'
import FormRender from '@/components/FormRender/index.vue'
import { FormItemType, FormItemConfig } from '../../../components/FormRender/form-types'

const ModalCard_ref = ref(null)
const toggleModal = (): void => {
  const domRef: any = unref(ModalCard_ref)
  domRef?.toggleModal()
}

const formItemConfig: FormItemConfig = {
  cols: 2
}

const formItems: FormItemType[] = reactive([
  {
    label: 'inputItem',
    path: 'name',
    placeholder: 'name input',
    value: 'name',
    itemType: 'input'
  },
  {
    label: 'selectItem',
    path: 'gender',
    placeholder: 'gender select',
    value: 'gender',
    itemType: 'select',
    selectConfig: {
      toggleFilter: true,
      options: [],
      labelField: 'wantLabel',
      valueField: 'wantValue'
    }
  },
  {
    label: 'checkbox',
    path: 'boxValue',
    value: 'boxValue',
    itemType: 'checkboxGroup',
    checkboxList: [
      {
        value: 'beijing',
        label: '北京'
      },
      {
        value: 'shanghai',
        label: '上海'
      }
    ]
  }
])

const closed = (toggle) => {
  console.log('closed', toggle);
  
}
</script>

<style scoped></style>
