/** 菜单项配置 */
export type BackMenuOption = import('naive-ui').MenuOption & {
  key: string
  label: string
  // routeName: string
  // routePath: string
  icon?: () => import('vue').VNodeChild
  children?: BackMenuOption[]
}
