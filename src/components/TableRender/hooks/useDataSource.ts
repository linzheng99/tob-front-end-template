import { PaginationProps } from "naive-ui"
import { ResponseApi } from "../types"

interface DataSourceOptions {
  requestApi: undefined | ((params: any) => Promise<ResponseApi>)
  setLoading: (value: boolean) => void
  setPagination: (values: Partial<PaginationProps>) => void
}

export const useDataSource = (options: DataSourceOptions) => {
  const { requestApi, setLoading, setPagination } = options

  async function requestData(opt: any) {
    if (!requestApi) return
    try {
      setLoading(true)
      const { content } = await requestApi(opt)
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
