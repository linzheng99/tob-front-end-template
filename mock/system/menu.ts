import { resultSuccess } from '../_util'

// const testRouter = {
//   path: '/testRouter',
//   name: 'TestRouter',
//   component: 'LAYOUT',
//   meta: {
//     title: '测试路由',
//     icon: 'mdi-account',
//   },
//   redirect: '/testRouter/listOne',
//   children: [
//     {
//       path: '/testRouter/listOne',
//       name: 'listOne',
//       meta: {
//         title: 'listOne',
//         icon: 'mdi-account',
//       },
//       redirect: '/testRouter/listOne/testOne',
//       children: [
//         {
//           path: '/testRouter/listOne/testOne',
//           name: 'listOne_item',
//           component: '/testRouter/listOne.vue',
//           meta: {
//             title: 'listOne_item',
//           },
//         },
//       ],
//     },
//     {
//       path: '/testRouter/listTwo',
//       name: 'listTwo',
//       component: '/testRouter/listTwo.vue',
//       meta: {
//         title: 'listTwo',
//         localIcon: 'logo',
//       },
//     },
//     {
//       path: '/testRouter/listThree',
//       name: 'listThree',
//       component: '/testRouter/listThree/index.vue',
//       meta: {
//         title: 'listThree',
//         hide: false,
//       },
//     },
//   ],
// }

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
        title: '表格',
        icon: 'tabler:article',
      },
    },
    {
      path: '/components/form',
      name: 'Form',
      component: '/components/form/index.vue',
      meta: {
        title: '表单',
        icon: 'fluent:form-48-filled',
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
  ],
}
export default [
  {
    url: '/basic-api/getMenuList',
    methods: 'get',
    response: () => {
      return resultSuccess({
        menus: [systemRouter, componentsRouter],
      })
    },
  },
]
