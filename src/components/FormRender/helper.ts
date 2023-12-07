import { ComponentType } from "./types/component";

/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component: ComponentType | undefined) {
  if (!component) return ''
  if (component === 'NInput') return '请输入';
  if (
    ['NPicker', 'NSelect', 'NCheckbox', 'NRadio', 'NSwitch', 'NDatePicker', 'NTimePicker'].includes(
      component
    )
  )
    return '请选择';
}
