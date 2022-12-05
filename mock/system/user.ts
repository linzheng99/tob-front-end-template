import { resultSuccess } from '../_util'

export default [
  {
    url: '/basic-api/login',
    method: 'post',
    response: () => {
      return resultSuccess({
        token: 'basic_token',
      })
    },
  },
  {
    url: '/basic-api/getUserInfo',
    methods: 'get',
    response: () => {
      return resultSuccess({
        userId: '123456',
        username: 'basic_name',
        roles: [],
      })
    },
  },
]
