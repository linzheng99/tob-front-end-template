import type { Router } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum';
import { getCookieToken } from '@/utils/cookie';

const redirectLogin = {
  path: PageEnum.Login_page,
  replace: true
}

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const token = getCookieToken()

    if (token) {

    } else {

    }
  })
}
