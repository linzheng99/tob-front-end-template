import { resultSuccess } from '../_util'

const systemRouter = {
  path: '/system',
  name: 'System',
  component: 'LAYOUT',
  meta: {
    title: '系统配置',
    icon: 'material-symbols:settings-rounded',
  },
  redirect: '/system/accounts',
  children: [
    {
      path: '/system/accounts',
      name: 'Accounts',
      component: '/system/accounts/index.vue',
      meta: {
        title: '账号管理',
        icon: 'mdi:account-group',
      },
    },
    {
      path: '/system/roles',
      name: 'Roles',
      component: '/system/roles/index.vue',
      meta: {
        title: '角色管理',
        icon: 'eos-icons:role-binding',
      },
    },
    {
      path: '/system/auth',
      name: 'Auth',
      component: '/system/auth/index.vue',
      meta: {
        title: '权限管理',
        icon: 'dashicons:networking',
      },
    },
  ],
}

const componentsRouter = {
  path: '/components',
  name: 'Components',
  component: 'LAYOUT',
  meta: {
    title: '组件',
    icon: 'material-symbols:settings-rounded',
  },
  redirect: '/components/table',
  children: [
    {
      path: '/components/table',
      name: 'Table',
      component: '/components/table/index.vue',
      meta: {
        title: '表格Table',
        icon: 'tabler:article',
      },
    },
    {
      path: '/components/form',
      name: 'Form',
      component: '/components/form/index.vue',
      meta: {
        title: '表单Form',
        icon: 'fluent:form-48-filled',
      },
    },
    {
      path: '/components/modal',
      name: 'Modal',
      component: '/components/modal/index.vue',
      meta: {
        title: '模态框Modal',
        icon: 'vaadin:modal-list',
      },
    },
    {
      path: '/components/descriptions',
      name: 'Descriptions',
      component: '/components/descriptions/index.vue',
      meta: {
        title: '描述列表Descriptions',
        icon: 'fa-regular:file-alt',
      },
    },
    {
      path: '/components/echarts',
      name: 'Echarts',
      component: '/components/echarts/index.vue',
      meta: {
        title: 'echarts',
        icon: 'simple-icons:apacheecharts',
      },
    },
    {
      path: '/components/loadingEmpty',
      name: 'LoadingEmpty',
      component: '/components/LoadingEmptyWrapper/index.vue',
      meta: {
        title: 'loadingEmpty',
        icon: 'simple-icons:apacheecharts',
      },
    },
  ],
}

const customLayout = {
  path: '/bigScreen',
  name: 'CustomLayout',
  component: 'CUSTOMLAYOUT',
  meta: {
    title: '大屏',
    icon: 'gg:screen',
  },
  redirect: '/bigScreen/whitePage',
  children: [
    {
      path: '/bigScreen/whitePage',
      name: 'WhitePage',
      component: '/bigScreen/whitePage/index.vue',
      meta: {
        title: 'Custom布局',
        icon: 'ph:layout-bold',
      },
    },
  ],
}

export default [
  {
    url: '/basic-api/getMenuList',
    methods: 'get',
    response: () => {
      return resultSuccess({
        menus: [componentsRouter, systemRouter, customLayout],
      })
    },
  },
]

/**
 * 单个路由
 */
// const customLayout = {
//   path: '/bigScreen/whitePage',
//   name: 'WhitePage',
//   component: '/bigScreen/whitePage/index.vue',
//   meta: {
//     title: '自定义路由布局',
//   },
// }
