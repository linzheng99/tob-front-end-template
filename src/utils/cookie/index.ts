import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/enums/cacheEnum'

export function getCookieToken() {
  return Cookies.get(TOKEN_KEY)
}

export function setCookieToken(token: string) {
  return Cookies.set(TOKEN_KEY, token)
}

export function removeCookieToken() {
  return Cookies.remove(TOKEN_KEY)
}
