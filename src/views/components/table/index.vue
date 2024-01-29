<template>
  <div class="h-full w-full flex flex-col">
    <div flex mb-2 space-x-2>
      <NButton type="primary" @click="changePage">
        chang page
      </NButton>
      <NButton type="primary" @click="fetchApi">
        fetch
      </NButton>
      <NButton type="primary" @click="changeColumn">
        column
      </NButton>
      <NButton type="primary" @click="changeLoading">
        loading
      </NButton>
    </div>
    <TableRender
      ref="tableRef"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      :request-api="promiseApiWithException"
      :action-column="actionColumn"
      @handle-action="handleAction"
      @edit-submit="editSubmit"
      @edit-change="editChange"
    />
  </div>
</template>

<script setup lang="ts">
import { h, nextTick, reactive, ref } from 'vue'
import type { TreeOption } from 'naive-ui'
import { NButton, NInput } from 'naive-ui'
import TableRender from '@/components/TableRender/index.vue'
import type { ResponseApi, TableActionType } from '@/components/TableRender/types'
import type { ActionValues, TableBasicActionColumn, TableBasicColumn } from '@/components/TableRender/types/column'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'

const tableRef = ref<TableActionType>()
const pagination = ref({ pageSize: 10 })
const isDisable = ref(false)
const options = ref<TreeOption[]>([])

function editSubmit(values) {
  console.log(values)
}
function editChange(values) {
  const { record, key } = values
  if (key === 'age')
    record.editValueRefs.address = '2'
}

// TODO 把 click 放到props里面
const actionColumn: TableBasicActionColumn = reactive({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 200,
  actions: record => actionBtns(record),
})
async function handleAction(item: ActionValues) {
  console.log('page', item)
  const { record, title } = item
  switch (title) {
    case '编辑':
      record.onEdit && (await record.onEdit(true))
      options.value = [
        {
          value: 'nan',
          label: '男',
        },
        {
          value: 'nv',
          label: '女',
        },
      ]
      break
    case '保存':
      record.onSubmitEdit && (await record.onSubmitEdit())
      break
    case '取消':
      record.onCancelEdit && record.onCancelEdit()
      break

    default:
      break
  }
}

const columns = reactive<TableBasicColumn[]>([
  {
    title: '序号',
    align: 'center',
    key: 'index',
    width: 60,
    fixed: 'left',
    render: (_, index) => `${index + 1}`,
  },
  {
    title: '日期',
    key: 'date',
    align: 'center',
    width: 160,
    ellipsis: { tooltip: true },
  },
  {
    title: '班级',
    key: 'classId',
    labelKey: 'className',
    align: 'center',
    width: 160,
    editable: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: [],
    },
  },
  {
    title: '儿童姓名',
    key: 'childId',
    labelKey: 'childName',
    align: 'center',
    width: 160,
    editable: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: [],
    },
  },
  {
    title: '老师',
    key: 'workerId',
    align: 'center',
    width: 160,
    editable: true,
    editComponent: 'NInput',
    editRenders: [
      {
        key: 'test',
        render: ({ value, editValues }) => {
          const show = true
          return show
            ? h(NInput, {
              value,
              onUpdateValue(e) {
                editValues.test = e
              },
            })
            : ''
        },
      },
    ],
  },
  {
    title: '午睡时间(小时)',
    key: 'siesta',
    align: 'center',
    width: 160,
    ellipsis: { tooltip: true },
    editRule: async (value, record) => {
      await nextTick()
      console.log(value, record)
      if (value !== 3)
        throw new Error('33')

      return true
    },
    editable: true,
    editComponent: 'NInputNumber',
    editComponentProps: {
      showButton: false,
    },
  },
  {
    title: '如厕情况',
    key: 'isToilet',
    align: 'center',
    width: 160,
    ellipsis: { tooltip: true },
    editable: true,
    editComponent: 'NCheckbox',
    editComponentProps: {
      checkedValue: true,
      uncheckedValue: false,
      onUpdateChecked(e) {
        console.log('checked', e)
      },
    },
  },
  {
    title: '健康情况',
    key: 'healthState',
    labelKey: 'healthStateStr',
    align: 'center',
    width: 160,
    editable: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: [],
      valueField: 'key',
      labelField: 'value',
    },
  },
  {
    title: '游戏/活动',
    key: '',
    align: 'center',
    ellipsis: { tooltip: true },
    editable: true,
    children: [
      {
        title: '自主完成',
        key: 'gameComplete',
        align: 'center',
        width: 160,
        ellipsis: { tooltip: true },
        editable: true,
        editComponent: 'NInput',
      },
      {
        title: '口头指导',
        key: 'gameOral',
        align: 'center',
        width: 160,
        ellipsis: { tooltip: true },
        editable: true,
        editComponent: 'NInput',
      },
      {
        title: '协助完成',
        key: 'gameHelp',
        align: 'center',
        width: 160,
        ellipsis: { tooltip: true },
        editable: true,
        editComponent: 'NInput',
      },
      {
        title: '未完成',
        key: 'gameFail',
        align: 'center',
        width: 160,
        ellipsis: { tooltip: true },
        editable: true,
        editComponent: 'NInput',
      },
    ],
  },
  {
    title() {
      return h(
        'div',
        {
          class: 'flex flex-col',
        },
        [
          h('span', {}, { default: () => '一日表现' }),
          h(
            NButton,
            {
              size: 'small',
              type: 'primary',
            },
            { default: () => '模板管理' },
          ),
        ],
      )
    },
    key: 'dailyShow',
    align: 'center',
    width: 160,
    editable: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: [],
      filterable: true,
      tag: true,
    },
  },
  {
    title: '其他情况',
    key: 'otherMsg',
    align: 'center',
    width: 160,
    ellipsis: { tooltip: true },
    editable: true,
    editComponent: 'NInput',
  },
])

const data = ref(
  Array.from({ length: 46 }).map((_, index) => ({
    key: index,
    name: `Edward King ${index}`,
    age: 32,
    address: `London, Park Lane no. ${index}`,
    sex: 'nan',
    sexStr: '男',
    workerId: 'work',
    test: 'test',
  })),
)

function changePage() {
  pagination.value.pageSize = 20
}

async function fetchApi() {
  try {
    await tableRef.value?.reloadData()
  }
  catch (error) {
    console.log(error)
  }
}

function changeColumn() {
  isDisable.value = !isDisable.value
}

function actionBtns(record): Actions[] {
  const isShow = record.editable
  return [
    {
      iconConfig: { icon: 'ep-search' },
      title: !record.editable ? '编辑' : '保存',
      componentProps: {
        type: 'primary',
        disabled: isDisable.value,
      },
    },
    {
      show: !!isShow,
      iconConfig: { icon: 'ep-search' },
      title: '取消',
      componentProps: {
        type: 'primary',
      },
    },
  ]
}

function promiseApiWithException() {
  return new Promise<ResponseApi>((resolve, reject) => {
    // 模拟一个异步操作
    setTimeout(() => {
      const shouldReject = Math.random() < 0.5
      if (shouldReject) {
        reject(new Error('Simulated API Error'))
      }
      else {
        resolve({
          content: { data: [{ name: 'haha', address: 'address' }], total: 1 },
          code: 200,
          msg: 'msg',
        })
      }
    }, 1000) // 模拟异步操作的延迟
  })
}

function changeLoading() {
  tableRef.value?.setLoading(true)
  setTimeout(() => {
    tableRef.value?.setLoading(false)
  }, 1000)
}
</script>

<style scoped></style>
