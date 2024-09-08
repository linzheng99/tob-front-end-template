import type { ICommonQueryPage } from '../commonTypes'

export type RoleQueryPage = ICommonQueryPage & {
  name?: string
}

export interface Role {
  id?: number
  name: string
  remark?: string
  menus?: number[]
}
