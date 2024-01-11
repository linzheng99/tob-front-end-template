import { defineStore } from 'pinia';

export const useEditTableStore = defineStore('edit-table-store', () => {
  const data = ref<Recordable[]>([{
    key: 0,
    name: 'John Brown',
    age: '32',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: '42',
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }])
  return { data }
});
