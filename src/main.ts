import { createApp } from 'vue'
import '@/styles/css/reset.css'
import App from './App.vue'
import { setupStore } from './store';
import { setupRouter } from './router';

async function setUpApp() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

setUpApp()
