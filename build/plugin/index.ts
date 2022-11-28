import vue from '@vitejs/plugin-vue'
import ComponentsPlugins from './components';
import MockServer from './mock';

export function setupVitePlugins(config) {
  console.log(config);
  
  const plugins = [
    vue(),
    ComponentsPlugins(),
    MockServer(config)
  ]
  return plugins
}
