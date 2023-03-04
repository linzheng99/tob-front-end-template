import { InitAxios } from './initAxios'
import { deepMerge, setObjToUrlParams } from '../index'
import { getCookieToken } from '@/utils/cookie'
import { ContentTypeEnum, ResultEnum } from '@/enums/httpEnum'
import { globalConfig } from '@/utils/env'
import { isString } from '../is'
import { RequestEnum } from '@/enums/httpEnum'

const { apiUrl, urlPrefix } = globalConfig()

/** 数据处理 */
const transform = {
  /** 处理请求数据 */
  transformRequestHook: (res, options) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res
    }
    // 不进行处理，直接返回数据
    if (!isTransformResponse) {
      return res.data
    }

    const { data: result } = res
    // 错误的时候返回
    if (!result) {
      throw new Error('sys.api.apiRequestFailed')
    }

    // 直接在处理请求数据的时候统一返回字段
    const { code, data, message } = result
    // 判断后端接口是否与前端定义参数统一
    const hasSuccess = data && Reflect.has(result, 'code') && code === ResultEnum.SUCCESS
    if (hasSuccess) {
      return { code, data, message }
    } else {
      // TODO 判断接口登录凭证（cookie）是否过期
      return { code, message }
    }
  },
  /** 请求之前处理config */
  beforeRequestHook: (config, options) => {
    const { joinPrefix, urlPrefix, joinParamsToUrl } = options
    /**
     * @params 请求参数
     * - url: 请求地址
     * - method: 请求方法(默认get)
     * - data: 请求的body的data
     */
    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }
    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }
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
        if (!isString(params)) {
          config.params = Object.assign(params || {})
        } else {
          paramsIsString(config, params)
        }
        break
      case RequestEnum.POST:
      case RequestEnum.PUT:
        if (!isString(params)) {
          if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
            config.data = data
            config.params = params
          } else {
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
        } else {
          paramsIsString(config, params)
        }
        break
      default:
        break
    }

    return config
  },
  /** 请求拦截器处理 */
  requestInterceptors: (config, options) => {
    const token = getCookieToken()

    if (token && config?.requestOptions?.withToken !== false) {
      // jwt
      const auth = options.authenticationScheme
      config.headers.Authorization = auth ? `${auth} ${token}` : token
    }

    return config
  },
  /** 请求拦截器错误处理 */
  requestInterceptorsCatch: (error) => {
    console.error(error)
    return error
  },
  /** 响应拦截器处理 */
  responseInterceptors: (res) => {
    return res
  },
  /** 响应拦截器错误处理 */
  responseInterceptorsCatch: (error) => {
    // const { response, code, message, config } = error
    const { message } = error
    console.error(message)
    return Promise.reject(error)
  },
}

const paramsIsString = (config, params) => {
  config.url = `${config.url}/${params}`
  config.params = undefined
}

export const createAxios = (opt?: any) => {
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
