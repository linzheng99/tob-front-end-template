import type { InternalRowData, TableBaseColumn } from 'naive-ui/es/data-table/src/interface'
import type { Ref, VNodeChild } from 'vue'
import type { ActionColumnProps } from '../components/actionColumn/types'
import type { ComponentType } from './componentType'

export interface TableBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  editable?: boolean
  editRule?: ((value: any, record: TableBasicRecordRow) => Promise<boolean>) | boolean
  editComponent?: ComponentType
  labelKey?: string | ((record: TableBasicRecordRow, value: any) => VNodeChild)
  editComponentProps?: Recordable
  children?: TableBasicColumn<T>[]
  editRenders?: {
    key: string
    render: (data: { value: any, editValues: Recordable }) => VNodeChild
  }[]
  editCompClass?: string
}

export type TableBasicActionColumn = TableBaseColumn & Partial<ActionColumnProps>

export type EmitType = ReturnType<typeof defineEmits>

export interface ActionValues {
  title: string
  record: TableBasicRecordRow
  index: number
}

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
