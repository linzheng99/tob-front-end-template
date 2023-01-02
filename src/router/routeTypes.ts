import type { RouteMeta } from 'vue-router'
import type { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface AppRouteRecordRaw {
  name: string
  meta: RouteMeta
  path: string
  redirect?: string
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}

export interface Menu {
  name: string

  icon?: string

  path: string

  // path contains param, auto assignment.
  paramPath?: string

  disabled?: boolean

  children?: Menu[]

  orderNo?: number

  meta?: Partial<RouteMeta>

  hideMenu?: boolean
}
