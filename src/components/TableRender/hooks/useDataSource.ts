import type { PaginationProps } from 'naive-ui'
import type { EmitType, ResponseApi } from '../types'
import { extend } from '@/utils'

interface DataSourceOptions {
  emit: EmitType
  // 自定义修改与后端规定好的数据结构
  requestApi: undefined | ((params: any) => Promise<ResponseApi>)
  setLoading: (value: boolean) => void
  setPagination: (values: Partial<PaginationProps>) => void
  getPagination: () => PaginationProps | false
}

export function useDataSource(options: DataSourceOptions) {
  const { requestApi, setLoading, setPagination, getPagination, emit } = options

  async function requestData(opt: any) {
    if (!requestApi)
      return
    // 自定义修改与后端规定好的数据结构
    const pageParams = {}
    const pagination = getPagination()

    if (pagination) {
      const { page, pageSize } = pagination
      extend(pageParams, { page, pageSize })
    }

    extend(pageParams, { ...opt })

    try {
      setLoading(true)
      // 自定义修改与后端规定好的数据结构
      const { content } = await requestApi(pageParams)
      const { data, total } = content
      setPagination({ itemCount: total })
      emit('request-success', data)
      return data
    }
    catch (error) {
      emit('request-error')
      throw new Error(`${error}`)
    }
    finally {
      setLoading(false)
    }
  }

  return {
    requestData,
  }
}
