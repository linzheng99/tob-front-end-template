const themeColorList = [
  '#1890ff',
  '#409EFF',
  '#2d8cf0',
  '#007AFF',
  '#5ac8fa',
  '#5856D6',
  '#536dfe',
  '#9c27b0',
  '#AF52DE',
  '#0096c7',
  '#00C1D4',
  '#34C759',
  '#43a047',
  '#7cb342',
  '#c0ca33',
  '#78DEC7',
  '#e53935',
  '#d81b60',
  '#f4511e',
  '#fb8c00',
  '#dcee62',
  '#fdd835',
  '#6d4c41',
  '#546e7a',
]

const defaultThemeConfig: Theme.Config = {
  themeColor: themeColorList.at(-4) as string,
  themeColorList,
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  isCustomizeInfoColor: false,
  headers: {
    headerHeight: 56,
  },
  tab: {
    tabHeight: 45,
  },
  sidebar: {
    inverted: false,
    sidebarDefaultWidth: 220,
    sidebarMinWidth: 64,
  },
}

export const themeConfig = defaultThemeConfig
