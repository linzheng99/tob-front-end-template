import { VNodeChild } from "vue"

export interface ListType {
  label: string | number
  param: any
  type?: any
  span?: number
  renderContent?: boolean
  render?: (data: any, param: string) => VNodeChild
}
