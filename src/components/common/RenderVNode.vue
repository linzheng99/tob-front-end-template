<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RenderVNode',
  props: {
    // 渲染函数 h
    createRender: {
      type: Function,
      default: () => { }
    }
  },
  setup(props) {
    console.log(props);
    const { createRender } = props
    return () => {
      return (
        createRender()
      )
    }
  }
})

</script>
