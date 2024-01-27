import { InternalRowData, TableBaseColumn } from "naive-ui/es/data-table/src/interface";
import { ComponentType } from "./componentType";
import { ActionColumnProps } from "../components/actionColumn/types";
import { Ref, VNodeChild } from "vue";

export interface TableBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  editable?: boolean;
  editRule?: ((value: any, record: Recordable) => Promise<boolean>) | boolean
  editComponent?: ComponentType
  textKey?: string
  editComponentProps?: Recordable
  children?: TableBasicColumn<T>[]
  editRenders?: {
    key: string,
    render: (data: { value: any; editValues: Recordable }) => VNodeChild;
  }[]
  editCompClass?: string
}

export type TableBasicActionColumn = TableBaseColumn & Partial<ActionColumnProps>

export type EmitType = ReturnType<typeof defineEmits>

export interface ActionValues {
  title: String
  record: TableBasicRecordRow
}

export type TableBasicRecordRow<T = Recordable> = Partial<
  {
    onEdit?: (editable: boolean) => Promise<void>;
    onCancelEdit?: () => void;
    onSubmitEdit?: () => Promise<TableBasicRecordRow | boolean>;
    editable?: boolean;
    _key?: number;
    submitCbs: Fn[];
    cancelCbs: Fn[];
    validCbs: Fn[];
    editValueRefs: Recordable<Ref>;
  } & T
>
