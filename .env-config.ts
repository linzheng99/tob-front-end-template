const serviceEnv:ServiceEnv = {
  development: [
    {
      prefix: '/basic-api',
      target: 'http://localhost:3100'
    },
  ],
  test: [
    {
      prefix: '/basic-api',
      target: 'http://localhost:3100'
    }
  ],
  production: [
    {
      prefix: '/basic-api',
      target: 'http://localhost:3100'
    } 
  ]
}

export function getServiceEnvConfig(env:ImportMetaEnv) {
  const { VITE_HTTP_PROXY } = env
  return serviceEnv[VITE_HTTP_PROXY]
}
