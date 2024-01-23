import { InternalRowData, TableBaseColumn } from "naive-ui/es/data-table/src/interface";
import { ComponentType } from "./componentType";
import { ActionColumnProps } from "../components/actionColumn/types";

export interface TableBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  editable?: boolean;
  editComponent?: ComponentType;
  editComponentProps?: Recordable;
  editRequired?: boolean;
  children?: TableBasicColumn<T>[]
}

export type TableBasicActionColumn = TableBaseColumn & Partial<ActionColumnProps>

export type EmitType = ReturnType<typeof defineEmits>

export interface ActionValues {
  title: String
  record: Recordable
}
