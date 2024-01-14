import { provide, inject } from 'vue';
import { TableActionType } from '../types/editColumn';

const key = Symbol('s-table');

export function createTableContext(instance: TableActionType) {
  provide(key, instance);
}

export function useTableContext(): TableActionType {
  return inject(key) as TableActionType;
}
