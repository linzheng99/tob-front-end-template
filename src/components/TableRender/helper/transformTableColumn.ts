import { h, ref } from "vue";
import { ActionValues, EmitType, TableBasicActionColumn, TableBasicColumn, TableBasicRecordRow } from '../types';
import EditaleCell from '../components/editableCell/EditaleCell.vue';
import ActionColumn from '../components/actionColumn/ActionColumn.vue';

export const transformEditCell = (column: TableBasicColumn) => {
  return (record: TableBasicRecordRow, index: number) => {
    const _key = column.key;
    const value = record[_key];
    record.onEdit = async (edit: boolean) => {
      record.editable = edit
    }
    return h(EditaleCell, {
      column, value, record, index
    })
  }
};

export const transformColumns = (columns: TableBasicColumn[]) => {
  columns.forEach(column => {
    const { editable, render } = column
    if (!editable || render) return column

    if (column.children && column.children.length) {
      transformColumns(column.children)
    } else if (column.editable) {
      column.render = transformEditCell(column)
    }
  })
}

export function handleActionColumn(actionColumn: TableBasicActionColumn | undefined, emit: EmitType): TableBasicActionColumn | undefined {
  if (!actionColumn) return
  const { actions, ...restProps } = actionColumn

  return {
    ...restProps,
    key: '_action',
    render(record) {
      const recordRef = ref(record)
      return h(ActionColumn, {
        actions,
        record: recordRef.value,
        onHandleClick: (values: ActionValues) => {
          emit('handle-action', values)
        }
      })
    }
  }
}

export function addActionColumn(columns: TableBasicColumn[], actionColumn: TableBasicActionColumn | undefined, emit: EmitType) {
  const tableAction = handleActionColumn(actionColumn, emit)

  // 操作列
  if (tableAction) {
    const actionIdx = columns.findIndex(i => i.key === '_action')
    actionIdx !== -1 ? columns.splice(actionIdx, 1, tableAction) : columns.push(tableAction)
  }
}
