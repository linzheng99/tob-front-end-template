import type { Role, RoleQueryPage } from './type'
import { request } from '@/utils/axios/index'

enum Api {
  Role = '/role',
  GetRoleList = '/role/list',
  AllRole = '/role/all',
  CreateRole = '/role/create',
}

export function createRoleApi(data: Role) {
  return request.post({
    url: Api.CreateRole,
    data,
  })
}

export function updateRoleApi(id: number, data: Role) {
  return request.put({
    url: Api.Role,
    params: id,
    data,
  })
}

export function getRoleInfoApi(id: number) {
  return request.get({
    url: Api.Role,
    params: id,
  })
}

export function getRoleListApi(params: RoleQueryPage) {
  return request.get({
    url: Api.GetRoleList,
    params,
  })
}

export function deleteRoleApi(id: number) {
  return request.delete({
    url: Api.Role,
    params: id,
  })
}

export function getAllRoleApi() {
  return request.get({
    url: Api.AllRole,
  })
}
