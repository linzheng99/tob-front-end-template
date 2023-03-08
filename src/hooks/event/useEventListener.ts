import { ref, Ref, watch, unref } from 'vue'
import { useDebounceFn, useThrottleFn } from '@vueuse/core'

type RemoveEventFn = () => void
export interface UseEventParams {
  el?: Element | Ref<Element | undefined> | Window | any
  name: string
  listener: EventListener
  options?: boolean | AddEventListenerOptions
  autoRemove?: boolean
  isDebounce?: boolean
  wait?: number
}

export function useEventListener({
  el = window,
  name,
  listener,
  options,
  autoRemove = true,
  isDebounce = true,
  wait = 80,
}: UseEventParams): {
  removeEvent: RemoveEventFn
} {
  let remove: RemoveEventFn = () => {}
  // 是否添加listener
  const isAddRef = ref(false)

  if (el) {
    const element = ref(el as Element) as Ref<Element>
    // 防抖 / 节流
    const handler = isDebounce ? useDebounceFn(listener, wait) : useThrottleFn(listener, wait)
    const realHandler = wait ? handler : listener
    // 移除
    const removeEventListener = (e: Element) => {
      isAddRef.value = true
      e.removeEventListener(name, realHandler, options)
    }
    // 添加
    const addEventListener = (e: Element) => e.addEventListener(name, realHandler, options)

    const removeWatch = watch(
      element,
      (value, _oldValue, onCleanUp) => {
        if (value) {
          !unref(isAddRef) && addEventListener(value)
          onCleanUp(() => {
            autoRemove && removeEventListener(value)
          })
        }
      },
      { immediate: true },
    )

    remove = () => {
      removeEventListener(element.value)
      removeWatch()
    }
  }

  return { removeEvent: remove }
}
