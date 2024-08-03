import { defineConfig } from 'vitepress'
import { setupNav } from '../nav'
import { setupSidebar } from '../sidebar'

// import {getSidebarItems} from '../utils'; 因无法保证排序问题 自动生成侧边栏方案不成立

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: 'tob Template',
  description: 'Document',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: setupNav(),

    sidebar: setupSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linzhengGithub/am-template' },
    ],
  },
})
