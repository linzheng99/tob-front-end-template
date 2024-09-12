export interface ILogin {
  username: string
  password: string
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}

export interface IUser {
  id: number
  nickName: string
  username: string
  isFrozen: boolean
  email: string
  updateTime: string
  createTime: string
  password: string
}
