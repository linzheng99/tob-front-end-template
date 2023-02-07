import { useRouter } from 'vue-router'
import { router as globalRouter } from '@/router/index'

/**
 * 路由跳转
 * @param inSetup - 是否在vue页面/组件的setup里面调用，在axios里面无法使用useRouter和useRoute
 */
export const useRouterPush = (inSetup = true) => {
  const router = inSetup ? useRouter() : globalRouter
  function routerPush(to, newTab = false) {
    if (newTab) {
      const routerData = router.resolve(to)
      window.open(routerData.href, '_blank')
    } else {
      router.push(to)
    }
  }
  return {
    routerPush,
  }
}
