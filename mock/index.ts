import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import api from './system'

export function setupMockServer() {
  createProdMockServer(api)
}
