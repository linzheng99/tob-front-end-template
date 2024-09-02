import type { ILogin, ILoginResponse, IUserList } from './type'
import { request } from '@/utils/axios/index'

enum Api {
  Login = '/auth/login',
  GetUserInfo = '/getUserInfo',
  GetUserList = '/user/list',
}

export function getUserInfoApi(params) {
  return request.get({
    url: Api.GetUserInfo,
    params,
  })
}

export function loginApi(data: ILogin) {
  return request.post<ILoginResponse> ({
    url: Api.Login,
    data,
  })
}

export function getUserListApi() {
  return request.get<IUserList>({
    url: Api.GetUserList,
  })
}
