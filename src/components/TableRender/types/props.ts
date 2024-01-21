import { TableBasicColumn } from "./column"

export interface TableBasicProps {
  data: Recordable[]
  columns: TableBasicColumn[],
  remote?: boolean
  striped?: boolean
  singleLine?: boolean
  bottomBordered?: boolean
  flexHeight?: boolean
  showPagination?: boolean
  pagination?: Object | false
}
