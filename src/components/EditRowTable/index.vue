<template>
  <n-data-table
    ref="tableElRef"
    class="flex-1"
    striped
    :single-line="false"
    :bottom-bordered="true"
    flex-height
    remote
    v-bind="getBindValues"
    :data="data"
    :loading="loading"
  />
</template>

<script setup lang="ts">
import { EditBasicColumn } from '@/components/EditRowTable/types/editColumn'
import { useColumns } from './composable'
import { useEditTableStore } from './store/editTable'

const { getColumns } = useColumns()
const { data } = toRefs(useEditTableStore())

const loading = ref(false)

// column 设置 可编辑属性 拿到列的时候我得特殊处理列 看他是不是要标记,如果是要编辑就要render components
// row 的如果是开启编辑他的每一项 都是一个编辑组件
// column 是要处理的外面包一层处理函数 处理是不是editable
const columns: EditBasicColumn[] = [
  {
    title: 'Name',
    key: 'name',
    editable: true,
    editComponent: 'NInput'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: '',
    children: [
      {
        title: 'Address',
        key: 'address',
        editable: true
      }
    ]
  },
  {
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => console.log(row)
        },
        { default: () => 'Play' }
      )
    }
  }
]

const getBindValues = computed(() => {
  return {
    columns: getColumns(columns)
  }
})
</script>

<style scoped></style>
