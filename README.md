## inject-tags-webpack-plugin

*向 webpack 入口文件（模版文件）添加指定标签*

#### Configuration
1、安装
```shell
npm install -D inject-tags-webpack-plugin
or
yarn add inject-tags-webpack-plugin --dev
```
2、配置
```javascript
import InjectTagsWebpackPlugin from 'inject-tags-webpack-plugin'

export default {
    plugins: [
    new PluginTest({
          position: 'before',
          tags: [
                {
                  tag: `<script>window.onload = function (){ console.log(inject-tags-webpack-plugin) }</script>`,
                  target: '</body>'
                }
          ]
        })
    ]
}
```
