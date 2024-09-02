export interface ILogin {
  username: string
  password: string
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  user: any
}

export interface IUserList {
  totalItems: number // 当前页的项目数
  items?: {
    id: number
    nickName: string
    username: string
  }
  totalPages?: number // 总页数（可选）
  currentPage: number // 当前页码
}
