# 主题设置
[Naive UI](https://www.naiveui.com/zh-CN/dark)
## NaiveUI 
根据 `naive ui` 官网所说主题可调，只需要一个样式覆盖的对象即可
```html
<!-- 详细内容跳转到App.vue文件 -->
<n-config-provider :theme-overrides="themeOverrides">
  <app/>
</n-config-provider>
```
```ts
import { GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {}
```

## ThemeConfig
::: tip
本身 naive ui 的样式就是可配置，所性把项目中均可配置项提取到同一个文件内 `/src/theme/theme.ts`
:::
### 项目中`layout文件夹`内的组件样式均可配置
  * Header的高
  * sidebar的宽
  * tab的高宽
  * ...
### 主题颜色更改流程`Color`
  对于 color 存储的初步思想 `设置默认 -> 修改 -> 监听`

  对于 color 其实分2个 1.`themeColor` 2. `Naive UI Color`
  
   1. 设置 default color 并存在本地（localStorage）
   2. 修改 color
   3. 监听 color 更改，替换本地
   4. 关闭页面时替换修改后的数据（ui样式、布局样式）
   
  使用 pinia 对数据的存储和获取 `/src/store/modules/theme.ts`
  
  主要的方法实现`/src/utils/helper/themeHelper.ts`

  通过全局的监听模式对数据`/src/store/subscribe/theme.ts`

  监听页面关闭`/src/utils/cache/events.ts`
  
  
