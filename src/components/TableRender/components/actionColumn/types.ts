import type { ButtonProps } from 'naive-ui'
import type { TableBasicRecordRow } from '../../types'
import type { IconConfig } from '@/hooks/component/useIconRender'

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
