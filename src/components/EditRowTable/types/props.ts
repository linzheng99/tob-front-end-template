import { PaginationProps } from "naive-ui"
import { EditBasicColumn } from "./editColumn"

export interface BasicTableProps {
  data: Recordable[]
  columns: EditBasicColumn[]
  loading?: boolean
  scrollX?: number
  pagination?: PaginationProps | false | undefined
  showPagination?: boolean
  requestApi?: undefined | ((params?: any) => Promise<any>)
  requestParams?: Recordable
}
