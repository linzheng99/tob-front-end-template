import type { AxiosInstance } from 'axios'
import axios from 'axios'

export class InitAxios {
  private axiosInstance: AxiosInstance
  private readonly options

  constructor(options: any) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  private setupInterceptors() {}

}

