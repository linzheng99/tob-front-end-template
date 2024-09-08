<template>
  <div class="h-flex-col">
    <FormRender label-width="auto" label-align="left" @register="register" />
    <div class="mb-4 flex gap-2">
      <n-button type="primary" size="small" @click="toggleModal('add')">
        新增角色
      </n-button>
      <n-button type="primary" size="small" @click="searchRoleList('search')">
        查询
      </n-button>
      <n-button type="primary" size="small" @click="searchRoleList('clear')">
        清空
      </n-button>
    </div>
    <TableRender
      ref="tableElRef"
      class="flex-1"
      :data="data"
      :columns="columns"
      :action-column="actionColumn"
      :flex-height="false"
      :request-api="getRoleListApi"
      :request-params="searchParams"
      @request-success="requestSuccess"
      @handle-action="handleAction"
    />
    <HandleRoleModal :id="beEditId" ref="handleRoleModalRef" @success="searchRoleList('search')" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import HandleRoleModal from './components/HandleRoleModal.vue'
import { extend } from '@/utils'
import TableRender from '@/components/TableRender/index.vue'
import FormRender from '@/components/FormRender/index.vue'
import { deleteRoleApi, getRoleListApi } from '@/api/role/index'
import type {
  ActionValues,
  TableBasicActionColumn,
  TableBasicColumn,
} from '@/components/TableRender/types'
import type { Actions } from '@/components/TableRender/components/actionColumn/types'
import type { IUser } from '@/api/user/type'
import { createDialog } from '@/utils/dialog'
import type { FormSchema } from '@/components/FormRender'
import { useForm } from '@/components/FormRender'
import type { RoleQueryPage } from '@/api/role/type'

const tableElRef = ref<InstanceType<typeof TableRender>>()
const handleRoleModalRef = ref<InstanceType<typeof handleRoleModalRef>>()
const searchParams = ref<RoleQueryPage>({
  page: 1,
  pageSize: 10,
})
const modalType = ref<'add' | 'edit'>('add')

const [register, { getFieldsValue, resetFields }] = useForm({
  schemas: initSchemas(),
  showActionButtonGroup: false,
  gridProps: {
    cols: 4,
    xGap: 10,
    yGap: 0,
  },
})

const data = ref<IUser[]>([])
const columns = reactive<TableBasicColumn[]>([
  {
    title: '序号',
    key: 'index',
    width: 60,
    align: 'center',
    render: (_, index) => `${index + 1}`,
  },
  {
    title: '角色名',
    key: 'name',
    ellipsis: { tooltip: true },
  },
  {
    title: '角色备注',
    key: 'remark',
    ellipsis: { tooltip: true },
  },
  {
    title: '创建时间',
    key: 'createTime',
    ellipsis: { tooltip: true },
  },
  {
    title: '更新时间',
    key: 'updateTime',
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
const beEditId = ref<null | number>(null)

function actionBtns(): Actions[] {
  return [
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

function initSchemas(): FormSchema[] {
  return [
    {
      field: 'name',
      component: 'NInput',
      label: '角色名',
      componentProps: {
        placeholder: '请输入角色名',
      },
    },
  ]
}

async function handleAction(item: ActionValues) {
  const { title, record } = item
  switch (title) {
    case '编辑':
      toggleModal('edit', record.id)
      break
    case '删除':
      createDialog({
        content: {
          type: 'warning',
        },
        onPositiveClick: async () => {
          await deleteRoleApi(record.id)
          searchRoleList('search')
        },
      })
      break

    default:
      break
  }
}

function requestSuccess(res: IUser[]) {
  data.value = res
}

async function getUserList(searchParams?: RoleQueryPage) {
  await tableElRef.value?.reloadData(searchParams)
}

function toggleModal(type: 'add' | 'edit', id?: number) {
  modalType.value = type
  beEditId.value = id || null
  handleRoleModalRef.value?.toggleModal()
}

async function searchRoleList(type: 'search' | 'clear') {
  if (type === 'search')
    searchParams.value = extend({}, searchParams.value, getFieldsValue())
  else searchParams.value = extend({ page: 1, pageSize: 10 }, resetFields())
  await getUserList(searchParams.value)
}

onMounted(async () => {
  await getUserList()
})
</script>

<style lang="scss" scoped></style>
