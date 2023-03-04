/**
 *后台服务的环境类型
 * - development: 后台开发环境
 * - test: 后台测试环境
 * - production: 后台生产环境
 */
type ServiceEnvType = 'development' | 'test' | 'production'

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
  /** 前缀,用于拦截地址转发代理 */
  prefix: string
  /** 代理地址 */
  target: string
}

/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig[]>
