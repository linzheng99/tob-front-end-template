import { request } from '@/utils/axios/index'

enum Api {
  GetMenuList = '/getMenuList',
}

export function getMenuListApi(params) {
  return request.get({
    url: Api.GetMenuList,
    params,
  })
}
