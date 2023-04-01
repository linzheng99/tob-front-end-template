import { defineConfig } from 'vitepress'
import { setupNav } from '../nav';
import {getSidebarItems} from '../utils';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Am Template",
  description: "Document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: setupNav(),

    sidebar: getSidebarItems('./docs/sidebar'),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
