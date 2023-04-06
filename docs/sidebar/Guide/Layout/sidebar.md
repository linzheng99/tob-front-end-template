# 侧边栏
`/src/layouts/default/Sidebar`
## logo
`/src/layouts/default/Sidebar/components/SiderLogo.vue`

根据侧边栏的展开状态展示 logo 或者 logo + name

## 菜单目录
`/src/layouts/default/Sidebar/components/SiderMenu.vue`

::: tip
菜单的显示与路由相关；路由通过接口动态获取；路由存储在`store`中

`/src/store/modules/permission.ts`
:::

思考的点在于 `数据结构的转换`

[Naive UI Menu组件](https://www.naiveui.com/zh-CN/dark/components/menu)

router的结构和目录组件的结构存在不同，需通过`辅助函数转换` 

`辅助函数 /src/utils/helper/menuHelper.ts`

hook：iconRender `/src/hooks/component/useIconRender.ts`
