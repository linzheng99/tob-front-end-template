import{_ as s,o as n,c as a,d as p}from"./app.ac30bc2a.js";const d=JSON.parse('{"title":"目录说明","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/Introduction/structure.md"}'),l={name:"sidebar/Introduction/structure.md"},e=p(`<h1 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">am-template</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ build                              // vite 构建相关配置和插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ config                          // 构建打包配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ plugin                          // 构建插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ utils                           // 构建相关工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ docs                               // 项目文档</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ mock                               // mock 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public                             // 公共目录(文件夹里面的资源打包后会在根目录下)</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ api                             // 接口api管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ assets                          // 静态资源管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ images                       // 存放png等图片</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ svg-icon                     // 存放svg图片</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components                      // 项目组件管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ enums                           // 项目枚举值管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ hooks                           // 组合式的函数hooks</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ layouts                         // 布局组件管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ default                      // 默认布局组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├─ Header                     // 头部</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├─ Tabs                       // 标签页</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├─ Sidebar                    // 侧边栏</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └─ Content                    // 主体内容</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ common                       // 布局公共组件管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ router                          // vue路由</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ guard                        // 路由守卫</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ routes                       // 声明的固定路由</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ store                           // pinia 状态管理</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ styles                          // 全局样式</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ theme                           // 主题配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ typings                         // TS类型声明文件(*.d.ts)</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ utils                           // 全局工具函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ axios                        // axios</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├─ initAxios.ts               // 封装axios</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └─ index.ts                   // 创建axios</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ helper                       // 辅助函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ lib                          // 库</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └─ echarts.ts                 // echarts相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ views                           // 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ App.vue                         // vue文件入口</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ main.ts                         // 项目入口ts文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env                               // 环境文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env-config.ts                     // 请求环境的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env.development                   // 开发环境文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .env.production                    // 生产环境文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json                       // npm依赖描述文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ vite.config.ts                     // vite配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[e];function c(t,i,A,C,r,y){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{d as __pageData,u as default};
