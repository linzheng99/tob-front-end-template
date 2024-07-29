import type { VNodeChild } from 'vue'

export interface ListType {
  label: string | number | ((data: Recordable, param: string) => VNodeChild)
  param: string
  span?: number
  render?: (data: Recordable, param: string) => VNodeChild
}
