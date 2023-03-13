import { defineConfig } from "vite";
// https://vitejs.dev/config/

export default defineConfig({
  base: '/notes-blog',
  plugins: [],
  server: {
    hmr: true
  }
});
