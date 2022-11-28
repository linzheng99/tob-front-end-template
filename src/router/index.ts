import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const basicRoutes: any = [...routes]


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app: App) {
  app.use(router);
  console.log(router.getRoutes());
  
}
