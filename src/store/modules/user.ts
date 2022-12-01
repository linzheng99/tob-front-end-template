import { defineStore } from 'pinia';
import { setCookieToken } from '@/utils/cookie/index';

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    userInfo: null,
    token: undefined,
    lastUpdateTime: 0
  }),
  getters: {
    getToken(): string {
      return this.token || ''
     },
    getUserInfo() { },
    getLastUpdateTime() { },
  },
  actions: {
    setUserInfo(info) {
      this.userInfo = info
      this.lastUpdateTime = new Date().getTime()
    },
    setToken(token){
      this.token = token
      setCookieToken(token)
    },
    async login(params) {

    },
    async afterLogin() {
      if(!this.token) return
    }
  }
})
