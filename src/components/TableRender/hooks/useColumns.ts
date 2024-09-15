import { type ComputedRef, computed, unref } from 'vue'
import type { EmitType, TableBasicProps } from '../types'
import { addActionColumn, transformColumns } from '../helper'

export function useColumns(props: ComputedRef<TableBasicProps>, emit: EmitType) {
  const { columns, actionColumn } = props.value

  const actionColumnRef = computed(() => {
    return unref(actionColumn)
  })

  // TODO Fix: 放在计算属性里面会造成渲染次数过多
  // 操作列
  addActionColumn(columns, unref(actionColumnRef), emit)

  // setup table columns
  const getColumns = computed(() => {
    // 每一列
    transformColumns(columns, emit)

    return columns
  })

  return {
    getColumns,
  }
}
