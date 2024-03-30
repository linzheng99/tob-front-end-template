import type { PropType, VNodeChild } from 'vue'
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    createVNode: Function as PropType<(data: object, param: string) => VNodeChild>,
    data: Object as PropType<Recordable>,
    param: String as PropType<string>,
  },
  render() {
    const { createVNode, data, param } = this
    const helperRender = () => {
      if (!createVNode || !data || !param) {
        // 如果 createVNode、data 或 param 任何一个未定义，返回一个默认的 VNode
        return h('span', { depth: 3 }, { default: () => '' })
      }
      // 如果所有条件都满足，调用 createVNode 函数并返回结果
      return createVNode(data, param)
    }
    return helperRender()
  },
})
