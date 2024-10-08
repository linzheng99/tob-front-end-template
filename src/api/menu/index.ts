import type { MenuItem } from './type'
import { request } from '@/utils/axios/index'

enum Api {
  Menu = '/menu',
  GetMenuList = '/menu/list',
  CreateMenu = '/menu/create',
  Permission = '/menu/permissions',
}

export function createMenuApi(data: Recordable) {
  return request.post({
    url: Api.CreateMenu,
    data,
  })
}

export function updateMenuApi(id: number, data: Recordable) {
  return request.put({
    url: Api.Menu,
    params: id,
    data,
  })
}

export function getMenuInfoApi(id: number) {
  return request.get({
    url: Api.Menu,
    params: id,
  })
}

export function getMenuListApi() {
  return request.get<MenuItem[]>({
    url: Api.GetMenuList,
  })
}

export function deleteMenuApi(id: number) {
  return request.delete({
    url: Api.Menu,
    params: id,
  })
}

export function getPermissionApi() {
  return request.get({
    url: Api.Permission,
  })
}
