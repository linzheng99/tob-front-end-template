import { defineStore } from 'pinia'
import { store } from '../index'
import { usePermissionStoreWithOut } from './permission'
import { getCookieToken, removeCookieToken, setCookieToken } from '@/utils/cookie/index'
import { getUserInfoApi, loginApi } from '@/api/user/index'
import { router } from '@/router'
import { useAppStoreWithOut } from '@/store/modules/app'
import type { ILogin } from '@/api/user/type'

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
    async login(params: ILogin) {
      const { user, accessToken } = await loginApi(params)
      this.setToken(accessToken)
      localStorage.setItem('userInfo', JSON.stringify(user))
      appStore.setAppLocalConfig({ siderCollapse: false })
      return this.afterLoginAction()
    },
    // 获取用户信息
    async afterLoginAction() {
      if (!this.token)
        return
      const info = await this.getUserInfoAction()
      const permissionStore = usePermissionStoreWithOut()
      permissionStore.setDynamicAddedRoute(false) // 重置动态路由状态
      router.replace('/')
      return info
    },
    async getUserInfoAction() {
      if (!this.getToken)
        return
      const localUserInfo = localStorage.getItem('userInfo')
      const data = await getUserInfoApi(JSON.parse(localUserInfo || '{}').id)
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
