import type { VNodeChild } from 'vue'

export interface ListType {
  label: string | number | ((data: Recordable, param: string) => VNodeChild)
  param: any
  type?: any
  span?: number
  render?: (data: Recordable, param: string) => VNodeChild
}
