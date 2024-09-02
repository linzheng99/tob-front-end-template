import { isNumber } from './is'

function inputIsNumber(start: number, end: number) {
  if (isNumber(start) && isNumber(end))
    return true

  return false
}

// 中英文字符或数字 含标点符号
export function AlphaNumericChinese(start: number, end: number) {
  if (inputIsNumber(start, end))
    return new RegExp(`^[\u4E00-\u9FA5a-zA-Z0-9\\p{P}\\s]{${start},${end}}$`, 'u')
  else
    return /^[\u4E00-\u9FA5a-zA-Z0-9\p{P}\s]+$/u
}
// 英文字符或数字 含标点符号
export function AlphaNumeric(start: number, end: number) {
  if (inputIsNumber(start, end))
    return new RegExp(`^[a-zA-Z0-9\\p{P}\\s]{${start},${end}}$`, 'u')
  else
    return /^[a-zA-Z0-9\p{P}\s]+$/u
}
export function Numeric(start: number, end: number) {
  if (inputIsNumber(start, end))
    return new RegExp(`^\\d{${start},${end}}$`)
  else
    return /^\d+$/
}
// 手机号
export const phoneRegexp = /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/
