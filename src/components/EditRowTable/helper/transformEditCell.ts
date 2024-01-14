import { h } from "vue";
import { EditBasicColumn, EditRecordRow } from "../types/editColumn";
import EditableCell from '../components/EditableCell.vue';

export const transformEditCell = (column: EditBasicColumn) => {
  return (record: EditRecordRow, index: number) => {
    const _key = column.key;
    const value = record[_key];
    record.onEdit = async (edit: boolean) => {
      record.editable = edit
      return edit
    }
    return h(EditableCell, {
      column, value, record, index
    })
  }
};
