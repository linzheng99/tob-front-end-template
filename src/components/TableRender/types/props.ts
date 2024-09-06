import type { TableBasicActionColumn } from './column'

export interface TableBasicProps {
  data: Recordable[]
  columns: any[]
  actionColumn?: TableBasicActionColumn
  remote?: boolean
  striped?: boolean
  singleLine?: boolean
  bottomBordered?: boolean
  flexHeight?: boolean
  showPagination?: boolean
  pagination?: object | false
  requestApi?: (params?: any) => Promise<ResponseApi<any>>
  requestParams?: (() => Recordable) | Recordable
}

export interface ResponseApi<T = Recordable> {
  // 定义你期望的 API 响应的数据结构
  items: T[]
  currentPage: number
  totalItems: number
  totalPages: number
}
