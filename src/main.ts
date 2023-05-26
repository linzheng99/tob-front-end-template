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


async function setUpApp() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  setupRouterGuard(router)

  app.mount('#app')
}

setUpApp()
