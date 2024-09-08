<template>
  <ModalCardRender
    ref="modalRef"
    :title="title"
    :footer="false"
    :show="showModal"
    @cancel="toggleModal"
  >
    <FormRender @register="register" @submit="formSubmit" />
  </ModalCardRender>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import FormRender from '@/components/FormRender/index.vue'
import ModalCardRender from '@/components/ModalCardRender/index.vue'
import type { FormSchema } from '@/components/FormRender'
import { useForm } from '@/components/FormRender'
import { createMenuApi, getMenuInfoApi, updateMenuApi } from '@/api/menu'
import { extend } from '@/utils'

interface Props {
  id: number | undefined
  type: 'add' | 'edit'
}

interface Emits {
  (e: 'success'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const showModal = ref(false)
const menuInfo = ref<Recordable>({})

const [register, { setFieldsValue, validate }] = useForm({
  schemas: initSchemas(),
})

watch(
  () => showModal.value,
  async (value) => {
    if (value)
      await setMenuInfo()
    else menuInfo.value = {}
  },
)

const modalRef = ref<InstanceType<typeof ModalCardRender>>()
const title = computed(() => (props.type === 'edit' ? '编辑菜单' : '新增菜单'))

function initSchemas(): FormSchema[] {
  return [
    {
      field: 'name',
      component: 'NInput',
      label: '路由名称',
      componentProps: {
        placeholder: '请输入路由名称',
      },
      rules: [{ required: true, message: '请输入路由名称', trigger: ['blur'] }],
    },
    {
      field: 'path',
      component: 'NInput',
      label: '菜单地址',
      componentProps: {
        placeholder: '请输入菜单地址',
        rules: [{ required: true, message: '请输入菜单地址', trigger: ['blur'] }],
      },
    },
    {
      field: 'component',
      component: 'NInput',
      label: '组件',
      componentProps: {
        placeholder: '请输入路由组件 / 组件地址',
        rules: [{ required: true, message: '请输入路由组件 / 组件地址', trigger: ['blur'] }],
      },
    },
    {
      field: 'redirect',
      component: 'NInput',
      label: '路由重定向',
      componentProps: {
        placeholder: '请输入路由重定向',
      },
    },
    {
      field: 'title',
      component: 'NInput',
      label: '菜单名称',
      componentProps: {
        placeholder: '请输入菜单名称',
      },
      rules: [{ required: true, message: '请输入菜单名称', trigger: ['blur'] }],
    },
    {
      field: 'icon',
      component: 'NInput',
      label: '菜单图标',
      componentProps: {
        placeholder: '请输入菜单图标',
      },
    },
  ]
}

async function setMenuInfo() {
  if (props.id !== undefined) {
    const { meta, ...res } = await getMenuInfoApi(props.id)
    menuInfo.value = { ...res, title: meta.title, icon: meta.icon }
    props.type === 'edit' && setFieldsValue(menuInfo.value)
  }
}

async function formSubmit(values: Recordable) {
  await validate()
  try {
    extend(menuInfo.value, values)
    delete menuInfo.value.id
    const { title, icon, ...res } = menuInfo.value
    const response = {
      ...res,
      meta: {
        title,
        icon,
      },
    }
    if (props.type === 'add') {
      if (props.id !== undefined)
        await createMenuApi(extend({ parentId: props.id }, response))
      else await createMenuApi(response)
    }
    else {
      if (props.id !== undefined)
        await updateMenuApi(props.id, response)
    }
    window.$message?.success('操作成功')
    emit('success')
    toggleModal()
  }
  catch (error) {
    console.error('捕获到的错误:', error)
  }
}

function toggleModal() {
  showModal.value = !showModal.value
}

defineExpose({
  toggleModal,
})
</script>

<style lang="scss" scoped></style>
