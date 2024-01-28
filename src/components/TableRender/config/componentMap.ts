import { NCheckbox, NDatePicker, NInput, NInputNumber, NSelect, NSwitch, NTimePicker } from 'naive-ui'
import type { Component } from 'vue'
import type { ComponentType } from '../types'

const componentMap = new Map<ComponentType, Component>()

componentMap.set('NInput', NInput)
componentMap.set('NInputNumber', NInputNumber)
componentMap.set('NSelect', NSelect)
componentMap.set('NSwitch', NSwitch)
componentMap.set('NCheckbox', NCheckbox)
componentMap.set('NDatePicker', NDatePicker)
componentMap.set('NTimePicker', NTimePicker)

const componentEvent: Recordable = {
  NInput: 'on-input',
  NInputNumber: 'on-input',
  NSelect: 'on-update:value',
  NSwitch: 'on-update:value',
  NCheckbox: 'on-update:checked',
  NDatePicker: 'on-update:value',
  NTimePicker: 'on-update:value',
}

export { componentMap, componentEvent }
