import { InternalRowData, TableBaseColumn} from 'naive-ui/es/data-table/src/interface';
import { ComponentType } from './componentType';

export interface EditBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  //编辑表格
  editable?: boolean;
  editComponent?: ComponentType;
  editComponentProps?: Recordable;
  children?: EditBasicColumn<T>[]
}
