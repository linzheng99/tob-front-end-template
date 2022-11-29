import Cookies from 'js-cookie'

const TokenKey = 'basic_token'

export function getCOokieToken() {
  return Cookies.get(TokenKey)
}

export function setCookieToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeCookieToken() {
  return Cookies.remove(TokenKey)
}
