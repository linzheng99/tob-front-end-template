const toString = Object.prototype.toString

export function is(val: unknown, type: string): boolean {
  return toString.call(val) === `[object ${type}]`
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object')
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isNumber(val: any) {
  return is(val, 'Number')
}

export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

export function isEmpty<T = unknown>(val: T): val is T {
  if (isArray(val) || isString(val))
    return val.length === 0

  if (val instanceof Map || val instanceof Set)
    return val.size === 0

  if (isObject(val))
    return Object.keys(val).length === 0

  return false
}
/**
 * @description: 是否已定义
 */
export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined'
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val)
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

/**
 * 判断是否 url
 */
export function isUrl(url: string) {
  return /^(?:http|https):\/\//.test(url)
}
