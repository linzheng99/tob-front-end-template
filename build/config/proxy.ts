import type { ProxyOptions } from 'vite'

/**
 * 设置网络代理
 * @param envConfig env环境配置
 */
export function createProxy(envConfig: ServiceEnvConfig[] = []) {
  // https://github.com/http-party/node-http-proxy#options
  const proxy: Record<string, string | ProxyOptions> = {}

  for (const { prefix, target } of envConfig) {
    proxy[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
    }
  }

  return proxy
}
