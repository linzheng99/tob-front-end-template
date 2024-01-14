import { computed, ref } from "vue";
import { PaginationProps } from "naive-ui";
import { BasicTableProps } from "../types/props";
import { extend } from "@/utils";
import { isBoolean } from "@/utils/is";

export interface PaginationPage {
  page: number | undefined
  limit: number | undefined
}

const config = {
  pageSize: 10,
  page: 1,
}

export const usePagination = (tableProps: BasicTableProps) => {
  const paginationConfig = ref<PaginationProps>({});
  extend(paginationConfig.value, config)

  const getPaginationInfo = computed<PaginationProps | false | undefined>(() => {
    const { pagination } = tableProps

    return {
      paginationConfig,
      itemCount: 0,
      showQuickJumper: true,
      showSizePicker: true,
      pageSizes: [10, 20, 30, 40, 50],
      displayOrder: ['size-picker', 'pages', 'quick-jumper'],
      prefix: ({ itemCount }) => `共 ${itemCount} 项数据`,
      ...(isBoolean(pagination) ? {} : pagination)
    }
  })

  function setPaginationInfo(opt: Partial<PaginationProps>) {
    extend(paginationConfig.value, opt)
  }

  function getPagination(): PaginationPage {
    const { page, pageSize } = paginationConfig.value
    // 返回后端要求的格式参数
    return {
      page,
      limit: pageSize
    }
  }

  return { getPagination, setPaginationInfo, getPaginationInfo }
};
