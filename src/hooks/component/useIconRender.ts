import { h } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

/**
 * 图标渲染
 * @param config
 * @property icon - 图标名称(iconify图标的名称), 例如：mdi-account 或者 mdi:account
 * @property localIcon - 本地svg图标文件名(assets/svg-icon文件夹下)
 * @property color - 图标颜色
 * @property fontSize - 图标大小
 */
export interface IconConfig {
  icon?: string
  localIcon?: string
  color?: string
  fontSize?: number
}

interface IconStyle {
  color?: string
  fontSize?: string
}

/** 图标渲染 */
export function useIconRender() {
  const iconRender = (config: IconConfig) => {
    const { icon, localIcon, color, fontSize } = config

    const style: IconStyle = {}
    color ? (style.color = color) : ''
    fontSize ? (style.fontSize = `${fontSize}px`) : ''

    // TODO 给一个默认icon
    !icon && !localIcon ? console.warn('请输入有效 icon / localIcon!') : ''

    return () => h(SvgIcon, { icon, localIcon, style })
  }

  return { iconRender }
}
