# Axios 封装

## step1(创建实例)
::: details 封装一个 axios 类（2个私有值，1个构造函数）&& 创建一个 axios 实例
```ts
import axios from 'axios'

class InitAxios {
  private axiosInstance
  // options 是外部的传值
  private readonly options

  constructor(options) {
    this.options = options
    this.axiosInstance = axios.create(options)
  }
}
```
:::
## step2(拦截器)
3. 自定义 axios 拦截器 `interceptors`
::: tip
axios的拦截器，它允许我们在发送请求之前对请求进行修改和处理。具体来说，它接收两个参数，第一个参数是请求拦截器成功的回调函数，第二个参数是请求拦截器失败的回调函数
:::
::: details 请求前后的处理函数
```ts
/** 拦截器处理 */
const transform = {
  /** 请求之前的拦截器 */
  requestInterceptors: (config, options) => {
    // 对于认证方式的处理 (HTTP 身份验证)
    // 添加 token 等
    return config
  },
  /** 请求拦截器错误处理 */
  requestInterceptorsCatch: (error) => {
    throw new Error(error)
  },
  /** 响应拦截器处理 */
  responseInterceptors: (res) => {
    return res
  },
  /** 响应拦截器错误处理 */
  responseInterceptorsCatch: (error) => {
    return Promise.reject(error)
  },
}
```
:::
```ts
class InitAxios {
  // ...
  constructor(options) {
    // ...
    this.setupInterceptors()
  }

  /** 通过options获取处理数据的方式 */
  private getTransform() {
    const { transform } = this.options
    return transform
  }

  private setupInterceptors() {
    // tips: 这里前提是以下函数必定存在的情况
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch,
    } = transform
    // 1. 请求拦截器配置处理
    this.axiosInstance.interceptors.request.use(
      (config) => {
        config = requestInterceptors(config, this.options)
      },
      (error) => {
        return error
      }
    )
    // 2. 请求拦截器错误捕获
    this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)
    // 3. 处理响应结果拦截器
    this.axiosInstance.interceptors.response.use((res) => {
      res = responseInterceptors(res)
      return res
    })
    // 4. 响应结果拦截器错误捕获
    this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch)
  }
}
```
## step3(定义request方法)
::: tip
定义 request 方法的时候考虑到 GET，POST，DELETE，PUT 等请求，对请求数据进行统一处理。
axios 发起一个请求并在then方法中处理响应,响应数据存储在`response.data`中
:::
::: warning
`response.data` 前后端自己定义返回规范
:::
```ts
// 默认声明规范
interface Result {
  code: number
  type: 'success' | 'error' | 'warning'
  message: string
  result
}
enum ResultEnum {
  SUCCESS = 200
}
```
::: details request 接收数据时的处理
```ts
/** 请求数据处理 */
const transform = {
  // ... 忽略拦截器处理
  /** 请求前处理配置 */
  beforeRequestHook: (config, options) => {
    // options可以自定义传值，表达了扩展性
    // 比如给更改请求的url、post请求将参数添加到url等
    const { joinParamsToUrl } = options
    if (apiUrl)
      config.url = `${apiUrl}${config.url}`

    /**
     * @params 请求参数
     * - url: 请求地址
     * - method: 请求方法
     * - data: 请求的body的data
     * - params: 通常拼在url
     */
    const params = config.params || {}
    const data = config.data || false
    // 考虑每次请求不同对应不同的处理
    const method = config.method?.toUpperCase()
    switch (method) {
      case 'GET':
        break
      case 'POST':
        break
      case 'DELETE':
        break
      case 'PUT':
        break
      default:
        break
    }
    return config
  },
  /** 处理请求数据 */
  transformRequestHook: (res, options) => {
    // options可以自定义传值，表达了扩展性
    // 接下来对数据进行想要的处理
    const { data } = res
    // 已有规范,便要限制数据格式
    const { code, result, message } = data
    const hasSuccess = result && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS
    if (hasSuccess) {
      return { code, data, message }
    }
    else {
      // 自定义想做的比如 token过期 / 弹一个message 等
      return { code, message }
    }
    return res
  },
  /** 请求失败处理 */
  requestCatchHook: (res, options) => {}
}
```
:::
```ts
class InitAxios {
  // ... 忽略其他内容
  request(config, options) {
    let conf = cloneDeep(config)
    const transfrom = this.getTransform()

    // requestOptions: 请求配置项
    const { requestOptions } = this.options
    const opt = Object.assign({}, requestOptions, options)
    const {
      beforeRequestHook,
      transformRequestHook,
      requestCatchHook
    } = transform || {}

    // 请求前
    if (isFunction(beforeRequestHook))
      conf = beforeRequestHook(conf, opt)

    conf.requestOptions = opt

    return new Promise((resolve, reject) => {
      this.axiosInstance.request(conf).then((res) => {
        // 请求后
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
        resolve(res)
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
}
```
## step4(定义HTTP方法)
::: details GET
```ts
  /**
   * get请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  get(config, options?) {
    return this.request({ ...config, method: RequestEnum.GET }, options)
  }
```
:::
::: details POST
```ts
  /**
   * post请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  post(config: AxiosRequestConfig, options?) {
    return this.request({ ...config, method: RequestEnum.POST }, options)
  }
```
:::
::: details DELETE
```ts
  /**
   * delete请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  delete(config: AxiosRequestConfig, options?) {
    return this.request({ ...config, method: RequestEnum.DELETE }, options)
  }
```
:::
::: details PUT
```ts
  /**
   * put请求
   * @param config - 请求配置
   * @param options - axios配置
   */
  put(config, options?) {
    return this.request({ ...config, method: RequestEnum.PUT }, options)
  }
```
:::
