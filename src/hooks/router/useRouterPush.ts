import { useRouter } from 'vue-router'

export const useRouterPush = () => {
  const router = useRouter()
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
