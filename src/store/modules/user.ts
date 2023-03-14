import { defineStore } from 'pinia'
import { setCookieToken, removeCookieToken, getCookieToken } from '@/utils/cookie/index'
import { getUserInfoApi, loginApi } from '@/api/user'
import { router } from '@/router'
import { store } from '../index'
import { useAppStoreWithOut } from '@/store/modules/app'

interface UserState {
  userInfo: any
  token?: string
  lastUpdateTime: number
}

interface UserInfo {
  userId: string
  username: string
  roles?: []
  id: string
}

const appStore = useAppStoreWithOut()

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    lastUpdateTime: 0,
  }),
  getters: {
    getToken(): string {
      return this.token || getCookieToken()
    },
    getUserInfo(): UserInfo {
      return this.userInfo
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime
    },
  },
  actions: {
    setUserInfo(info) {
      this.userInfo = info
      this.lastUpdateTime = new Date().getTime()
    },
    setToken(token: string) {
      this.token = token
      setCookieToken(token)
    },
    // 登录
    async login(params) {
      const result: any = await loginApi(params)
      const { data, code, message } = result
      if (code === 200) {
        this.setToken(data.token)
        appStore.setAppLocalConfig({ siderCollapse: false })
        return this.afterLoginAction()
      } else {
        console.error(message)
      }
    },
    // 获取用户信息
    async afterLoginAction() {
      if (!this.token) return
      const info = await this.getUserInfoAction()
      // TODO 判断接口登录凭证（cookie）是否过期
      router.replace('/')
      return info
    },
    async getUserInfoAction() {
      if (!this.getToken) return
      const result: any = await getUserInfoApi({ token: this.getToken })
      const { data } = result
      this.setUserInfo(data)
      return data
    },
    // 登出
    logout() {
      this.setToken('')
      removeCookieToken()
      appStore.clearAppLocalConfig()
      router.push('/login')
    },
  },
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
