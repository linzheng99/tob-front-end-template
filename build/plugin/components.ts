import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default function ComponentsPlugins() {
  return Components({
    dts: 'src/typings/components.d.ts',
    types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    resolvers: [NaiveUiResolver()],
  })
}
