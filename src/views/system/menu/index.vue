<template>
  <div class="h-flex-col">
    <div class="mb-2.5">
      <n-button type="primary" size="small" @click="handleAddMenu">
        新增菜单
      </n-button>
    </div>
    <TableRender
      class="flex-1"
      :data="data"
      :columns="columns"
      :action-column="actionColumn"
      :show-pagination="false"
      :flex-height="false"
      @handle-action="handleAction"
    />
    <HandleMenuModal
      :id="editMenu?.id"
      ref="handleMenuModalRef"
      :type="type"
      @success="getMenuList"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import HandleMenuModal from './components/HandleMenuModal.vue'
import TableRender from '@/components/TableRender/index.vue'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
  TableBasicRecordRow,
} from '@/components/TableRender/types'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'
import { deleteMenuApi, getMenuListApi } from '@/api/menu/index'
import { createDialog } from '@/utils/dialog'

interface MenuInfo {
  id: number
  meta: {
    title: string
    icon: string
  }
  path: string
  name: string
  component: string
  redirect: string
}
const handleMenuModalRef = ref<InstanceType<typeof HandleMenuModal>>()
const data = ref<MenuInfo[]>([])
const editMenu = ref<TableBasicRecordRow<MenuInfo>>()
const type = ref<'add' | 'edit'>('add')
const columns = reactive<TableBasicColumn[]>([
  {
    title: '菜单名称',
    key: 'meta',
    width: 250,
    ellipsis: { tooltip: true },
    render(rowData: { meta?: { title: string, icon: string } }) {
      return rowData.meta?.title
    },
  },
  {
    title: '菜单图标',
    key: 'meta',
    width: 250,
    ellipsis: { tooltip: true },
    render(rowData: { meta?: { title: string, icon: string } }) {
      return rowData.meta?.icon
    },
  },
  {
    title: '菜单地址',
    key: 'path',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '路由名称',
    key: 'name',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '路由组件 / 组件地址',
    key: 'component',
    width: 250,
    ellipsis: { tooltip: true },
  },
  {
    title: '路由重定向',
    key: 'redirect',
    width: 250,
    ellipsis: { tooltip: true },
  },
])
const actionColumn = reactive<TableBasicActionColumn>({
  key: '_action',
  title: '操作',
  align: 'center',
  fixed: 'right',
  width: 260,
  actions: () => actionBtns(),
})

async function handleAction(item: ActionValues) {
  const { title, record } = item
  editMenu.value = record
  switch (title) {
    case '新增':
      type.value = 'add'
      handleMenuModalRef.value?.toggleModal()
      break
    case '编辑':
      handleEditMenu()
      break
    case '删除':
      handleDeleteMenu(record.id)
      break

    default:
      break
  }
}

function actionBtns(): Actions[] {
  return [
    {
      iconConfig: { icon: 'ep-plus' },
      title: '新增',
    },
    {
      iconConfig: { icon: 'ep-edit' },
      title: '编辑',
    },
    {
      iconConfig: { icon: 'ep-delete' },
      title: '删除',
      componentProps: {
        type: 'error',
      },
    },
  ]
}

function handleAddMenu() {
  type.value = 'add'
  editMenu.value = {}
  handleMenuModalRef.value?.toggleModal()
}

function handleEditMenu() {
  type.value = 'edit'
  handleMenuModalRef.value?.toggleModal()
}

async function handleDeleteMenu(id: number) {
  createDialog({
    content: {
      type: 'warning',
    },
    onPositiveClick: async () => {
      await deleteMenuApi(id)
      window.$message?.success('删除成功')
      await getMenuList()
    },
  })
}

async function getMenuList() {
  data.value = await getMenuListApi()
}
onMounted(async () => {
  await getMenuList()
})
</script>

<style lang="scss" scoped></style>
