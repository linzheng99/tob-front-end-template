import { PaginationProps } from "naive-ui"
import { ResponseApi } from "../types"
import { extend } from "@/utils"

interface DataSourceOptions {
  requestApi: undefined | ((params: any) => Promise<ResponseApi>)
  setLoading: (value: boolean) => void
  setPagination: (values: Partial<PaginationProps>) => void
  getPagination: () => PaginationProps | false
}

export const useDataSource = (options: DataSourceOptions) => {
  const { requestApi, setLoading, setPagination, getPagination } = options

  async function requestData(opt: any) {
    if (!requestApi) return
    // 自定义修改与后端规定好的数据结构
    let pageParams = {}
    const pagination = getPagination()

    if (pagination) {
      const { page, pageSize } = pagination
      extend(pageParams, { page, pageSize })
    }

    extend(pageParams, { ...opt })

    try {
      setLoading(true)
      const { content } = await requestApi(pageParams)
      const { data, total } = content
      setPagination({ itemCount: total })
      return data
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    requestData
  }
}
