import { PaginationProps } from "naive-ui"

export interface TableActionType {
  setPagination: (values: Partial<PaginationProps>) => void
  reloadData: (params?: any) => Promise<void>
  setLoading: (value: boolean) => void
}
