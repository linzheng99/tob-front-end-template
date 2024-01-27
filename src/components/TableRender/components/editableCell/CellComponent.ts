import type { FunctionalComponent, defineComponent } from 'vue';
import type { ComponentType } from '../../types/componentType';
import { componentMap } from '../../config/componentMap';
import { h } from 'vue';
import { NPopover } from 'naive-ui';

export interface ComponentProps {
  component: ComponentType;
  editRule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
}

export const CellComponent: FunctionalComponent = (
  { component = 'NInput', ruleMessage, popoverVisible, editRule }: ComponentProps,
  { attrs }
) => {
  const Comp = componentMap.get(component) as typeof defineComponent;
  const DefaultComp = h(Comp, attrs);

  if (!editRule) {
    return DefaultComp;
  }

  return h(
    NPopover,
    {
      show: !!popoverVisible,
      animated: false,
      class: 'c-red'
    },
    {
      trigger: () => DefaultComp,
      default: () => h('span', {}, { default: () => ruleMessage })
    }
  )

};
