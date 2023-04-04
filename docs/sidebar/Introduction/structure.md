# 目录说明

```
am-template
├─ build                              // vite 构建相关配置和插件
│  ├─ config                          // 构建打包配置
│  ├─ plugin                          // 构建插件
│  └─ utils                           // 构建相关工具函数
├─ docs                               // 项目文档
├─ mock                               // mock 数据
├─ public                             // 公共目录(文件夹里面的资源打包后会在根目录下)
├─ src
│  ├─ api                             // 接口api管理
│  ├─ assets                          // 静态资源管理
│     ├─ images                       // 存放png等图片
│     └─ svg-icon                     // 存放svg图片
│  ├─ components                      // 项目组件管理
│  ├─ enums                           // 项目枚举值管理
│  ├─ hooks                           // 组合式的函数hooks
│  ├─ layouts                         // 布局组件管理
│     ├─ default                      // 默认布局组件
│       ├─ Header                     // 头部
│       ├─ Tabs                       // 标签页
│       ├─ Sidebar                    // 侧边栏
│       └─ Content                    // 主体内容
│     └─ common                       // 布局公共组件管理
│  ├─ router                          // vue路由
│     ├─ guard                        // 路由守卫
│     └─ routes                       // 声明的固定路由
│  ├─ store                           // pinia 状态管理
│  ├─ styles                          // 全局样式
│  ├─ theme                           // 主题配置
│  ├─ typings                         // TS类型声明文件(*.d.ts)
│  ├─ utils                           // 全局工具函数
│     ├─ axios                        // axios
│       ├─ initAxios.ts               // 封装axios
│       └─ index.ts                   // 创建axios
│     ├─ helper                       // 辅助函数
│     └─ lib                          // 库
│       └─ echarts.ts                 // echarts相关
│  ├─ views                           // 页面
│  ├─ App.vue                         // vue文件入口
│  └─ main.ts                         // 项目入口ts文件
├─ .env                               // 环境文件
├─ .env-config.ts                     // 请求环境的配置文件
├─ .env.development                   // 开发环境文件
├─ .env.production                    // 生产环境文件
├─ package.json                       // npm依赖描述文件
├─ index.html
├─ README.md
└─ vite.config.ts                     // vite配置
```
