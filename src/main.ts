// setup assets 静态资源
import '@/styles/css/reset.css'
import '@/styles/scss/global.scss'
import 'virtual:uno.css'
import 'uno.css';
// register icon sprite
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter, router } from './router'
import { setupRouterGuard } from './router/guard'
import { setupNaive, setupNaiveDiscreteApi, setupGlobalComp } from './plugin'


async function setUpApp() {
  const app = createApp(App)

  setupStore(app)

  // 注册全局自定义组件
  setupGlobalComp(app)
  // 注册全局常用的 naive-ui 组件
  setupNaive(app);

  // 挂载 naive-ui 脱离上下文的 Api
  setupNaiveDiscreteApi();

  await setupRouter(app)

  setupRouterGuard(router)

  app.mount('#app')
}

setUpApp()
