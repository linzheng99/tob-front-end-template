import { computed, type ComputedRef } from "vue"
import { EmitType, TableBasicProps } from "../types"
import { addActionColumn, transformColumns } from "../helper";

export const useColumns = (props: ComputedRef<TableBasicProps>, emit: EmitType) => {
  const { columns, actionColumn } = props.value

  // const actionColumnRef = computed(() => {
  //   return unref(actionColumn)
  // })

  // 重新组合table columns
  const getColumns = computed(() => {
    // 操作列
    addActionColumn(columns, actionColumn, emit)
    // 每一列
    transformColumns(columns, emit)

    return columns
  })


  return {
    getColumns
  }
}
