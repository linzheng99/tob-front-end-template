declare namespace App {
  /** 菜单项配置 */
  type GlobalMenuOption = import('naive-ui').MenuOption & {
    key: string
    label: string
    routeName: string
    routePath: string
    icon?: () => import('vue').VNodeChild
    children?: GlobalMenuOption[]
  }
}
