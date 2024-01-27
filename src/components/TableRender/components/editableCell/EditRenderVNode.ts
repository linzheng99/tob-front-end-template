import { PropType, defineComponent} from 'vue'

export default defineComponent({
  props: {
    createVNode: Function,
    value: String as PropType<any>,
    editValues: {
      type: Object as PropType<Recordable>,
      default: {}
    }
  },
  render() {
    const { value, editValues } = this
    
    if (this.createVNode) {
      return this.createVNode({ value, editValues });
    }
  }
})
