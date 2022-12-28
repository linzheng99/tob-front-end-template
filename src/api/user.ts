import { request } from '@/utils/axios/index'

enum Api {
  Login = '/login',
  GetUserInfo = '/getUserInfo',
}

export function loginApi(params) {
  return request.post({
    url: Api.Login,
    params,
  })
}

export function getUserInfoApi(params) {
  return request.get({
    url: Api.GetUserInfo,
    params,
  })
}
