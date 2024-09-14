import type { ProxyOptions } from 'vite'

const serviceEnv: ServiceEnv = {
  development: [
    {
      prefix: '/api',
      target: `http://localhost:3000/`,
    },
  ],
  test: [
    {
      prefix: '/api',
      target: `http://localhost:3000/`,
    },
  ],
  production: [
    {
      prefix: '/api',
      target: `http://118.31.0.102:3000/`,
    },
  ],
}

export function getServiceEnvConfig(env: ImportMetaEnv) {
  const { VITE_HTTP_PROXY } = env
  return serviceEnv[VITE_HTTP_PROXY]
}

/**
 * 设置网络代理
 * @param envConfig env环境配置
 */
export function createProxy(envConfig: ServiceEnvConfig[] = []) {
  // https://github.com/http-party/node-http-proxy#options
  const proxy: Record<string, string | ProxyOptions> = {}

  for (const { prefix, target } of envConfig) {
    proxy[prefix] = {
      target: target + prefix,
      changeOrigin: true,
      ws: true,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
    }
  }

  return proxy
}
