import type { FunctionalComponent, defineComponent } from 'vue'
import { h } from 'vue'
import { NPopover } from 'naive-ui'
import type { ComponentType } from '../../types/componentType'
import { componentMap } from '../../config/componentMap'

export interface ComponentProps {
  component: ComponentType
  editRule: boolean | ((value: any, record: Recordable<any>) => Promise<boolean>) | undefined
  popoverVisible: boolean | string
  ruleMessage: string
}

export const CellComponent: FunctionalComponent<ComponentProps> = (
  { component = 'NInput', ruleMessage, popoverVisible, editRule },
  { attrs },
) => {
  const Comp = componentMap.get(component) as typeof defineComponent
  const DefaultComp = h(Comp, attrs)

  if (!editRule)
    return DefaultComp

  return h(
    NPopover,
    {
      show: !!popoverVisible,
      animated: false,
      class: 'c-red',
    },
    {
      trigger: () => DefaultComp,
      default: () => h('span', {}, { default: () => ruleMessage }),
    },
  )
}
