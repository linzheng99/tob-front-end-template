export function setupSidebar() {
  return [
    {
      text: '项目介绍',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/sidebar/Introduction/getting-started' },
        { text: 'Structure', link: '/sidebar/Introduction/structure' },
      ]
    },
    {
      text: '项目指南',
      collapsed: false,
      items: [
        {
          text: 'Router',
          collapsed: false,
          items: [
            { text: 'router', link: '/sidebar/Guide/Router/router' },
            { text: 'guard', link: '/sidebar/Guide/Router/guard' },
          ]
        },
        {
          text: 'Utils',
          collapsed: false,
          items: [
            { text: 'axios', link: '/sidebar/Guide/Utils/axios' },
          ]
        },
      ]
    },
    {
      text: '官方例子',
      collapsed: false,
      items: [
        { text: 'api-examples', link: '/sidebar/Examples/api-examples' },
        { text: 'markdown-examples', link: '/sidebar/Examples/markdown-examples' },
      ]
    }
  ]
}
