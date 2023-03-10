import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { cloneDeep } from 'lodash-es'
import { isFunction } from '../is'
import { ContentTypeEnum, RequestEnum } from '../../enums/httpEnum'

/** 封装axios请求类 */
export class InitAxios {
  private axiosInstance: AxiosInstance
  private readonly options

  constructor(options: any) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  /**
   * @description 初始化拦截器
   */
  private setupInterceptors() {
    const transform = this.getTransform()

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
      (config) => {
        if (isFunction(requestInterceptors)) {
          config = requestInterceptors(config, this.options)
        }
        return config
      },
      (error) => {
        return error
      },
    )

    /**
     * @description 请求拦截器错误捕获
     */
    if (isFunction(requestInterceptorsCatch)) {
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)
    }

    /**
     * @description 处理响应结果拦截器
     */
    this.axiosInstance.interceptors.response.use((res) => {
      if (isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    })

    /**
     * @description 响应结果拦截器错误捕获
     */
    if (isFunction(responseInterceptorsCatch)) {
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch)
    }
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
  request(config, options) {
    let conf = cloneDeep(config)
    const transform = this.getTransform()

    const { requestOptions } = this.options
    const opt = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, transformRequestHook, requestCatchHook } = transform

    if (isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }

    conf.requestOptions = opt

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(conf)
        .then((res) => {
          // 数据进行转换
          if (isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt)
              resolve(ret)
            } catch (err) {
              reject(err || new Error('request error'))
            }
            return resolve(res)
          }
          resolve(res)
        })
        .catch((e) => {
          if (isFunction(requestCatchHook)) {
            return reject(requestCatchHook(e, opt))
          }
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
  get(config: AxiosRequestConfig, options?) {
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }

  /**
   * post请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  post(config: AxiosRequestConfig, options?) {
    return this.request({ ...config, method: RequestEnum.POST }, options)
  }

  /**
   * put请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  put(config: AxiosRequestConfig, options?) {
    return this.request({ ...config, method: RequestEnum.PUT }, options)
  }

  /**
   * delete请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  delete(config: AxiosRequestConfig, options?) {
    return this.request({ ...config, method: RequestEnum.DELETE }, options)
  }

  /**
   * uploadFile请求
   * @param config - 请求配置
   * @param params - axios配置
   */
  uploadFile(config: AxiosRequestConfig, params) {
    const formData = new window.FormData()
    // 根据后端要求做逻辑处理
    const customFilename = params.name || 'file'

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }

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

    return this.axiosInstance.request({
      ...config,
      method: RequestEnum.POST,
      data: formData,
      headers: {
        'Content-type': ContentTypeEnum.FORM_DATA,
        ignoreCancelToken: true,
      },
    })
  }

  /**
   * downFile请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  downloadFile(config: AxiosRequestConfig, options = { responseType: 'blob' }) {
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }
}
