<template>
  <div class="app-content">
    <n-data-table
      remote
      ref="table"
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @update:sorter="handleSorterChange"
      @update:filters="handleFiltersChange"
      @update:page="handlePageChange"
      @update:page-size="handlePageSizeChange"
    />
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from 'vue'

/**
 * reactive和ref的区别
 * ref返回的是一个包装过的响应式引用，它可以追踪到新数组的变化，并在变化时触发相应的更新。
 * reactive只能对原始数据进行监听,如果你合并两个reactive,不采用修改原始数据的值,然后合并2个值再进行赋值,那么这种行为将无法被监听
 */

const column1 = {
  title: 'column1',
  key: 'column1',
  sorter: true,
  sortOrder: false
}

const column2 = {
  title: 'column2',
  key: 'column2',
  filter: true,
  filterOptionValues: [],
  filterOptions: [
    {
      label: 'Value1',
      value: 1
    },
    {
      label: 'Value2',
      value: 2
    }
  ]
}

const columns = [
  column1,
  column2,
  {
    title: 'Column3',
    key: 'column3'
  }
]

const data = Array.apply(null, { length: 987 }).map((_, index) => {
  return {
    column1: index,
    column2: (index % 2) + 1,
    column3: 'a' + index
  }
})

function query(page, pageSize = 10, order = 'ascend', filterValues = []) {
  return new Promise((resolve) => {
    const copiedData = data.map((v) => v)
    const orderedData = order === 'descend' ? copiedData.reverse() : copiedData
    const filteredData = filterValues.length
      ? orderedData.filter((row) => filterValues.includes(row.column2))
      : orderedData
    const pagedData = filteredData.slice((page - 1) * pageSize, page * pageSize)
    const total = filteredData.length
    const pageCount = Math.ceil(filteredData.length / pageSize)
    setTimeout(
      () =>
        resolve({
          pageCount,
          data: pagedData,
          total
        }),
      1500
    )
  })
}

export default defineComponent({
  setup() {
    const dataRef = ref([])
    const loadingRef = ref(true)
    const columnsRef = ref(columns)
    const column1Reactive = reactive(column1)
    const column2Reactive = reactive(column2)
    const paginationReactive = reactive({
      page: 1,
      pageCount: 1,
      pageSize: 10,
      pageSizes: [10, 20],
      displayOrder: ['size-picker', 'pages', 'quick-jumper'],
      showQuickJumper: true,
      showSizePicker: true,
      prefix({ itemCount }) {
        return `Total is ${itemCount}.`
      }
    })

    onMounted(() => {
      query(
        paginationReactive.page,
        paginationReactive.pageSize,
        column1Reactive.sortOrder,
        column2Reactive.filterOptionValues
      ).then((data) => {
        dataRef.value = data.data
        paginationReactive.pageCount = data.pageCount
        paginationReactive.itemCount = data.total
        loadingRef.value = false
      })
    })

    return {
      data: dataRef,
      columns: columnsRef,
      column1: column1Reactive,
      column2: column2Reactive,
      pagination: paginationReactive,
      loading: loadingRef,
      rowKey(rowData) {
        return rowData.column1
      },
      handleSorterChange(sorter) {
        console.log('handleSorterChange')
        if (!sorter || sorter.columnKey === 'column1') {
          if (!loadingRef.value) {
            loadingRef.value = true
            query(
              paginationReactive.page,
              paginationReactive.pageSize,
              !sorter ? false : sorter.order,
              column2Reactive.filterOptionValues
            ).then((data) => {
              column1Reactive.sortOrder = !sorter ? false : sorter.order
              dataRef.value = data.data
              paginationReactive.pageCount = data.pageCount
              paginationReactive.itemCount = data.total
              loadingRef.value = false
            })
          }
        }
      },
      handleFiltersChange(filters) {
        console.log('handleFiltersChange')
        if (!loadingRef.value) {
          loadingRef.value = true
          const filterValues = filters.column2 || []
          query(
            paginationReactive.page,
            paginationReactive.pageSize,
            column1Reactive.sortOrder,
            filterValues
          ).then((data) => {
            column2Reactive.filterOptionValues = filterValues
            dataRef.value = data.data
            paginationReactive.pageCount = data.pageCount
            paginationReactive.itemCount = data.total
            loadingRef.value = false
          })
        }
      },
      handlePageChange(currentPage) {
        console.log('handlePageChange')
        if (!loadingRef.value) {
          loadingRef.value = true
          query(
            currentPage,
            paginationReactive.pageSize,
            column1Reactive.sortOrder,
            column2Reactive.filterOptionValues
          ).then((data) => {
            dataRef.value = data.data
            paginationReactive.page = currentPage
            paginationReactive.pageCount = data.pageCount
            paginationReactive.itemCount = data.total
            loadingRef.value = false
          })
        }
      },
      handlePageSizeChange(size) {
        console.log('handlePageSizeChange', size)
        if (!loadingRef.value) {
          paginationReactive.pageSize = size
          loadingRef.value = true
          query(
            paginationReactive.page,
            size,
            column1Reactive.sortOrder,
            column2Reactive.filterOptionValues
          ).then((data) => {
            dataRef.value = data.data
            paginationReactive.pageCount = data.pageCount
            paginationReactive.itemCount = data.total
            loadingRef.value = false
          })
        }
      }
    }
  }
})
</script>
