import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { cloneDeep } from 'lodash-es'
import { isFunction } from '../is'
import { ContentTypeEnum, RequestEnum } from '../../enums/httpEnum'
import type { CreateAxiosOptions } from './axiosTypes'
import type { RequestOptions, Result } from '@/typings/axios'

/** 封装axios请求类 */
export class InitAxios {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  /**
   * @description 初始化拦截器
   */
  private setupInterceptors() {
    const transform = this.getTransform()

    if (!transform)
      return

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform

    /**
     * @description 请求拦截器配置处理
     */
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        if (isFunction(requestInterceptors))
          config = requestInterceptors(config, this.options)

        return config
      },
      (error) => {
        return error
      },
    )

    /**
     * @description 请求拦截器错误捕获
     */
    if (isFunction(requestInterceptorsCatch))
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)

    /**
     * @description 处理响应结果拦截器
     */
    this.axiosInstance.interceptors.response.use((res) => {
      if (isFunction(responseInterceptors))
        res = responseInterceptors(res)

      return res
    })

    /**
     * @description 响应结果拦截器错误捕获
     */
    if (isFunction(responseInterceptorsCatch))
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch)
  }

  /**
   * @description 获取处理数据的方式
   */
  private getTransform() {
    const { transform } = this.options
    return transform
  }

  /**
   * @description 请求方法
   */
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    let conf: CreateAxiosOptions = cloneDeep(config)
    const transform = this.getTransform()

    const { requestOptions } = this.options
    const opt = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, transformRequestHook, requestCatchHook } = transform || {}

    if (isFunction(beforeRequestHook))
      conf = beforeRequestHook(conf, opt)

    conf.requestOptions = opt

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          // 数据进行转换
          if (isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt)
              resolve(ret)
            }
            catch (err) {
              reject(err || new Error('request error'))
            }
            return
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((e) => {
          if (requestCatchHook && isFunction(requestCatchHook))
            return reject(requestCatchHook(e, opt))

          if (axios.isAxiosError(e)) {
            console.error('isAxiosError', e)
            return reject(e)
          }
          reject(e)
        })
    })
  }

  /**
   * get请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }

  /**
   * post请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.POST }, options)
  }

  /**
   * put请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.PUT }, options)
  }

  /**
   * delete请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: RequestEnum.DELETE }, options)
  }

  /**
   * uploadFile请求
   * @param config - 请求配置
   * @param params - axios配置
   */
  uploadFile<T = any>(config: AxiosRequestConfig, params) {
    const formData = new window.FormData()
    // 根据后端要求做逻辑处理
    const customFilename = params.name || 'file'

    if (params.filename)
      formData.append(customFilename, params.file, params.filename)
    else
      formData.append(customFilename, params.file)

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data![key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, params.data![key])
      })
    }

    return this.axiosInstance.request<T>({
      ...config,
      method: RequestEnum.POST,
      data: formData,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        'ignoreCancelToken': true,
      },
    })
  }

  /**
   * downFile请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  // downloadFile(config: AxiosRequestConfig, options = { responseType: 'blob' }) {
  //   return this.request({ ...config, method: RequestEnum.GET }, options)
  // }
}
