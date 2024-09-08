import type { ICommonQueryPage } from '../commonTypes'
import type { ILogin, ILoginResponse, IUser } from './type'
import type { ResponseApi } from '@/components/TableRender/types'
import { request } from '@/utils/axios/index'

enum Api {
  Login = '/auth/login',
  RegisterUser = '/auth/register',
  User = '/user',
  GetUserInfo = '/getUserInfo',
  GetUserList = '/user/list',
}

export function loginApi(data: ILogin) {
  return request.post<ILoginResponse> ({
    url: Api.Login,
    data,
  })
}

export function getUserListApi(params: ICommonQueryPage & {
  username?: string
  nickNick?: string
  email?: string
}) {
  return request.get<ResponseApi<IUser>>({
    url: Api.GetUserList,
    params,
  })
}

export function getUserInfoApi(id: number) {
  return request.get<IUser>({
    url: Api.User,
    params: id,
  })
}

export function createUserApi(data: IUser) {
  return request.post<IUser>({
    url: Api.RegisterUser,
    data,
  })
}

export function updateUserApi(id: number, data: IUser) {
  return request.put<IUser>({
    url: Api.User,
    params: id,
    data,
  })
}

export function deleteUserApi(id: number) {
  return request.delete<IUser>({
    url: Api.User,
    params: id,
  })
}
