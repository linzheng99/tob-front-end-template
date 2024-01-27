import type { FunctionalComponent, defineComponent } from 'vue';
import type { ComponentType } from '../../types/componentType';
import { componentMap } from '../../config/componentMap';
import { h } from 'vue';
import { TableBasicColumn } from '../../types';

export interface ComponentProps {
  component: ComponentType;
  rule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
  column: TableBasicColumn
}

export const CellComponent: FunctionalComponent = (
  { component = 'NInput' }: ComponentProps,
  { attrs }
) => {
  const Comp = componentMap.get(component) as typeof defineComponent;
  const DefaultComp = h(Comp, attrs);

  return DefaultComp;
};
