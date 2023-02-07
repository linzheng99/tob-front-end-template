import { Tab } from './TabsType'

export function getIndexInTabs(tabs: Tab[], routeName: string) {
  return tabs.findIndex((tab) => tab.name === routeName)
}
