import { InternalRowData, TableBaseColumn } from "naive-ui/es/data-table/src/interface";
import { ComponentType } from "./componentType";

export interface TableBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  editable?: boolean;
  editComponent?: ComponentType;
  editComponentProps?: Recordable;
  editRequired?: boolean;
  children?: TableBasicColumn<T>[]
}
