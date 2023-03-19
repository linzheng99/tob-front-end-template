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

declare namespace Theme {
  /** 主题配置 */
  interface Config {
    /** 主题色 */
    themeColor: string
    /** 其他颜色 */
    otherColor: OtherColor
    /** 头部样式 */
    headers: Header
    /** 标签页样式 */
    tab: Tab
    /** 侧边栏样式 */
    sidebar: Sidebar
  }
}

interface OtherColor {
  /** 信息 */
  info: string
  /** 成功 */
  success: string
  /** 警告 */
  warning: string
  /** 错误 */
  error: string
}

interface Header {
  /** 头部高度 */
  headerHeight: number
}
interface Tab {
  tabHeight: number
}
interface Sidebar {
  /** 侧边栏反转色 */
  inverted: boolean
  /** 侧边栏默认宽度 */
  sidebarDefaultWidth: number
  /** 侧边栏最小宽度 */
  sidebarMinWidth: number
}
