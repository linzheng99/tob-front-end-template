<template>
  <ModalCardRender
    ref="modalRef"
    :title="title"
    :footer="false"
    :show="showModal"
    @cancel="toggleModal"
  >
    <FormRender @register="register" @submit="formSubmit" @reset="resetForm">
      <template #menus="{ model, field }">
        <div class="border-base border-1px w-full max-h-400px">
          <n-tree
            key-field="id"
            block-line
            checkable
            cascade
            expand-on-click
            default-expand-all
            :data="menuList"
            :checked-keys="model[field]"
            :render-label="renderLabel"
            @update-checked-keys="updateCheckedKeys"
          />
        </div>
      </template>
    </FormRender>
  </ModalCardRender>
  <div />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ModalCardRender from '@/components/ModalCardRender/index.vue'
import type { FormSchema } from '@/components/FormRender'
import { useForm } from '@/components/FormRender'
import { createRoleApi, getRoleInfoApi, updateRoleApi } from '@/api/role'
import { getMenuListApi } from '@/api/menu'
import type { Role } from '@/api/role/type'
import type { MenuItem } from '@/api/menu/type'

interface Props {
  id: number | null
}

interface Emit {
  (e: 'success'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()
const showModal = ref(false)
const menuList = ref<MenuItem[]>([])

const modalRef = ref<InstanceType<typeof ModalCardRender>>()
const title = computed(() => (props.id ? '编辑角色' : '新增角色'))
const checkedKeys = ref<number[]>([])

const [register, { setFieldsValue, validate }] = useForm({
  schemas: initSchemas(),
})

watch(
  () => showModal.value,
  async (value) => {
    if (value) {
      const { id } = props
      getMenuList()
      if (id) {
        const data = await getRoleInfoApi(id)
        setFieldsValue(data)
      }
    }
    else {
      checkedKeys.value = []
    }
  },
)

function initSchemas(): FormSchema[] {
  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: '角色名',
      componentProps: {
        placeholder: '请输入角色名',
      },
      rules: [{ required: true, message: '请输入角色名', trigger: ['blur'] }],
    },
    {
      field: 'remark',
      component: 'NInput',
      label: '角色备注',
      componentProps: {
        placeholder: '请输入角色备注',
      },
    },
    {
      field: 'menuIds',
      label: '菜单',
      slot: 'menus',
      showLabel: true,
      giProps: {
        span: 4,
      },
    },
  ]

  return schemas
}
function renderLabel({ option }: { option: MenuItem }) {
  return `${option.meta?.title}`
}

async function formSubmit(values: Role) {
  await validate()
  try {
    const { id } = props
    if (id)
      await updateRoleApi(id, values)
    else
      await createRoleApi(values)
    emit('success')
    toggleModal()
  }
  catch (error) {
    console.error(error)
  }
}

async function getMenuList() {
  menuList.value = await getMenuListApi()
}

function updateCheckedKeys(keys: Array<number>) {
  checkedKeys.value = keys
  setFieldsValue({ menuIds: keys })
}

function resetForm() {
  checkedKeys.value = []
}

function toggleModal() {
  showModal.value = !showModal.value
}

defineExpose({ toggleModal })
</script>

<style scoped></style>
