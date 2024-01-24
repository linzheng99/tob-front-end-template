import { ButtonProps } from "naive-ui"
import { IconConfig } from '@/hooks/component/useIconRender';

export interface Actions {
  title: string
  componentProps?: ButtonProps
  iconConfig?: IconConfig
  show?: boolean
}

export interface ActionColumnProps {
  actions: (record: Recordable) => Actions[]
  record: Recordable
  showDropdown?: boolean
}
