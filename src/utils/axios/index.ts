import { InitAxios } from './initAxios';
import { deepMerge } from '../index';
export const createAxios = (opt?: any) => {
  return new InitAxios(deepMerge(
    {

    }, opt)
  )
}
