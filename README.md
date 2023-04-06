# Vue 3 + TypeScript + Vite
```sh
# 拉取代码
git clone git@github.com:linzhengGithub/am-template.git
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
* js-cookie
* mock
* eslint
* prettier
* vueUse
---
## TODO fixhot
Layout tag scroll-x css
----
## Task List
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
### base Layout
- [x] login page
  - [x] Form
  - [x] UI
- [x] sidebar
  - [ ] 面板（Menu panel）
  - [X] hooks: useIconHeader
  - [x] helper: menuHelper
  - [x] collapse
- [x] header
  - [x] collapse
- [x] Tab
- [x] content
- [ ] common
  - [x] ConfigDrawer
    - [x] themeColor
### theme
- [x] sidebar
  - [x] logo
- [ ] header
- [ ] tab -> ( div-> button)
- [x] naive ui theme
  - [x] common
### Store
- [x] userStore
  - [x] token(cookie)
- [x] permission (router)
- [x] appStore
### components
- [x] svgIcon封装
- [x] echarts
- [ ] map
- [ ] messageBox
### vite config
- [x] proxy 
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
- [ ] 账号管理
- [ ] 角色管理
- [ ] 权限配置
### 组件页面
- [ ] FormGenerate
- [ ] TableGenerate
- [ ] 地图组件（高德）
