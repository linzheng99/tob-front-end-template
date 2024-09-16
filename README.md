# Vue 3 + TypeScript + Vite
```sh
# 安装依赖
pnpm i
# 启动项目
pnpm dev
# 启动文档
pnpm dev:docs
```
----
## Include
* vue3
* ts
* vite
* vueRouter
* pinina
* axios
* lodash-es
* dayjs, date-fns
* js-cookie
* mock
* eslint(antfu)
- [ ] husky
* vueUse
* vitest
---
## Task List
- [ ] 全局loading 进度
### axios
- [x] axios封装
  - [x] get
  - [x] post
  - [x] put
  - [x] delete
  - [x] uploadFile
  - [ ] downloadFile
### router
- [x] router permission guard
- [x] basic router
- [x] router component patch
- [ ] add sort attribute to meta(尝试增加排序)
- [x] add keep-alive
- [x] 404 page
### Layout
common
- [x] ConfigDrawer
- [x] GlobalContent
#### base Layout
- [x] login page
  - [x] Form
  - [x] UI
- [x] sidebar
  - [X] hooks: useIconHeader
  - [x] helper: menuHelper
  - [x] collapse
- [x] header
  - [x] collapse
- [x] Tab
  - [x] Tab Context Menu
   - [x] reload page
   - [ ] close page
- [x] content
#### component layout
- [x] 自定义布局白板 (大屏 / 自定义路由菜单展示方式)
### theme
- [x] sidebar
  - [x] logo
- [x] header
- [x] tab -> ( div-> button)
- [x] naive ui theme
  - [x] common
- [x] colorMode: ( light / dark )
### Store
- [x] userStore
  - [x] token(cookie)
- [x] permission (router)
- [x] appStore
### components
- [x] svgIcon封装
- [x] echarts
- [x] Form
  - [ ] (是否存在优化: schema 配置项中的 component 改成组件导入的形式而不是 string, 可以配合 unplugin-auto-import 插件自动导入;)
- [x] Table
  - [ ] 增加自定义列操作
- [x] Descriptions
  - [ ] TODO (缺少类型提示;形式也不够优雅)
- [ ] 高德的地图
- [ ] MessageBox
- [ ] Upload (可写)
### vite config
- [x] proxy
### Vitest
- [x] ~~add test case~~
#### plugins
  - [x] mock
  - [x] vite-plugin-svg-icons
  - [x] unplugin-vue-components
  - [x] vite-plugin-html
  - [x] vite-plugin-imagemin
  - [ ] vite-plugin-pwa
----
### mock
- [x] login
  - [x] token
  - [x] userInfo
- [x] router
  - [x] ~~test router~~
---
### 系统管理页面
- [x] 账号管理
- [x] 角色管理
- [x] 权限配置
### 组件页面
- [x] FormGenerate
- [x] TableGenerate
- [x] Descriptions
- [ ] 地图组件（高德）
