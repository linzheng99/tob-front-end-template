export interface MenuItem {
  id: number
  parentId?: number
  path: string
  name: string
  component: string
  meta: {
    title: string
    icon: string
  }
  redirect?: string
  children?: MenuItem[]
}
