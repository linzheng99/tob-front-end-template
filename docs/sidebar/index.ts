export function setupSidebar() {
  return [
    {
      text: '项目介绍',
      collapsed: false,
      items: [
        { text: 'Structure', link: '/sidebar/Introduction/structure' },
        { text: 'Getting Started', link: '/sidebar/Introduction/getting-started' },
      ]
    },
    {
      text: '项目指南',
      collapsed: false,
      items: [
        {
          text: 'Utils',
          collapsed: false,
          items: [
            { text: 'Axios', link: '/sidebar/Guide/Utils/axios' },
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
