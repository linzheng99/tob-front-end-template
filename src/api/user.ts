import { request } from '@/utils/axios/index'

enum Api {
  Login = '/login',
  GetUserInfo = '/getUserInfo',
}

export function loginApi(data) {
  return request.post({
    url: Api.Login,
    data,
  })
}

export function getUserInfoApi(params) {
  return request.get({
    url: Api.GetUserInfo,
    params,
  })
}
