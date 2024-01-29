import { h, ref } from 'vue'
import type { ActionValues, EmitType, TableBasicActionColumn, TableBasicColumn, TableBasicRecordRow } from '../types'
import EditableCell from '../components/editableCell/EditableCell.vue'
import ActionColumn from '../components/actionColumn/ActionColumn.vue'

export function transformEditCell(column: TableBasicColumn, emit: EmitType) {
  return (record: TableBasicRecordRow, index: number) => {
    const _key = column.key
    const value = record[_key]
    record.onEdit = async (edit: boolean) => {
      record.editable = edit
    }
    return h(EditableCell, {
      column,
      value,
      record,
      index,
      emit,
    })
  }
}

export function transformColumns(columns: TableBasicColumn[], emit: EmitType) {
  columns.forEach((column) => {
    const { editable } = column
    if (!editable)
      return column

    if (column.children && column.children.length)
      transformColumns(column.children, emit)
    else if (column.editable)
      column.render = transformEditCell(column, emit)

    return column
  })
}

export function handleActionColumn(
  actionColumn: TableBasicActionColumn | undefined,
  emit: EmitType,
): TableBasicColumn | undefined {
  if (!actionColumn)
    return
  const { actions, ...restProps } = actionColumn

  return {
    ...restProps,
    key: '_action',
    render(record, index) {
      const recordRef = ref(record)
      return actions
        ? h(ActionColumn, {
          actions,
          record: recordRef.value,
          index,
          onHandleClick: (values: ActionValues) => {
            emit('handle-action', values)
          },
        })
        : null
    },
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
