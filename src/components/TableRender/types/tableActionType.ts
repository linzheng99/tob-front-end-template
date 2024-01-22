import { PaginationProps } from "naive-ui"

export interface TableActionType {
  setPagination: (values: Partial<PaginationProps>) => void
  reloadData: (params?: any) => void
}
