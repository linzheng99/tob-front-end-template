import { defineComponent } from 'vue'
import { isFunction } from '@/utils/is';

export default defineComponent({
  props: {
    createVNode: [Function, String, Object],
  },
  render() {
    return isFunction(this.createVNode) ? this.createVNode() : this.createVNode
  }
})
