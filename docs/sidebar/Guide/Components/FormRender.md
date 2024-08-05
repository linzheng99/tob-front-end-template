# Form component

## 组件背景
  1. 减少代码的重复和代码量
  2. `B端` 太多的表单交互了

## 封装逻辑
  1. 想要继承原本组件的所有 `props` 所以使用 `v-bind`
  2. 数据源创建在组件内部
  3. 通过 `v-for` 循环 props 中的 `schemas` 渲染内容
  4. 组件通过 插槽(slot) / component 动态渲染

     1. 插槽(slot) 和 component; 通过配置( slot 还是 component )去判断
     2. component 有一个专门的类型声明 `ComponentType` 说明可以渲染什么组件
  5. 尾部是一组常见的 `submit & reset` 按扭组

     1. 永远不知道产品在想要什么 (如: 他可能需要5个按扭)
     2. `submit` 和 `reset` 可以自定义文本和方法, 可以通过 `useForm` 返回的 `methods` 拿到 form 的封装方法
     3. 简单的方式使用封装的 submit 按扭, 触发回调拿到 form 的数据进行业务逻辑
     4. submit 封装了 `loading`

## 基础用法
::: details Normal
```html
<template>
  <div id="app_content">
    <FormRender @register="register" @submit="formSubmit">
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from '@/components/FormRender/index'
import { FormRender, useForm } from '@/components/FormRender/index'

const [register] = useForm({
  schemas: initSchemas(),
})
function initSchemas(): FormSchema[] {
  return [
    {
      field: 'name',
      component: 'NInput',
      label: '姓名',
      componentProps: {
        placeholder: '请输入姓名',
      },
      giProps: {
        span: 1,
      },
      rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
    },
    {
      field: 'age',
      component: 'NInput',
      label: '年龄',
      componentProps: {
        placeholder: '请输入姓名',
      },
    },
    {
      field: 'address',
      component: 'NInput',
      label: '地址',
      componentProps: {
        placeholder: '请输入姓名',
      },
      giProps: {
        span: 2,
      },
    },
    {
      field: 'makeSource',
      component: 'RadioGroupComp',
      label: '来源',
      componentProps: {
        options: [
          {
            label: '网上',
            value: 1,
          },
          {
            label: '门店',
            value: 2,
          },
        ],
      },
    },
  ]
}

function formSubmit(values: Recordable) {
  console.log(values)
}

</script>
```
:::

## 自定义 submit
::: details  submit methods
```html
<template>
  <div id="app_content">
    <FormRender @register="register"/>
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from '@/components/FormRender/index'
import { FormRender, useForm } from '@/components/FormRender/index'

const [register, methods] = useForm({
  schemas: initSchemas(),
  submitFunc: async () => await submitFunc(),
})
function initSchemas(): FormSchema[] {
  return [
    {
      field: 'name',
      component: 'NInput',
      label: '姓名',
      componentProps: {
        placeholder: '请输入姓名',
      },
      rules: [{ required: true, message: '请输入姓名', trigger: ['blur'] }],
    },
  ]
}
function simulateApiRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Request completed')
    }, 3000)
  })
}
async function submitFunc() {
  try {
    await methods.validate()

    await simulateApiRequest()
  }
  catch (error) {}
}
</script>

```
:::

## 插槽用法
::: details slot code
```html
<template>
  <div id="app_content">
    <FormRender @register="register">
      <template #statusSlot="{ model, field }">
        <div> 内容:{{ model }} {{ field }} </div>
      </template>
    </FormRender>
  </div>
</template>

<script setup lang="ts">
import type { FormSchema } from '@/components/FormRender/index'
import { FormRender, useForm } from '@/components/FormRender/index'

const [register] = useForm({
  schemas: initSchemas(),
})
function initSchemas(): FormSchema[] {
  return [
    {
      field: 'slot',
      label: '这里是插槽',
      slot: 'statusSlot',
      showLabel: true,
      giProps: {
        span: 2,
      },
    },
  ]
}
</script>
```

:::

## Props

### basicProps
| 名称                  | 说明                          | 默认值                        | 类型                                 |
| --------------------- | :---------------------------- | :---------------------------- | :----------------------------------- |
| gridProps             | grid 配置                     | `{ cols: 2,xGap: 20,yGap: 0}` | `GridProps`                          |
| giProps               | gi 配置                       | `{span:1}`                    | `GridItemProps`                      |
| labelWidth            | 标签宽度  固定宽度            | `100`                         | `number / string / 'auto'`           |
| schemas               | 表单配置规则                  | `[]`                          | `FormSchema[]`                       |
| inline                | 是否展示为行内表单            | `false`                       | `boolean`                            |
| size                  | 表单大小 & 底部btn大小        | `medium`                      | `'small' / 'medium' / 'large'`       |
| labelPlacement        | 标签位置                      | `left`                        | `'left' / 'top'`                     |
| requireMarkPlacement  | 内容的样式                    | `left`                        | `'left' / 'right' / 'right-hanging'` |
| isFull                | 组件是否width 100%            | `true`                        | `boolean`                            |
| showActionButtonGroup | 是否显示操作按钮（查询/重置） | `true`                        | `boolean`                            |
| showSubmitButton      | 是否显示确认按钮              | `true`                        | `boolean`                            |
| submitButtonText      | 确认按钮文字                  | `确认`                        | `string`                             |
| submitButtonOptions   | 确认按钮配置                  | `undefined`                   | `ButtonProps`                        |
| showResetButton       | 是否显示重置按钮              | `true`                        | `boolean`                            |
| resetButtonText       | 重置按钮文字                  | `重置`                        | `string`                             |
| submitButtonOptions   | 重置按钮配置                  | `undefined`                   | `ButtonProps`                        |

### FormProps

::: details useForm 的 接收参数(额外增加的属性 `resetFunc` & `submitFunc`)
```ts
/**
 * @description 表单配置
 * @param inline 行内表单
 * @param size 大小
 * @param schemas 渲染组件配置
 * @param gridProps grid 配置
 * @param giProps gi 配置
 * @param isFull 组件 width 是否100%
 * @param showActionButtonGroup 是否展示操作按钮
 * @param showSubmitButton 是否展示提交按钮
 * @param submitButtonOptions 提交按钮配置
 * @param submitButtonText 提交按钮文字
 * @param showResetButton 是否展示重置按钮
 * @param resetButtonOptions 重置按钮配置
 * @param resetButtonText 重置按钮文字
 * @param resetButtonOptions 重置按钮配置
 * @param resetFunc 重置函数
 * @param submitFunc 提交函数
 */
export interface FormProps {
  inline: boolean
  size: string
  schemas?: FormSchema[]
  gridProps?: GridProps
  giProps?: GridItemProps
  isFull?: boolean
  showActionButtonGroup?: boolean
  showSubmitButton?: boolean
  submitButtonOptions?: Partial<ButtonProps>
  submitButtonText?: string
  showResetButton?: boolean
  resetButtonOptions?: Partial<ButtonProps>
  resetButtonText?: string
  resetFunc?: () => Promise<void>
  submitFunc?: () => Promise<void>
}
```
:::

### FormSchema
```ts
/**
 * @description 表单内组件配置
 * @param field 唯一key
 * @param label 标签
 * @param component 组件名
 * @param componentProps 组件属性
 * @param defaultValue 默认值
 * @param isFull 组件样式 width 是否100%
 * @param slot 插槽名字
 * @param showLabel 标签是否隐藏
 * @param gridProps grid gi 的配置
 * @param rules 表单校验
 */
export interface FormSchema {
  field: string
  label: string
  component?: ComponentType
  componentProps?: object
  defaultValue?: any
  isFull?: boolean
  slot?: string
  showLabel?: boolean
  giProps?: GridItemProps
  rules?: object | object[]
}
```

## Methods

方法类型: `FormActionType`

| 名称              | 说明                  | 类型                                               |
| ----------------- | :-------------------- | :------------------------------------------------- |
| submit            | 提交                  | `() => Promise<any>`                               |
| validate          | 校验                  | `() => Promise<Recordable[][]>`                    |
| restoreValidation | 恢复到未校验状态      | `() => Promise<void>`                              |
| setProps          | 设置 form 的 props    | `(formProps: Partial<FormProps>) => Promise<void>` |
| getFormSchema     | 获取 form schema 的值 | `() => Promise<FormSchema[]>`                      |
| setFieldsValue    | 设置 form model 的值  | `(values: Recordable) => Promise<void>`            |
| getFieldsValue    | 获取 form model 的值  | `() => Recordable`                                 |
| resetFields       | 重置 form 表单数据    | `() => Promise<void>`                              |
| setLoading        | 设置内置按扭 loading  | `(status: boolean) => Promise<void>`               |

## Emit

组件的回调
| 名称     | 说明             | 返回数据说明                                                                                                  |
| -------- | :--------------- | :------------------------------------------------------------------------------------------------------------ |
| submit   | 提交后的回调     | `formModal: 表单填写的数据`                                                                                   |
| reset    | 重置后的回调     | `formModal: 将表单填写的数据清空返回`                                                                           |
| register | 组件加载时的回调 | `[register, methods]; register: (formInstance: FormActionType) => void; methods: FormActionType( 方法的类型 )` |
