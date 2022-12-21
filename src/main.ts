import { createApp } from 'vue'
import '@/styles/css/reset.css'
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
