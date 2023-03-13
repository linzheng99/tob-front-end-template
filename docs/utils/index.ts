import fs from 'fs'
import path from 'path'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
}

export function getSidebarItems(parentPath: string): SidebarItem[] {
  const files = fs.readdirSync(parentPath)
  const sidebar: SidebarItem[] = []

  files.forEach((file) => {
    const fullPath = path.join(parentPath, file)
    const stats = fs.statSync(fullPath)

    if (stats.isDirectory()) {
      sidebar.push({
        text: file,
        items: getSidebarItems(fullPath),
      })
    } else if (stats.isFile() && file.endsWith('.md')) {
      const name = file.slice(0, -3)
      const relativePath = path.relative('./docs', fullPath)
      
      sidebar.push({
        text: name,
        link: `/${relativePath}`,
      })
    }
  })
  return sidebar
}
