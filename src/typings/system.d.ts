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
    themeColor: string
    /** 头部样式 */
    headers: Header
    /** 标签页样式 */
    tab: Tab
    /** 侧边栏样式 */
    sidebar: Sidebar
  }
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
