import { EditBasicColumn } from "../types/editColumn";
import EditableCell from '../components/EditableCell.vue';

export const transformEditCell = (column: EditBasicColumn) => {
  return (record: Recordable, index: number) => {
    const _key = column.key;
    const value = record[_key];
    return h(EditableCell, { column, value, record, index })
  }
};
