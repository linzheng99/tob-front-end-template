import type { MenuOption } from 'naive-ui'

/** 菜单项配置 */
export type BackMenuOption = MenuOption & {
  key: string
  label: string
  routeName: string
  routePath: string
  icon?: () => import('vue').VNodeChild
  children?: BackMenuOption[]
  external?: string
}
