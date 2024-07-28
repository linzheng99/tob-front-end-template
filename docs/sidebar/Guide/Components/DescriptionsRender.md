# DescriptionsRender

基于[Naive UI descriptions组件](https://www.naiveui.com/zh-CN/dark/components/descriptions)进行二次封装

## 组件背景
1. 为了减少在业务代码中的重复,更快速(符合自己开发逻辑 / 业务)的开发展示详情信息数据;
2. 根据产品统一 `B端` 的详情展示形式
3. 方便统一管理;

## 封装逻辑
简单的对重复操作进行简化,使用`v-for`循环出对应的想展示的元素

## 基础用法
::: details Normal
```html
<template>
  <DescriptionsRender :describe-list="descripeList" :data="data" :column="3" />
</template>

<script setup lang="ts">
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import type { ListType } from '@/components/DescriptionsRender/types'

const data = {
  name: 'john',
  age: '18',
  height: '180cm',
}
const descripeList: ListType[] = [
  {
    label: '名字',
    param: 'name',
  },
  {
    label: '年龄',
    param: 'age',
  },
  {
    label: '身高',
    param: 'height',
  },
]
</script>
```
:::

## 展示特定的值
::: details use h form vue
```html
<template>
  <DescriptionsRender :describe-list="descripeList" :data="data" :column="3" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import DescriptionsRender from '@/components/DescriptionsRender/index.vue'
import type { ListType } from '@/components/DescriptionsRender/types'

const data = {
  name: 'john',
  height: '180cm',
}
const descripeList: ListType[] = [
  {
    label: '名字',
    param: 'name',
    render(data, param) {
      return data[param]
    },
  },
  {
    label: '身高',
    param: 'height',
    render(data, param) {
      return h('div', { style: { color: 'yellow' } }, { default: () => data[param] })
    },
  },
]
</script>
```
:::
