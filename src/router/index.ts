import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';
import { TEST_ROUTER } from './routes/module/testRouter';

const basicRoutes: any = [...routes, TEST_ROUTER]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  app.use(router);
}
