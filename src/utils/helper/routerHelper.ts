import { extend } from '@/utils'
import { CUSTOMLAYOUT, LAYOUT } from '@/router/routes/constant'
import type { AppRouteRecordRaw, Menu } from '@/router/routeTypes'

const LayoutMap = new Map()
LayoutMap.set('LAYOUT', LAYOUT)
LayoutMap.set('CUSTOMLAYOUT', CUSTOMLAYOUT)

/**
 * 权限路由 转换 Vue路由
 */
export function transformAuthRouteToVueRoutes(routes: AppRouteRecordRaw[] | undefined) {
  const routeList: AppRouteRecordRaw[] = []

  routes?.forEach((route) => {
    routeList.push(transformAuthRouteToVueRoute(route))
  })

  return routeList
}

/**
 * 单个权限路由 转换 Vue路由
 */
export function transformAuthRouteToVueRoute(item: AppRouteRecordRaw) {
  const dynamicViewsModules = import.meta.glob('../../views/**/*.{vue,tsx}')
  const { component, children, name } = item
  const route = { ...item }
  if (component) {
    const LayoutFound = getLayoutComponent(component)
    if (LayoutFound) {
      extend(route, { component: LayoutFound })
    }
    else {
      const importComponent = dynamicImport(dynamicViewsModules, component)
      extend(route, { component: importComponent })
      // 给相应的路由增加 当前匹配的路由名字
      if (importComponent) {
        importComponent().then((result: any) => {
          Object.assign(result.default, { name })
        })
      }
    }
  }
  // 存在子路由递归转换
  if (hasChildren(item)) {
    const routeChildren: AppRouteRecordRaw[] = []
    children?.map(i =>
      i.component && routeChildren.push(transformAuthRouteToVueRoute(i)),
    )
    extend(route, { children: routeChildren.length ? routeChildren : false })
  }

  return route
}

/**
 * 动态导入 import
 */
function dynamicImport(dynamicViewsModules, component) {
  const matchKeys = getViewComponent(dynamicViewsModules, component)
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0]
    return dynamicViewsModules[matchKey]
  }
  else if (matchKeys.length > 1) {
    window.console.error(
      '请不要在同一层级的目录下创建相同文件名的`.vue`和`.tsx`文件,这将导致动态引入失败',
    )
  }
  else {
    window.console.error(`在src/views/下找不到${component}文件, 请自行创建!`)
  }
}

/**
 * view component 获取
 */
function getViewComponent(dynamicViewsModules, component) {
  const keys = Object.keys(dynamicViewsModules)
  const matchKeys = keys.filter((key) => {
    const k = key.replace('../../views', '')
    const startFlag = component.startsWith('/')
    const endFlag = component.endsWith('.vue') || component.endsWith('.tsx')
    const lastIndex = startFlag ? 0 : 1
    const endIndex = endFlag ? k.length : k.lastIndexOf('.')
    return k.substring(lastIndex, endIndex) === component
  })
  return matchKeys
}

/**
 * layout component获取
 */
function getLayoutComponent(component: string) {
  return LayoutMap.get(component.toUpperCase())
}

/**
 * 是否有子路由
 */
function hasChildren(item: AppRouteRecordRaw) {
  return Boolean(item.children && item.children.length)
}

/**
 * 当前用户菜单是否存在此路由
 */
export function searchRoute(routes: Menu[], path: string): boolean {
  if (!routes.length)
    return false

  for (const route of routes) {
    if (route.children?.length) {
      const resultInChildren = searchRoute(route.children, path)
      if (resultInChildren)
        return true // 如果子路由中找到了匹配的路径，立即返回true
    }

    const result = route.path === path
    if (result)
      return true // 如果当前路由匹配，立即返回true
  }

  return false
}
