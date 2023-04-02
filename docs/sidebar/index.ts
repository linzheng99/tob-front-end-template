export function setupSidebar(){
  return [
    {
      text: '介绍',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: '/sidebar/Introduction/getting-started' },
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
