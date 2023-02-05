import { AppRouteRecordRaw } from '../routeTypes'
import { BackMenuOption } from '../menuTypes'
import { useIconRender } from '@/hooks/component/useIconRender'
import { extend } from '@/utils'
/**
 * 路由 转换 菜单
 * @param routes - 路由
 * */
export function transformAuthRouteToMenu(routes: AppRouteRecordRaw[]): BackMenuOption[] {
  const Menu: BackMenuOption[] = []
  routes.forEach((route) => {
    const { name, path, meta } = route

    let menuChildren: BackMenuOption[] | undefined
    if (route.children) {
      menuChildren = transformAuthRouteToMenu(route.children)
    }
    const menuItem: BackMenuOption = addPartialProps({
      menu: {
        label: meta.title as string,
        key: name,
        routeName: name,
        routePath: path,
      },
      localIcon: meta.localIcon as string,
      icon: meta.icon as string,
      children: menuChildren,
    })

    if (!hideInMenu(route)) {
      Menu.push(menuItem)
    }
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

  if (localIcon) {
    extend(item, { icon: iconRender({ localIcon }) })
  }

  if (icon) {
    extend(item, { icon: iconRender({ icon }) })
  }

  if (children) {
    extend(item, { children })
  }
  return item
}
