/**
 * @description FormItem 配置项
 * @param label - 标签文本
 * @param path - 对象路径
 * @param placeholder - 占位符
 * @param value - key
 * @param itemType - 类型
 */
export interface FormItemType {
  label: string
  path?: string
  placeholder?: string
  value: string
  itemType: string
}

/**
 * @description form主题config
 * @param size - formItem尺码
 * @param labelPlacement - label放置位置
 * @param labelWidth - label的宽度
 * @param inline - 表单的整体结构 纵向/横向
 */
export interface FormConfig {
  size?: 'small' | 'medium' | 'large'
  labelPlacement?: 'left' | 'top'
  labelWidth?: number | string | 'auto'
  inline?: boolean
}

/**
 * @description formItem主题config
 * @param xGap - 横向元素相距
 * @param yGap - 纵向元素相距
 * @param cols - 一行多少个
 */
export interface FormItemConfig {
  xGap?: string
  yGap?: string
  cols?: number
  requireMarkPlacement?: 'left' | 'right' | 'right-hanging'
}
