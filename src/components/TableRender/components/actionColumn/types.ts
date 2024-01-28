import { ButtonProps } from "naive-ui"
import { IconConfig } from '@/hooks/component/useIconRender';
import { TableBasicRecordRow } from "../../types";

export interface Actions {
  title: string
  componentProps?: ButtonProps
  iconConfig?: IconConfig
  show?: boolean
}

export interface ActionColumnProps {
  actions: (record: TableBasicRecordRow) => Actions[]
  record: TableBasicRecordRow
  showDropdown?: boolean
}
