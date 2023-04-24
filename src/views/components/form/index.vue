<template>
  <div id="app_content">
    <FormRender :form-value="formValue" :form-items="formItems" />
    <n-button @click="clearClick">clear</n-button>
  </div>
</template>

<script setup lang="ts">
import FormRender from '@/components/FormRender/index.vue'
import { ref } from 'vue';

let formValue = ref<Record<string, unknown>>({
  name: '1'
})
const formItems = [
  {
    label: 'FormItem',
    path: '',
    placeholder: '',
    value: 'name',
    itemType: 'input'
  }
]
const clearClick = () => {
  // 获取 formValue 对象的所有属性名
  const keys = Object.keys(formValue.value);
  // 创建一个新对象，保留原始属性名和值
  const newFormValue = Object.fromEntries(keys.map(key => [key, '']));
  // 将 formValue.value 的值设置为新对象
  formValue.value = newFormValue;
};

</script>

<style lang="scss" scoped></style>
