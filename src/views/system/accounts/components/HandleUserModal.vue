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
import { createUserApi, getUserInfoApi, updateUserApi } from '@/api/user'
import type { IUser } from '@/api/user/type'

interface Props {
  type: 'edit' | 'add'
  id: number | undefined
}
interface Emits {
  (e: 'success'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const showModal = ref(false)
const modalRef = ref<InstanceType<typeof ModalCardRender>>()
const title = computed(() => (props.type === 'edit' ? '编辑用户' : '新增用户'))
const [register, { setFieldsValue, setProps, validate }] = useForm({
  schemas: initSchemas(),
})

watch(
  () => showModal.value,
  async (value) => {
    if (value) {
      if (props.id) {
        const data = await getUserInfoApi(props.id)
        setProps({
          schemas: initSchemas().filter(item => item.field !== 'password'),
        })
        setFieldsValue(data)
      }
    }
  },
)

function initSchemas(): FormSchema[] {
  const schemas: FormSchema[] = [
    {
      field: 'username',
      component: 'NInput',
      label: '用户名',
      componentProps: {
        placeholder: '请输入用户名',
      },
      rules: [{ required: true, message: '请输入用户名', trigger: ['blur'] }],
    },
    {
      field: 'password',
      component: 'NInput',
      label: '密码',
      componentProps: {
        placeholder: '请输入密码',
      },
      rules: [{ required: true, message: '请输入密码', trigger: ['blur'] }],
    },
    {
      field: 'nickName',
      component: 'NInput',
      label: '昵称',
      componentProps: {
        placeholder: '请输入昵称',
      },
      rules: [{ required: true, message: '请输入昵称', trigger: ['blur'] }],
    },
    {
      field: 'email',
      component: 'NInput',
      label: '邮箱',
      componentProps: {
        placeholder: '请输入邮箱',
      },
      rules: [{ required: true, message: '请输入邮箱', trigger: ['blur'] }],
    },
  ]

  return schemas
}

async function formSubmit(values: IUser) {
  await validate()
  try {
    if (props.type === 'edit')
      props.id && (await updateUserApi(props.id, values))
    else await createUserApi(values)
    toggleModal()
    emit('success')
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

<style scoped></style>
