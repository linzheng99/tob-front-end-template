---
outline: deep
---

# Table component

基于[Naive UI Table组件](https://www.naiveui.com/zh-CN/dark/components/data-table)进行二次封装

## 组件背景
1. 为了减少在业务代码中的重复,更快速(符合自己开发逻辑)的搭建表格;
2. 方便统一管理;

## 拓展功能
1. 普通的展示
2. 对编辑行的处理
::: tip 可以进行编辑的组件

编辑状态开启时,默认组件是NInput

NInput, NInputNumber, NSelect, NCheckbox, Switch, DatePicker, TimePicker, Cascader

:::

---

::: warning 表格唯一值的问题
`naive ui 官网的建议: 传入 data 属性的数组的每一项都代表渲染的一行数据，每一行数据都要有唯一的 key，否则需要在 table 上声明 row-key 属性。`

如果你有在进行自己创建多条编辑状态的行, 并且具有删除功能的时候 `一定要设置一个唯一值 _key 或者其它字段`

:::

::: warning 渲染之后需要改变column中的属性

如select组件的options, 需要找到对应的索引或者使用自定义函数找到它进行修改它的options

目前使用 创建一个ref 去给options赋值, 在后续通过 改变ref的值 改变options 并不起作用

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
} from '@/components/TableRender/types/column'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'

interface Data {
  name: string
  age: number
  address: string
  sex: number
  sexStr: string
  date: string[]
}

onMounted(() => {
  fetchApi()
})

const tableRef = ref<TableActionType>()
const isDisable = ref(false)
const data = ref<Data[]>([])
const options = ref([
  {
    label: '男',
    value: 1,
  },
  {
    label: '女',
    value: 2,
  },
])

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
    title: '日期范围',
    key: 'date',
    align: 'center',
    width: 250,
    editable: true,
    labelKey: (record) => {
      return `${record.date.join('-')}`
    },
    editComponent: 'NDatePicker',
    editComponentProps: {
      type: 'daterange',
      valueFormat: 'yyyy-MM-dd',
    },
  },
  {
    title: '姓名',
    key: 'name',
    align: 'center',
    width: 250,
    editable: true,
  },
  {
    title: '性别',
    key: 'sex',
    labelKey: 'sexStr',
    align: 'center',
    width: 250,
    editable: true,
    editRule: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: options.value,
    },
    editRenders: [
      {
        key: '',
        render({ editValues }) {
          return editValues.sex === 1 ? '男' : ''
        },
      },
    ],
  },
  {
    title: '年龄',
    key: 'age',
    align: 'center',
    width: 250,
    editable: true,
    editComponent: 'NInput',
    editRule: async (value, _record) => {
      if (+value > 18)
        throw new Error('请输入小于18的值')
      return true
    },
  },
  {
    title: '地址',
    key: 'address',
    align: 'center',
    width: 250,
    editable: true,
  },
])

function editSubmit(values) {
  const { record, index } = values
  data.value[index].sexStr = record.sex === 1 ? '男' : '女'
}
// 请求成功
function requestSuccess(responseData: Data[]) {
  data.value = responseData
}
function editChange(values) {
  const { record, key } = values
  console.log(record, key)
}

// TODO 把 click 放到props里面
const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})
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

async function fetchApi() {
  try {
    await tableRef.value?.reloadData()
  }
  catch (error) {
    console.log(error)
  }
}

function actionBtns(record): Actions[] {
  const isShow = record.editable
  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
        disabled: isDisable.value,
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

// api
function requestDataSource() {
  return new Promise<ResponseApi>((resolve) => {
    // 模拟一个异步操作
    setTimeout(() => {
      const apiResponse = Array.from({ length: 9 }).map((_, index) => ({
        name: `name - ${index}`,
        sex: index % 2 ? 1 : 2,
        sexStr: index % 2 ? '男' : '女',
        age: 18,
        address: `address - ${index}`,
        date: ['2024-02-09', '2024-02-10'],
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

<style scoped></style>

```
:::

## 自定义 api 返回数据格式
`hook - useDataSource`

`requestData` 函数, 可自定义修改与后端规定好的数据结构

`ResponseApi` 类型也是自定义的一个分页请求类型

## Props

### `TableBasicProps`

| 名称           | 说明                                              | 默认值 / 类型                   |
| -------------- | :------------------------------------------------ | :------------------------------ |
| data           | 数据源                                            | `Recordable[]`                  |
| columns        | 列                                                | `any[]`                         |
| actionColumn   | 操作列                                            | `TableBasicActionColumn[]`      |
| remote         | 是否异步获取数据                                  | `false / boolean`               |
| striped        | 斑马线条纹                                        | `true / boolean`                |
| singleLine     | 是否不设定行的分割线                              | `false / boolean`               |
| bottomBordered | 是否显示 bottom border                            | `true / boolean`                |
| flexHeight     | 让表格自适应高度(如果要给死高度现将其设置为false) | `true / boolean`                |
| showPagination | 是否展示分页数据                                  | `true / boolean`                |
| requestApi     | 请求数据的api                                     | `自定义的 Promise request`      |
| requestParams  | 请求数据时想要带的参数                            | `() => Recordable / Recordable` |

### `TableBasicColumn`

| 名称          | 说明                                           | 默认值 / 类型                                                                  |
| ------------- | :--------------------------------------------- | :----------------------------------------------------------------------------- |
| key           | 是否开启编辑                                   | `boolean`                                                                      |
| editable      | 是否开启编辑                                   | `boolean`                                                                      |
| editComponent | 组件名称(主要)                                 | `ComponentType`                                                                |
| labelKey      | (只在editable状态下启用)展示字段的key与key不同 | `string / (record: TableBasicRecordRow, value: any) => string`                 |
| editRule      | 是否开启校验                                   | `boolean / (value: any, record: TableBasicRecordRow) => Promise<boolean>`      |
| editCompClass | 编辑元素的样式                                 | `string`                                                                       |
| editRenders   | 编辑组件(次要)                                 | `{key: string;render: ({value: any, editValues: Recordable}) => VNodeChild}[]` |
| children      | 成组列头的子节点                               | `TableBasicColumn<T>[]`                                                        |

::: warning 关于一些看似没必要有好像有必要的属性

`editRenders`
正常来说这个属性应该用不到,这种类型的交互,一般不应用于编辑表格,过于复杂;

但是由于业务非要,它就诞生了;

它的左右就是在1个单元格中渲染多个编辑组件, 这些组件在editRenders里面可以被控制(如是否展示等...);

`editCompClass`
一般也用不到,是怕多个次要编辑组件还被要求一些特定的样式;

`如果用到建议battle产品,设计的是什么东西!有没有过脑!`

:::

::: tip key & labelKey
labelKey 只会在 editable 为 true 的时候被使用

::: details explain for labelKey
`key` 是唯一值,也传给后端的值; `labelkey` 是展示的值,如果有labelKey,它就会使用labelKey去展示在页面;

如 Select 组件, 有 `value` 和 `label`, 我们使用key去匹配value, 也是将value的值传给后端, 但是我们展示的是label; 所以我们在 `normal(非编辑)` 模式下, 显示的其实是label的值, 这时候就要使用到labelKey

:::

::: tip editRule

接收布尔值 / 函数

接收`布尔值true`的话会根据规则(createPlaceholder.ts), 提示文字

接收函数的话可以使用 throw Error 抛出一个异常提示 (throw Error('你填错咯'))

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

| 名称          | 说明                               | 默认值 / 类型                                  |
| ------------- | :--------------------------------- | :--------------------------------------------- |
| onEdit        | 开启关闭编辑                       | `(editable: boolean) => Promise<void>`         |
| onCancelEdit  | 取消编辑                           | `() => void`                                   |
| onSubmitEdit  | 保存编辑                           | `() => Promise<TableBasicRecordRow / boolean>` |
| editable      | 可编辑的状态                       | `boolean`                                      |
| _key          | 唯一值( 但是一般以id为唯一值 )     | `number`                                       |
| submitCbs     | 收集一行中全部处于`编辑的保存回调` | `Fn[]`                                         |
| cancelCbs     | 收集一行中全部处于`编辑的删除回调` | `Fn[]`                                         |
| validCbs      | 收集一行中全部处于`编辑的校验回调` | `Fn[]`                                         |
| editValueRefs | 收集一行中全部处于`编辑状态的值`   | `Recordable<Ref>`                              |

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

### ActionColumnProps

| 名称         | 说明               | 默认值 / 类型                                               |
| ------------ | :----------------- | :---------------------------------------------------------- |
| actions      | 按扭的属性         | `(record: TableBasicRecordRow, index: number) => Actions[]` |
| index        | 当前点击的数据索引 | `number`                                                    |
| record       | 当前点击的数据     | `TableBasicRecordRow`                                       |
| showDropdown | 下拉菜单的形式     | `boolean`                                                   |

::: details type code
```ts
export interface Actions {
  title: string
  componentProps?: ButtonProps
  iconConfig?: IconConfig
  show?: boolean
}

export interface ActionColumnProps {
  actions: (record: TableBasicRecordRow, index: number) => Actions[]
  index: number
  record: TableBasicRecordRow
  showDropdown?: boolean
}
```
:::

#### Actions

| 名称           | 说明         | 默认值 / 类型                    |
| -------------- | :----------- | :------------------------------- |
| title          | button的名称 | `string`                         |
| componentProps | button的属性 | `ButtonProps(naive-ui 官方属性)` |
| iconConfig     | 图标         | `IconConfig`                     |
| show           | 是否展示     | `boolean`                        |

::: details type code
```ts
export interface Actions {
  title: string
  componentProps?: ButtonProps
  iconConfig?: IconConfig
  show?: boolean
}
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
| edit-change     | 是否不设定行的分割线 | `(values: { record: TableBasicRecordRow, index: number, value: any, key: string } ) => void` | **** |

### Expose Ref

| 名称          | 说明                         | 默认值 / 类型                                |
| ------------- | :--------------------------- | :------------------------------------------- |
| setPagination | 设置分页信息                 | `(values: Partial<PaginationProps>) => void` |
| reloadData    | 重新请求数据(配合requestApi) | `(params?: any) => Promise<void>`            |
| setLoading    | 设置table loading 状态       | `(value: boolean) => void`                   |
