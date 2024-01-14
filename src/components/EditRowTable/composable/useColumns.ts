import { EditBasicColumn } from "../types/editColumn";
import { transformEditCell } from '../helper';

export const useColumns = () => {
  function getColumns(columns: EditBasicColumn[]) {
    columns?.map(column => {
      if (column.children && column.children.length) {
        getColumns(column.children)
      } else if (column.editable) {
        column.render = transformEditCell(column)
      }
    })
    return columns
  }
  return { getColumns }
}
