import { computed, ref, unref, watch } from 'vue'
import type { PaginationProps } from 'naive-ui'
import type { TableBasicProps } from '../types'
import { TABLEDEFAULTPAGESIZE, TABLEDEFAULTPAGESIZES } from '../config/tableConfig'
import { extend } from '@/utils'

export function usePagination(props: TableBasicProps) {
  const { showPagination } = props
  const currentConfig = ref<object>({})

  watch(() => props.pagination, (pagination) => {
    if (!pagination)
      return
    setPagination(pagination)
  })

  const getPaginationInfo = computed((): PaginationProps | false => {
    if (!showPagination)
      return false
    const { pagination } = props

    return {
      page: 1,
      pageSize: TABLEDEFAULTPAGESIZE,
      pageSizes: TABLEDEFAULTPAGESIZES,
      itemCount: 0,
      showQuickJumper: true,
      showSizePicker: true,
      displayOrder: ['size-picker', 'pages', 'quick-jumper'],
      prefix: ({ itemCount }) => `共 ${itemCount} 项数据`,
      ...pagination,
      ...unref(currentConfig),
    }
  })

  function getPagination() {
    return unref(getPaginationInfo)
  }

  function setPagination(values: Partial<PaginationProps>) {
    extend(currentConfig.value, values)
  }

  return {
    getPagination,
    setPagination,
  }
}
