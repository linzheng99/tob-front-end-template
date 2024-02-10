---
outline: deep
---

# Table component

基于[Naive UI Table组件](https://www.naiveui.com/zh-CN/dark/components/menu)进行二次封装

## 组件背景
1. 为了减少在业务代码中的重复,更快速(符合自己开发逻辑)的搭建表格;
2. 方便统一管理;

## 拓展功能
1. 普通的展示
2. 对编辑行的处理
::: tip 可以进行编辑的组件

NInput, NInputNumber, NSelect, NCheckbox, Switch, DatePicker, TimePicker, Cascader

:::

---

::: warning 表格唯一值的问题
`naive ui 官网的建议: 传入 data 属性的数组的每一项都代表渲染的一行数据，每一行数据都要有唯一的 key，否则需要在 table 上声明 row-key 属性。`

如果你有在进行自己创建多条编辑状态的行, 并且具有删除功能的时候 `一定要设置一个唯一值 _key 或者其它字段`

:::

## 基础用法
::: details Normal
```html
<template>
  <TableRender
    :data="data"
    :columns="columns"
    :action-column="actionColumn"
    :flex-height="false"
    @handle-action="handleAction"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
  TableBasicRecordRow,
} from '@/components/TableRender/types/column'
import TableRender from '@/components/TableRender/index.vue'

// 数据源
const data = ref(
  Array.from({ length: 21 }).map((_, index) => ({
    name: `name - ${index}`,
    age: 18,
    address: `address - ${index}`,
  })),
)
// 列
const columns = reactive<TableBasicColumn[]>([
  {
    title: '序号',
    align: 'center',
    key: 'index',
    width: 60,
    fixed: 'left',
    render: (_, index) => `${index + 1}`,
  },
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '年龄',
    key: 'name',
    align: 'center',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '地址',
    key: 'address',
    align: 'center',
    width: 250,
    ellipsis: { tooltip: true },
  },
])
// 操作列
const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})
// 使用函数去创建操作列的按扭(个人觉得使用函数可以接收这个列的数据,可以做更多的事情)
function actionBtns(record: TableBasicRecordRow): Actions[] {
  const isShow = record.editable
  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
      },
    },
    {
      show: !!isShow,
      iconConfig: { icon: 'ep-search' },
      title: '取消',
      componentProps: {
        type: 'primary',
      },
    },
  ]
}
// 点击操作列中按扭的回调
function handleAction(item: ActionValues) {
  console.log(item)
}
</script>

```
:::

## 简单的编辑表格
::: details Simple Editable
```html
<template>
  <div class="h-full flex">
    <TableRender
      ref="tableRef"
      :data="data"
      :columns="columns"
      :request-api="requestDataSource"
      :action-column="actionColumn"
      @request-success="requestSuccess"
      @handle-action="handleAction"
      @edit-submit="editSubmit"
      @edit-change="editChange"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import TableRender from '@/components/TableRender/index.vue'
import type { ResponseApi, TableActionType } from '@/components/TableRender/types'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
  TableBasicRecordRow,
} from '@/components/TableRender/types/column'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'

interface Data {
  name: string
  age: number
  address: string
}

onMounted(() => {
  fetchApi()
})

const tableRef = ref<TableActionType>()
const data = ref<Data[]>([])

const columns = reactive<TableBasicColumn[]>([
  {
    title: '序号',
    align: 'center',
    key: 'index',
    width: 60,
    fixed: 'left',
    render: (_, index) => `${index + 1}`,
  },
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    width: 250,
    editable: true,
  },
  {
    title: '年龄',
    key: 'age',
    align: 'center',
    width: 250,
    editable: true,
  },
  {
    title: '地址',
    key: 'address',
    align: 'center',
    width: 250,
    editable: true,
  },
])

const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})

// 操作列按扭渲染
function actionBtns(record: TableBasicRecordRow): Actions[] {
  const isShow = record.editable

  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
      },
    },
    {
      show: !!isShow,
      iconConfig: { icon: 'ep-search' },
      title: '取消',
      componentProps: {
        type: 'primary',
      },
    },
  ]
}

// 在保存 edit 时触发
function editSubmit(values: { index: number, record: Recordable }) {
  console.log(values)
}

// 在改变 column 中数据触发
function editChange(values) {
  const { record, key } = values
  console.log(record, key)
}

// 点击操作列按扭触发
async function handleAction(item: ActionValues) {
  const { record, title } = item
  switch (title) {
    case '编辑':
      await record.onEdit?.(true)
      break
    case '保存':
      await record.onSubmitEdit?.()
      break
    case '取消':
      record.onCancelEdit?.()
      break

    default:
      break
  }
}

// fetch
async function fetchApi() {
  await tableRef.value?.reloadData()
}

// 请求成功
function requestSuccess(responseData: Data[]) {
  data.value = responseData
}

// api
function requestDataSource() {
  return new Promise<ResponseApi>((resolve) => {
    // 模拟一个异步操作
    setTimeout(() => {
      const apiResponse = Array.from({ length: 46 }).map((_, index) => ({
        name: `name - ${index}`,
        age: 18,
        address: `address - ${index}`,
      }))
      resolve({
        content: { data: apiResponse, total: apiResponse.length },
        code: 200,
        msg: 'success',
      })
    }, 1000) // 模拟异步操作的延迟
  })
}
</script>
```
:::

## 可编辑的表格
::: details Editable
```html
<template>
  321
</template>
```
:::

## 自定义 api 返回数据格式
`hook - useDataSource`

`requestData` 函数, 可自定义修改与后端规定好的数据结构

`ResponseApi` 类型也是自定义的一个分页请求类型

## Props

### `TableBasicProps`

| 名称           | 说明                                              | 默认值 / 类型              |
| -------------- | :------------------------------------------------ | :------------------------- |
| data           | 数据源                                            | `Recordable[]`             |
| columns        | 列                                                | `any[]`                    |
| actionColumn   | 操作列                                            | `TableBasicActionColumn[]` |
| remote         | 是否异步获取数据                                  | `false / boolean`          |
| striped        | 斑马线条纹                                        | `true / boolean`           |
| singleLine     | 是否不设定行的分割线                              | `false / boolean`          |
| bottomBordered | 是否显示 bottom border                            | `true / boolean`           |
| flexHeight     | 让表格自适应高度(如果要给死高度现将其设置为false) | `true / boolean`           |
| showPagination | 是否展示分页数据                                  | `true / boolean`           |
| requestApi     | 请求数据的api                                     | `自定义的 Promise request` |

### `TableBasicColumn`

| 名称          | 说明                                           | 默认值 / 类型                                                             |
| ------------- | :--------------------------------------------- | :------------------------------------------------------------------------ |
| key           | 是否开启编辑                                   | `boolean`                                                                 |
| editable      | 是否开启编辑                                   | `boolean`                                                                 |
| editComponent | 组件名称                                       | `ComponentType`                                                           |
| labelKey      | (只在editable状态下启用)展示字段的key与key不同 | `string / (record: TableBasicRecordRow, value: any) => string`            |
| editRule      | 是否开启校验                                   | `boolean / (value: any, record: TableBasicRecordRow) => Promise<boolean>` |
| editCompClass | 编辑元素的样式                                 | `string`                                                                  |
| children      | 成组列头的子节点                               | `TableBasicColumn<T>[]`                                                   |

::: tip key & labelKey
labelKey 只会在 editable 为 true 的时候被使用

::: details explain for labelKey
`key` 是唯一值,也传给后端的值; `labelkey` 是展示的值,如果有labelKey,它就会使用labelKey去展示在页面;

如 Select 组件, 有 `value` 和 `label`, 我们使用key去匹配value, 也是将value的值传给后端, 但是我们展示的是label; 所以我们在 `normal(非编辑)` 模式下, 显示的其实是label的值, 这时候就要使用到labelKey

:::

::: details type code
```ts
export interface TableBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  editable?: boolean
  editRule?: ((value: any, record: TableBasicRecordRow) => Promise<boolean>) | boolean
  editComponent?: ComponentType
  labelKey?: string | ((record: TableBasicRecordRow, value: any) => string)
  editComponentProps?: Recordable
  children?: TableBasicColumn<T>[]
  editRenders?: {
    key: string
    render: (data: { value: any, editValues: Recordable }) => VNodeChild
  }[]
  editCompClass?: string
}
```
:::

### `TableBasicRecordRow`

| 名称          | 说明                           | 默认值 / 类型                                  |
| ------------- | :----------------------------- | :--------------------------------------------- |
| onEdit        | 开启关闭编辑                   | `(editable: boolean) => Promise<void>`         |
| onCancelEdit  | 取消编辑                       | `() => void`                                   |
| onSubmitEdit  | 保存编辑                       | `() => Promise<TableBasicRecordRow / boolean>` |
| editable      | 可编辑的状态                   | `boolean`                                      |
| _key          | 唯一值( 但是一般以id为唯一值 ) | `number`                                       |
| submitCbs     | 收集一行中全部处于`编辑的保存回调`   | `Fn[]`                                         |
| cancelCbs     | 收集一行中全部处于`编辑的删除回调`   | `Fn[]`                                         |
| validCbs      | 收集一行中全部处于`编辑的校验回调`   | `Fn[]`                                         |
| editValueRefs | 收集一行中全部处于`编辑状态的值`     | `Recordable<Ref>`                              |

::: details type code
```ts
export type TableBasicRecordRow<T = Recordable> = Partial<
  {
    onEdit?: (editable: boolean) => Promise<void>
    onCancelEdit?: () => void
    onSubmitEdit?: () => Promise<TableBasicRecordRow | boolean>
    editable?: boolean
    _key?: number
    submitCbs: Fn[]
    cancelCbs: Fn[]
    validCbs: Fn[]
    editValueRefs: Recordable<Ref>
  } & T
>
```
:::

## Methods

### Emit
| 名称            | 说明                 | 默认值 / 类型                                                                                |
| --------------- | :------------------- | :------------------------------------------------------------------------------------------- |
| request-success | 数据请求成功         | `(value:any) => void`                                                                        |
| request-error   | 数据请求失败         | `void`                                                                                       |
| handle-action   | 操作按扭点击回调     | `(value: ActionValues) => void`                                                              |
| edit-submit     | 是否异步获取数据     | `(values: { record: TableBasicRecordRow, index: number }) => void`                           |
| edit-cancel     | 斑马线条纹           | `(values: { record: TableBasicRecordRow, index: number }) => void`                           |
| edit-change     | 是否不设定行的分割线 | `(values: { record: TableBasicRecordRow, index: number, value: any, key: string } ) => void` |

### Expose Ref

| 名称          | 说明                         | 默认值 / 类型                                |
| ------------- | :--------------------------- | :------------------------------------------- |
| setPagination | 设置分页信息                 | `(values: Partial<PaginationProps>) => void` |
| reloadData    | 重新请求数据(配合requestApi) | `(params?: any) => Promise<void>`            |
| setLoading    | 设置table loading 状态       | `(value: boolean) => void`                   |
