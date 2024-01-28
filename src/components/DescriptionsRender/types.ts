import { VNodeChild } from "vue"

export interface ListType {
  label: string | number | ((data: Recordable, param: string) => VNodeChild)
  param: any
  type?: any
  span?: number
  renderContent?: boolean
  render?: (data: Recordable, param: string) => VNodeChild
}
