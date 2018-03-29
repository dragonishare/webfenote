# React项目实战：环境搭建

## 技术栈

需要有相关的技术基础，可以到下方给出的链接进行深入学习。项目实战用到的主要框架和插件有：

* webpack：预编译模块打包工具。 [官方文档](https://webpack.js.org/) - [中文翻译](https://doc.webpack-china.org/)
* React：构建用户界面的JavaScript库。 [官方文档](https://reactjs.org/) - [中文翻译](https://doc.react-china.org/)
* Redux：管理整个应用的数据流。 [官方文档](https://redux.js.org/) - [中文翻译](http://www.redux.org.cn/)
* react-router：React应用路由库。 [官方文档](https://github.com/ReactTraining/react-router)
* styled-components：React中的CSS最佳实践。 [官方文档](https://www.styled-components.com/)
* isomorphic-fetch：fetch兼容库。 [官方文档](https://github.com/matthew-andrews/isomorphic-fetch)
* JRoll2：移动前端滑动插件。 [官方文档](http://www.chjtx.com/JRoll/)
* ECharts：基于html5 Canvas图表库。 [官方文档](http://echarts.baidu.com/)

建议学习时以官方文档为准，中文翻译或者第三方作者的教程可以帮助你理清思路；

## 环境搭建
### Node.js安装

官网地址: [node.js](https://nodejs.org/zh-cn/)

### npm部署

npm更新并部署至全局

```
# -g 全局安装
npm install npm  -g

#【可选】设置淘宝镜像。只是把registry对应的仓库地址进行替换
npm config set registry https://registry.npm.taobao.org
```

npm常用命令：
```
npm init    #引导创建package.json文件
npm install ***    #本地安装；会在当前目录生成node_modules文件夹，并在此安装node模块
npm install *** -g    #全局安装；会在当前用户的，\npm\node_modules安装
npm install *** --save    #运行时依赖的模块；自动把模块和版本号添加到package.json文件dependencies部分
npm install *** --save-dev    #开发时依赖的模块；自动把模块和版本号添加到package.json文件devdependencies部分
npm update ***    #更新node模块
npm uninstall ***    #卸载node模块
```

### 创建package.json文件

在项目的根目录，终端运行如下代码：
```
npm init -y    #跳过提问阶段，直接生成一个新的 package.json 文件。
```

### 安装模块

```
npm install --save react react-dom redux react-redux redux-logger redux-thunk react-router react-router-redux@next history styled-components isomorphic-fetch jroll jroll-pulldown jroll-infinite echarts babel-polyfill

npm install --save-dev webpack webpack-dev-server webpack-merge clean-webpack-plugin babel-loader babel-core babel-preset-env babel-preset-react css-loader style-loader file-loader url-loader html-webpack-plugin uglifyjs-webpack-plugin
```

模块简要说明：

```
react react-dom：React依赖
redux react-redux redux-logger redux-thunk：Redux依赖
react-router react-router-redux history：react-router依赖
styled-components：React中的CSS的实现依赖
isomorphic-fetch：fetch兼容库
jroll jroll-pulldown jroll-infinite：JRoll插件依赖
echarts：基于html5 Canvas图表库
babel-polyfill：用于实现浏览器不支持原生功能的代码
webpack：预编译模块打包
webpack-dev-server：实时重新加载的Web服务器
webpack-merge：webpack配置分离插件
clean-webpack-plugin：在building之前删除你以前build过的文件
babel-loader babel-core babel-preset-env babel-preset-react：转码器babel依赖
css-loader style-loader file-loader url-loader：各格式文件打包依赖
html-webpack-plugin：生成HTML5文件的插件
uglifyjs-webpack-plugin：代码压缩插件
```

### 配置模块

在项目根目录生成.babelrc文件，并写入如下数据

```
{
    "presets": ["env","react"]
}
```

配置package.json：运行npm run build启动编译模式和npm run start热更新模式;

```
"scripts": {
    "start": "webpack-dev-server --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
}
```

根目录新建webpack配置文件：webpack.common.js、webpack.dev.js、webpack.prod.js;

**webpack.common.js**（共用配置）

```
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],    //项目的起点入口
    output: {    //项目输出配置
        path: path.resolve(__dirname, 'build'),    //文件的输出目录 
        filename: 'static/js/[name].[hash:5].js'
    },
    module: {    //模块加载
        rules: [
            {
                test: /\.css$/,    //匹配规则
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,    //小于8192B的文件转为base64文件
                        name: 'static/images/[name].[hash:5].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [    //插件配置
        new CleanWebpackPlugin(['build']),    //清空编译输出文件夹
        new HtmlWebpackPlugin({
            title: 'Cinglong\'s Demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'templates', 'index.html')
        }),    //生成Html5文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons'
        }),    //共用代码打包
    ]
};
```

**webpack.dev.js**（开发配置）

```
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',    //代码关联显示方式
    devServer: {
        historyApiFallback:true,    //文件重定向，和react-router相关
        hot: true,    //开启模块热替换
        port: 80,    //服务器端口
        host: "192.168.23.101",    //服务器域名
        open: true    //自动打开浏览器标签
    },
    plugins: [
        new webpack.NamedModulesPlugin(),    //显示模块的相对路径
        new webpack.HotModuleReplacementPlugin()    //加载热替换插件
    ]
});
```

**webpack.prod.js**（预编译配置）

```
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()    //代码压缩
    ]
});
```

### 项目目录

```
 react-webapp-demo
  |- /node_modules    //模块安装目录
  |- /src    //代码目录
    |- /container    //容器组件
    |- /presentational    //展示组件
      |- /images    //图片目录
    |- /reducers    //reducers操作
    |- /utils    //其他
    |- index.js    //项目入口
  |- /templates    //模板目录
  |- .babelrc    //babel编译配置
  |- package.json    //项目目录配置
  |- package-lock.json    //模块信息（自动生成）
  |- webpack.common.js    //webpack共用配置
  |- webpack.dev.js    //webpack开发配置
  |- webpack.prod.js    //webpack编译配置
```
  
## 参考资料

* [React项目实战：环境搭建](https://segmentfault.com/a/1190000012164495)
  

