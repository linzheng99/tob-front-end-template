import { NCheckbox, NInput, NSwitch, NDatePicker, NInputNumber, NSelect, NTimePicker } from 'naive-ui';
import type { ComponentType } from './types/componentType';

const componentMap = new Map<ComponentType, Component>();

componentMap.set('NInput', NInput);
componentMap.set('NInputNumber', NInputNumber);
componentMap.set('NSelect', NSelect);
componentMap.set('NSwitch', NSwitch);
componentMap.set('NCheckbox', NCheckbox);
componentMap.set('NDatePicker', NDatePicker);
componentMap.set('NTimePicker', NTimePicker);

export { componentMap }
