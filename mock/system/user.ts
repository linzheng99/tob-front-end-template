import { resultSuccess } from '../_util'

export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return resultSuccess({
        token: 'basic_token',
      })
    },
  },
  {
    url: '/api/getUserInfo',
    methods: 'get',
    response: () => {
      return resultSuccess({
        userId: '123456',
        username: 'basic_name',
        roles: [],
        id: '123456789',
      })
    },
  },
]
