import type { FormSchema } from '@/components/FormRender'

export function getMenuTypeSchemas(): FormSchema[] {
  return [
    {
      field: 'type',
      component: 'RadioGroupComp',
      label: '菜单类型',
      componentProps: {
        options: [
          {
            label: '目录',
            value: 0,
          },
          {
            label: '菜单',
            value: 1,
          },
          {
            label: '权限',
            value: 2,
          },
        ],
        defaultValue: 0,
        onUpdateValue: () => { },
      },
      rules: [{ type: 'number', required: true, message: '请选择菜单类型', trigger: ['blur'] }],
    },
    {
      field: 'orderNo',
      component: 'NInputNumber',
      label: '排序号',
      componentProps: {
        showButton: false,
      },
    },
  ]
}

// type 2
export const permissionSchemas: FormSchema[] = [
  {
    field: 'title',
    component: 'NInput',
    label: '权限名称',
    componentProps: {
      placeholder: '请输入权限名称',
    },
    rules: [{ required: true, message: '请输入权限名称', trigger: ['blur'] }],
  },
  {
    field: 'permission',
    component: 'NInput',
    label: '权限',
    componentProps: {
      placeholder: '请输入权限',
    },
    rules: [{ required: true, message: '请输入权限', trigger: ['blur'] }],
  },
]

// type 0
export const catalogueSchemas: FormSchema[] = [
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

// type 1
export const menuSchemas: FormSchema[] = [
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

// 新增的函数，用于更新 schemas
export function updateSchemas(type: number) {
  // 根据 type 更新相应的 schemas
  let updatedSchemas
  switch (type) {
    case 0:
      updatedSchemas = catalogueSchemas
      break
    case 1:
      updatedSchemas = menuSchemas
      break
    case 2:
      updatedSchemas = permissionSchemas
      break
    default:
      updatedSchemas = []
  }
  return updatedSchemas
}
