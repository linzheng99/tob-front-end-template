import type { Router } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import { getCookieToken } from '@/utils/cookie'
import { WHITE_PATH_LIST } from '../index'

const LOGIN_PATH = PageEnum.Login_page

const redirectLogin = {
  path: LOGIN_PATH,
  replace: true,
}

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const token = getCookieToken()

    if (token) {
      if (to.path === LOGIN_PATH) {
        next('/')
      }

      // 动态添加 TODO
    } else {
      if (WHITE_PATH_LIST.includes(to.path)) {
        next()
      } else {
        next(redirectLogin)
      }
    }
  })
}
