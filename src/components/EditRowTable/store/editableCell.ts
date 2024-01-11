import { defineStore } from 'pinia';

export const useEditableCellStore = defineStore('editable-cell-store', () => {
  const rowCellModel = reactive<Recordable>({})

  function getRowCellModel() {
    return rowCellModel
  }

  function initRowCellValues(key: string | number, value: string | number | boolean | Recordable | Recordable[]) {
    rowCellModel[key] = value || null
  }

  return { rowCellModel, getRowCellModel, initRowCellValues }
});
