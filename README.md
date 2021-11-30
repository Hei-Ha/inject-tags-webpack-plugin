# inject-tags-webpack-plugin

### 插件作用：
在 webpack 打包过程中，在入口文件中，向指定位置添加指定的内容

#### 安装
```shell
npm install -D inject-tags-webpack-plugin
or
yarn add inject-tags-webpack-plugin --dev
```
### 使用

和其它 `webpack` 插件使用方法一样
```javascript
// 在 body 标签开始的地方，添加 tag 内容
import InjectTagsWebpackPlugin from 'inject-tags-webpack-plugin'

export default {
    plugins: [
    new PluginTest({
          position: 'begin',
          tags: [
                {
                  tag: `<script>window.onload = function (){ console.log(This is inject-tags-webpack-plugin) }</script>`,
                  target: 'body'
                }
          ]
        })
    ]
}
```
