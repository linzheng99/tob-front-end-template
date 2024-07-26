import type { GlobalThemeOverrides } from 'naive-ui'
import { cloneDeep } from 'lodash-es'
import { addColorAlpha, getColorPalette } from '../color'
import { themeConfig } from '@/theme'
import { getLocalKey } from '@/utils/cache/appLocal'
import { LOCAL_THEME_COLOR } from '@/enums/cacheEnum'

export function initThemeConfig() {
  // 获取local theme
  const themeColor = getLocalKey(LOCAL_THEME_COLOR) || themeConfig.themeColor

  const info = themeConfig.isCustomizeInfoColor
    ? themeConfig.otherColor.info
    : getColorPalette(themeColor, 7)
  const otherColor = { ...themeConfig.otherColor, info }
  const config = cloneDeep({ ...themeConfig, themeColor, otherColor })

  return config
}

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'error'
type ColorScene = '' | 'Suppl' | 'Hover' | 'Pressed' | 'Active'
type ColorKey = `${ColorType}Color${ColorScene}`
type ThemeColor = Partial<Record<ColorKey, string>>

interface ColorAction {
  scene: ColorScene
  handler: (color: string) => string
}

/** 获取主题颜色的各种场景对应的颜色 */
function getThemeColors(colors: [ColorType, string][]) {
  const colorActions: ColorAction[] = [
    { scene: '', handler: color => color },
    { scene: 'Suppl', handler: color => color },
    { scene: 'Hover', handler: color => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: color => getColorPalette(color, 7) },
    { scene: 'Active', handler: color => addColorAlpha(color, 0.1) },
  ]

  const themeColor: ThemeColor = {}

  // 对应 common 中颜色 属性设置
  colors.forEach((color) => {
    colorActions.forEach((action) => {
      const [colorType, colorValue] = color
      const colorKey: ColorKey = `${colorType}Color${action.scene}`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })

  return themeColor
}

export function getNaiveThemeOverrides(colors: Record<ColorType, string>): GlobalThemeOverrides {
  const { primary, success, warning, error } = colors

  const info = themeConfig.isCustomizeInfoColor ? colors.info : getColorPalette(primary, 7)

  const themeColors = getThemeColors([
    ['primary', primary],
    ['info', info],
    ['success', success],
    ['warning', warning],
    ['error', error],
  ])

  return {
    common: {
      ...themeColors,
    },
  }
}
