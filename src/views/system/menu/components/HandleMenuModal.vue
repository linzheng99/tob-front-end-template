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
import { catalogueSchemas, getMenuTypeSchemas, updateSchemas } from './settings/menuSchemas'
import FormRender from '@/components/FormRender/index.vue'
import ModalCardRender from '@/components/ModalCardRender/index.vue'
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

const menuTypeSchemas = getMenuTypeSchemas()

const [register, { setFieldsValue, validate, setProps, restoreValidation }] = useForm({
  schemas: [...menuTypeSchemas, ...catalogueSchemas],
  gridProps: {
    cols: 1,
    yGap: 0,
  },
})

watch(
  () => showModal.value,
  async (value) => {
    if (value) {
      configureSchemas()
      await fetchMenuInfo()
    }
    else {
      menuInfo.value = {}
    }
  },
)

const modalRef = ref<InstanceType<typeof ModalCardRender>>()
const title = computed(() => (props.type === 'edit' ? '编辑菜单' : '新增菜单'))

async function fetchMenuInfo() {
  const { id, type } = props
  if (!id || type === 'add') {
    menuInfo.value = { parentId: id, type: 0, orderNo: 0 }
    setTimeout(() => {
      setFieldsValue(menuInfo.value)
    })
  }
  else {
    const { meta, type: menuType, ...res } = await getMenuInfoApi(id)
    menuInfo.value = { ...res, type: menuType, title: meta.title, icon: meta.icon }
    updateAndSetSchemas(menuType)
    setFieldsValue(menuInfo.value)
  }
}

function updateAndSetSchemas(value: number) {
  const updatedSchemas = updateSchemas(value)
  setProps({ schemas: [...menuTypeSchemas, ...updatedSchemas] })
}

function configureSchemas() {
  menuTypeSchemas[0].componentProps = {
    ...menuTypeSchemas[0].componentProps,
    onUpdateValue: (value) => {
      updateAndSetSchemas(value)
      restoreValidation()
    },
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
    if (props.type === 'add')
      await createMenuApi(response)
    else if (props.id !== undefined)
      await updateMenuApi(props.id, response)

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
