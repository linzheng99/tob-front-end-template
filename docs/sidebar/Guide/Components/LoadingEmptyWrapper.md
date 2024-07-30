# LoadingEmptyWrapper

## 组件背景
  1. 减少代码的重复;
  2. 在业务开发中总是遇到数据暂时没有数据,或是请求时间过于漫长,联调过程中无感;
  3. 增加产品与用户的交互;

## 封装逻辑
  1. 组件内部设置一个插槽, 提供有数据时应该展示的内容;
  2. 请求内容时的loading;
  3. 无数据的一个空值提示;

## 基础用法
::: details Normal
```html
<template>
  <div id="app_content">
    <LoadingEmptyWrapper :loading="loading" :empty="empty" :empty-title="emptyTitle">
      <span class="c-red"> 这里是 LoadingEmptyWrapper 组件 </span>
    </LoadingEmptyWrapper>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import LoadingEmptyWrapper from '@/components/LoadingEmptyWrapper/index.vue'

const data = ref([])
const emptyTitle = ref('暂无数据哦~')
const loading = ref(true)
const empty = computed(() => data.value.length <= 0)

function setLoading() {
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

onMounted(() => {
  setLoading()
})
</script>

```
:::

## Props

| 名称       | 说明                 | 默认值   | 类型      |
| ---------- | :------------------- | :------- | :-------- |
| loading    | 加载的状态           | false    | `boolean` |
| empty      | 是否是空数据         | false    | `boolean` |
| emptyTitle | 空数据时展示的 title | 暂无数据 | `string`  |
