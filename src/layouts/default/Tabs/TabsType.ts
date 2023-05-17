export interface Tab {
  title: any
  fullPath: string
  name: string
}

export interface TabsState {
  tabs: Tab[]
  activeTab: any
}
