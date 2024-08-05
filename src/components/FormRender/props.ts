import type { PropType } from 'vue'
import type { ButtonProps, GridItemProps, GridProps } from 'naive-ui'
import type { FormSchema } from './types'

export const basicProps = {
  // grid 配置
  gridProps: {
    type: Object as PropType<GridProps>,
    default: () => ({
      cols: 2,
      xGap: 20,
      yGap: 0,
    }),
  },
  // gi 配置
  giProps: {
    type: Object as PropType<GridItemProps>,
    default: () => ({
      span: 1,
    }),
  },
  // 标签宽度  固定宽度
  labelWidth: {
    type: [Number, String] as PropType<number | string | 'auto'>,
    default: 100,
  },
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
  // 是否展示为行内表单
  inline: {
    type: Boolean,
    default: false,
  },
  // 底部btn大小
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  // 标签位置
  labelPlacement: {
    type: String,
    default: 'left',
  },
  requireMarkPlacement: {
    type: String as PropType<'left' | 'right' | 'right-hanging'>,
    default: 'left',
  },
  // 组件是否width 100%
  isFull: {
    type: Boolean,
    default: true,
  },
  // 是否显示操作按钮（查询/重置）
  showActionButtonGroup: {
    type: Boolean,
    default: true,
  },
  // 显示确认按钮
  showSubmitButton: {
    type: Boolean,
    default: true,
  },
  // 确认按钮文字
  submitButtonText: {
    type: String,
    default: '确认',
  },
  // 确认按钮配置
  submitButtonOptions: Object as PropType<Partial<ButtonProps>>,
  // 显示重置按钮
  showResetButton: {
    type: Boolean,
    default: true,
  },
  // 重置按钮配置
  resetButtonOptions: Object as PropType<Partial<ButtonProps>>,
  // 重置按钮文字
  resetButtonText: {
    type: String,
    default: '重置',
  },
}
