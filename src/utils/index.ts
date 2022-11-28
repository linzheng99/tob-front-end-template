import { isObject } from './is'

export function deepMerge<T = any>(source: any = {}, target: any = {}): T {
  let key: string
  for (key in target)
    source[key] = isObject(source[key]) ? deepMerge(source[key], target[key]) : (source[key] = target[key])

  return source
}
