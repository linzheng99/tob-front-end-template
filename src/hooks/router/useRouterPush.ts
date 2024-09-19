import { useRouter } from 'vue-router'
import { router as globalRouter } from '@/router/index'
import { isUrl } from '@/utils/is'

/**
 * 路由跳转
 * @param inSetup - 是否在vue页面/组件的setup里面调用，在axios里面无法使用useRouter和useRoute
 */
export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter
  function routerPush(to, newTab = false) {
    if (newTab) {
      if (!isUrl(to)) {
        window.open(`http://${to}`, '_blank')
      }
      else {
        window.open(to, '_blank')
      }
    }
    else {
      router.push(to)
    }
  }
  return {
    routerPush,
  }
}
