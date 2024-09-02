import CryptoJS from 'crypto-js'

export * from './share'

export function md5(str: string) {
  const hash = CryptoJS.MD5(str).toString()
  return hash
}
