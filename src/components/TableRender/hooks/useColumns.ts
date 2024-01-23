import { computed, h, ref, unref, watch } from "vue"
import { ActionValues, EmitType, TableBasicActionColumn, TableBasicProps } from "../types"
import ActionColumn from '../components/actionColumn/ActionColumn.vue';

export const useColumns = (props: TableBasicProps, emit: EmitType) => {
  const { columns, actionColumn } = props

  const actionColumnRef = computed(() => {
    return unref(actionColumn)
  })

  const getColumns = computed(() => {
    const tableAction = handleActionColumn()

    if (tableAction) {
      const actionIdx = columns.findIndex(i => i.key === '_action')
      actionIdx !== -1 ? columns.splice(actionIdx, 1, tableAction) : columns.push(tableAction)
    }

    return columns
  })

  function handleActionColumn(): TableBasicActionColumn | undefined {
    if (!actionColumnRef.value) return
    const { actions, ...restProps } = actionColumnRef.value

    return {
      ...restProps,
      key: '_action',
      render(record) {
        return h(ActionColumn, {
          actions,
          record,
          onHandleClick: (values: ActionValues) => {
            emit('handle-action', values)
          }
        })
      }
    }
  }

  return {
    getColumns
  }
}
