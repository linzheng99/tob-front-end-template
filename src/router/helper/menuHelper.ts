import { AppRouteRecordRaw } from '../routeTypes'
import { BackMenuOption } from '../menuTypes'
import { useIconRender } from '@/hooks/component/useIconRender'
/**
 * 路由 转换 菜单
 * @param routes - 路由
 * */
// TODO
export function transformAuthRouteToMenu(
  routes: AppRouteRecordRaw[],
): BackMenuOption[] {
  const Menu: BackMenuOption[] = []
  routes.forEach((route) => {
    const { name, path, meta } = route

    let menuChildren: BackMenuOption[] | undefined
    if (route.children) {
      menuChildren = transformAuthRouteToMenu(route.children)
    }
    const menuItem: BackMenuOption = addPartialProps({
      menu: {
        label: name,
        key: path,
      },
      icon: meta.icon,
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
  icon?: any
  localIcon?: string
  children?: BackMenuOption[]
}) {
  const { iconRender } = useIconRender()

  const item = { ...config.menu }

  const { icon, localIcon, children } = config

  if (localIcon) {
    Object.assign(item, { icon: iconRender({ localIcon }) })
  }

  if (icon) {
    console.log(iconRender({ icon }))

    Object.assign(item, { icon: iconRender({ icon }) })
    console.log(item)
  }

  if (children) {
    Object.assign(item, { children })
  }
  return item
}
