import { extend } from "@/utils";
import { EmitType } from "../types/editColumn";
import { PaginationPage } from "./usePagination";

interface DataSourceOptions {
  requestApi: ((params?: any) => Promise<any>) | undefined
  setLoading: (value: boolean) => void
  getPagination: () => PaginationPage
  emit: EmitType
}
export const useDataSource = (options: DataSourceOptions) => {

  async function fetch(opt?: Recordable) {
    const { requestApi, setLoading, getPagination, emit } = options

    if (!requestApi) return

    try {
      setLoading(true)
      const pagination = getPagination()
      // 感觉可以在这里规定好后端那边表格请求返回的数据结构直接设置总条数itemCount
      const response = await requestApi(extend({}, opt, pagination))
      // 请求成功后会返回数据
      emit('fetch-success', response);
      return response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  async function reload(opt?: Recordable) {
    return await fetch(opt)
  }

  return {
    reload
  }
};
