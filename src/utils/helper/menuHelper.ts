import type { AppRouteRecordRaw, Menu } from '@/router/routeTypes'
import type { BackMenuOption } from '@/router/menuTypes'
import { useIconRender } from '@/hooks/component/useIconRender'
import { extend } from '@/utils'

/**
 * 路由 转换 菜单
 * @param routes - 路由
 */
export function transformAuthRouteToMenu(routes: AppRouteRecordRaw[]): BackMenuOption[] {
  const Menu: BackMenuOption[] = []
  routes.forEach((route) => {
    const { name, path, meta, external } = route

    let menuChildren: BackMenuOption[] | undefined
    if (route.children)
      menuChildren = transformAuthRouteToMenu(route.children)

    const menuItem: BackMenuOption = addPartialProps({
      menu: {
        label: meta.title as string,
        key: name,
        routeName: name,
        routePath: path,
        external,
      },
      localIcon: meta.localIcon as string,
      icon: meta.icon as string,
      children: menuChildren,
    })

    if (!hideInMenu(route))
      Menu.push(menuItem)
  })
  return Menu
}

/** 路由 不转换 菜单 */
function hideInMenu(route: AppRouteRecordRaw) {
  return route.meta.hide
}

/** 给菜单添加可选属性 */
function addPartialProps(config: {
  menu: BackMenuOption
  icon?: string
  localIcon?: string
  children?: BackMenuOption[]
}) {
  const { iconRender } = useIconRender()

  const item = { ...config.menu }

  const { icon, localIcon, children } = config

  if (localIcon)
    extend(item, { icon: iconRender({ localIcon }) })

  if (icon)
    extend(item, { icon: iconRender({ icon }) })

  if (children)
    extend(item, { children })

  return item
}

// 寻找第一个子菜单
export function findFirstRoute(menuList: Menu[]): string | null {
  for (const menu of menuList) {
    // 如果有子菜单，递归查找
    if (menu.children && menu.children.length > 0) {
      const childRoute = findFirstRoute(menu.children)
      if (childRoute)
        return childRoute // 找到第一个有效的子路由
    }
    // 如果没有子菜单，返回当前菜单的路径
    if (menu.path)
      return menu.path
  }
  return null // 如果没有找到有效路径，返回 null
}
