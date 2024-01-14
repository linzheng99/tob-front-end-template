import { Ref } from 'vue';
import { InternalRowData, TableBaseColumn } from 'naive-ui/es/data-table/src/interface';
import { ComponentType } from './componentType';

type EmitType = ReturnType<typeof defineEmits>;

export interface EditBasicColumn<T = InternalRowData> extends TableBaseColumn<T> {
  //编辑表格
  editable?: boolean;
  editComponent?: ComponentType;
  editComponentProps?: Recordable;
  editRequired?: boolean;
  children?: EditBasicColumn<T>[]
}

export type EditRecordRow<T = Recordable> = Partial<
  {
    onEdit?: (editable: boolean) => Promise<boolean>;
    onCancelEdit?: () => void;
    onSubmitEdit?: () => EditRecordRow | boolean;
    editable?: boolean;
    submitCbs: Fn[];
    cancelCbs: Fn[];
    validCbs: Fn[];
  } & T
>;

export type EditRecordValue = string | number | boolean | Recordable | Recordable[]

export interface EditRecordResponse {
  value: EditRecordValue
  index: number
  record: EditRecordRow
  key: string
}

export interface TableInst {
  submitAllEditable: () => EditRecordRow[]
}

export interface TableActionType {
  wrapRef: Ref<Nullable<HTMLElement>>
  emit?: EmitType
}
