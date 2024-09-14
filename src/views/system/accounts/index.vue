<template>
  <div class="h-flex-col">
    <FormRender label-width="auto" label-align="left" @register="register" />
    <div class="mb-4 flex gap-2">
      <n-button type="primary" size="small" @click="toggleModal('add')">
        新增用户
      </n-button>
      <n-button type="primary" size="small" @click="searchUserList('search')">
        查询
      </n-button>
      <n-button type="primary" size="small" @click="searchUserList('clear')">
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
      :request-api="getUserListApi"
      :request-params="searchParams"
      @request-success="requestSuccess"
      @handle-action="handleAction"
    />
    <HandleUserModal
      :id="userId"
      ref="handleUserModalRef"
      :type="modalType"
      @success="searchUserList('search')"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import HandleUserModal from './components/HandleUserModal.vue'
import TableRender from '@/components/TableRender/index.vue'
import FormRender from '@/components/FormRender/index.vue'
import { deleteUserApi, getUserListApi } from '@/api/user/index'
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

const tableElRef = ref<InstanceType<typeof TableRender>>()
const handleUserModalRef = ref<InstanceType<typeof HandleUserModal>>()
const searchParams = ref({})
const userId = ref<number | undefined>()
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

function initSchemas(): FormSchema[] {
  return [
    {
      field: 'username',
      component: 'NInput',
      label: '用户名',
      componentProps: {
        placeholder: '请输入用户名',
      },
    },
    {
      field: 'nickName',
      component: 'NInput',
      label: '昵称',
      componentProps: {
        placeholder: '请输入昵称',
      },
    },
    {
      field: 'email',
      component: 'NInput',
      label: '邮箱',
      componentProps: {
        placeholder: '请输入邮箱',
      },
    },
  ]
}

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
    title: '用户名',
    key: 'username',
    ellipsis: { tooltip: true },
  },
  {
    title: '昵称',
    key: 'nickName',
    ellipsis: { tooltip: true },
  },
  {
    title: '邮箱',
    key: 'email',
    ellipsis: { tooltip: true },
  },
  {
    title: '是否冻结',
    key: 'isFrozen',
    ellipsis: { tooltip: true },
    render: (rowData) => {
      return rowData.isFrozen ? '冻结' : '未冻结'
    },
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
          await deleteUserApi(record.id)
          searchUserList('search')
        },
      })
      break

    default:
      break
  }
}

function requestSuccess(res) {
  data.value = res
}

async function getUserList(searchParams?: Recordable) {
  await tableElRef.value?.reloadData(searchParams)
}

function toggleModal(type: 'add' | 'edit', id?: number) {
  modalType.value = type
  userId.value = id || undefined
  handleUserModalRef.value?.toggleModal()
}

async function searchUserList(type: 'search' | 'clear') {
  if (type === 'search')
    searchParams.value = getFieldsValue()
  else searchParams.value = resetFields()
  await getUserList(searchParams.value)
}

onMounted(async () => {
  await getUserList()
})
</script>

<style lang="scss" scoped></style>
