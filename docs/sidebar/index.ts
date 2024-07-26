export function setupSidebar() {
  return [
    {
      text: '项目介绍',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/sidebar/Introduction/getting-started' },
        { text: 'Structure', link: '/sidebar/Introduction/structure' },
      ],
    },
    {
      text: '项目指南',
      collapsed: false,
      items: [
        {
          text: 'Router',
          collapsed: true,
          items: [
            { text: 'router', link: '/sidebar/Guide/Router/router' },
            { text: 'guard', link: '/sidebar/Guide/Router/guard' },
          ],
        },
        {
          text: 'Layout',
          collapsed: true,
          items: [
            { text: 'sidebar', link: '/sidebar/Guide/Layout/sidebar' },
          ],
        },
        {
          text: 'Helper',
          collapsed: true,
          items: [
            { text: 'routerHelper', link: '/sidebar/Guide/Helpers/routerHelper' },
            { text: 'menuHelper', link: '/sidebar/Guide/Helpers/menuHelper' },
          ],
        },
        {
          text: 'Theme',
          collapsed: true,
          items: [
            { text: 'themeConfig', link: '/sidebar/Guide/Theme/themeConfig' },
          ],
        },
        {
          text: 'Utils',
          collapsed: true,
          items: [
            { text: 'axios', link: '/sidebar/Guide/Utils/axios' },
            { text: 'cache', link: '/sidebar/Guide/Utils/cache' },
          ],
        },
        {
          text: 'Components',
          collapsed: true,
          items: [
            { text: 'TableRender', link: '/sidebar/Guide/Components/TableRender' },
            { text: 'FormRender', link: '/sidebar/Guide/Components/FormRender' },
            { text: 'DescriptionsRender', link: '/sidebar/Guide/Components/DescriptionsRender' },
            { text: 'UploadRender', link: '/sidebar/Guide/Components/UploadRender' },
            { text: 'LoadingEmptyWrapper', link: '/sidebar/Guide/Components/LoadingEmptyWrapper' },
          ],
        },
      ],
    },
    {
      text: '官方例子',
      collapsed: false,
      items: [
        { text: 'api-examples', link: '/sidebar/Examples/api-examples' },
        { text: 'markdown-examples', link: '/sidebar/Examples/markdown-examples' },
      ],
    },
  ]
}
