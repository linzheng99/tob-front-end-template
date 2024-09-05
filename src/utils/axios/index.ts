import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { deepMerge, setObjToUrlParams } from '../index'
import { isObject, isString } from '../is'
import { InitAxios } from './initAxios'
import type { AxiosTransform, CreateAxiosOptions } from './axiosTypes'
import { getCookieToken } from '@/utils/cookie'
import { ContentTypeEnum, RequestEnum, ResultEnum } from '@/enums/httpEnum'
import { globalConfig } from '@/utils/env'
import { useCreateMessage } from '@/hooks/web/useMessage'
import type { RequestOptions, Result } from '@/typings/axios'

const { apiUrl, urlPrefix } = globalConfig()

const { createWindowMsg } = useCreateMessage()

/** 数据处理 */
const transform: AxiosTransform = {
  /** 处理请求数据 */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse)
      return res

    // 不进行处理，直接返回数据
    if (!isTransformResponse)
      return res.data

    const { data: result } = res
    // 错误的时候返回
    if (!result)
      throw new Error('apiRequestFailed')

    // 直接在处理请求数据的时候统一返回字段
    const { code, data, message } = result
    // 判断后端接口是否与前端定义参数统一
    const hasSuccess = Reflect.has(result, 'code') && code === ResultEnum.SUCCESS
    if (hasSuccess) {
      return data
    }
    else {
      // TODO 判断接口登录凭证（cookie）是否过期
      createWindowMsg('error', `${code}: ${message}`)
      return { code, message }
    }
  },
  beforeRequestHook: (config, options) => {
    const { joinPrefix, urlPrefix, joinParamsToUrl } = options
    /**
     * @params 请求参数
     * - url: 请求地址
     * - method: 请求方法(默认get)
     * - data: 请求的body的data
     */
    if (joinPrefix)
      config.url = `${urlPrefix}${config.url}`

    if (apiUrl && isString(apiUrl))
      config.url = `${apiUrl}${config.url}`

    const params = config.params || {}
    const data = config.data || false
    /**
     * params/data -> string，obj
     * GET
     * www.baidu.com/2132131
     * www.baidu.com/id=123&key=abc
     * POST,PUT,DELETE
     * www.baidu.com (放在body中)
     * www.baidu.com/id=123&key=abc
     * www.baidu.com/2132131
     */
    const method = config.method?.toUpperCase()
    switch (method) {
      case RequestEnum.GET:
      case RequestEnum.DELETE:
        if (isObject(params))
          config.params = Object.assign(params || {})
        else
          paramsIsString(config, params)

        break
      case RequestEnum.POST:
        if (!isString(params)) {
          if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
            config.data = data
            config.params = params
          }
          else {
            // 如果没有提供data，则将params视为data
            config.data = params
            config.params = undefined
          }
          if (joinParamsToUrl) {
            config.url = setObjToUrlParams(
              config.url as string,
              Object.assign({}, config.params, config.data),
            )
          }
        }
        else {
          paramsIsString(config, params)
        }
        break
      case RequestEnum.PUT:
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0)
          config.data = data

        if (!isObject(params))
          paramsIsString(config, params)

        break
      default:
        break
    }

    return config
  },
  /** 请求拦截器处理 */
  requestInterceptors: (config, options) => {
    const token = getCookieToken()

    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // 认证方式
      // jwt token
      (config as Recordable).headers.Authorization = options.authenticationScheme ? `${options.authenticationScheme} ${token}` : token
    }

    return config
  },
  /** 请求拦截器错误捕获 */
  requestInterceptorsCatch: (error: any) => {
    throw new Error(error)
  },
  /** 响应拦截器处理 */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },
  /** 响应拦截器错误处理 */
  responseInterceptorsCatch: (error: any) => {
    return Promise.reject(error)
  },
}

function paramsIsString(config: AxiosRequestConfig, params: string | number) {
  config.url = `${config.url}/${params}`
  config.params = undefined
}

export function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new InitAxios(
    deepMerge(
      {
        // 身份验证
        authenticationScheme: 'Bearer',
        // 接口超时
        timeout: 30 * 1000,
        // 基础接口地址
        baseUrl: import.meta.env.BASE_URL,
        // 请求内容类型
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // 配置项
        requestOptions: {
          // 接口地址
          apiUrl,
          // 默认添加到url
          joinPrefix: true,
          // 拼接的url
          urlPrefix,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 消息提示类型
          errorMessageMode: 'message',
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
        },
      },
      opt || {},
    ),
  )
}

export const request = createAxios()
