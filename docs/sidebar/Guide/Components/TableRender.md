---
outline: deep
---

# Table component

基于[Naive UI Table组件](https://www.naiveui.com/zh-CN/dark/components/menu)进行二次封装

## 组件背景
1. 为了减少在业务代码中的重复,更快速(符合自己开发逻辑)的搭建表格;
2. 方便统一管理;
3. 工作需要(多个页面需要表格的编辑);

## 对此的封装,拓展了什么功能(实现)
目前我将组件分成2种
1. 普通的展示
2. 对编辑行的处理

## Props

### TableBasicProps

| 名称           | 说明                   | 默认值 / 类型            |
| -------------- | :--------------------- | :----------------------- |
| data           | 数据源                 | `Recordable[]`             |
| columns        | 列                     | `any[]`                    |
| actionColumn   | 操作列                 | `TableBasicActionColumn[]` |
| remote         | 是否异步获取数据       | `false / boolean`          |
| striped        | 斑马线条纹             | `true / boolean`           |
| singleLine     | 是否不设定行的分割线   | `false / boolean`          |
| bottomBordered | 是否显示 bottom border | `true / boolean`           |
| flexHeight     | 让表格自适应高度       | `true / boolean`           |
| showPagination | 是否展示分页数据       | `true / boolean`           |
| requestApi     | 请求数据的api          | `自定义的 Promise request` |

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

## 常规状态下
