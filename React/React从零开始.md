## 项目基本配置

1. 从`npm init`生产`package.json`文件
2. 安装各种需要的依赖:
 * `npm install --save react` - 安装React
 * `npm install --save react-dom` 安装React Dom,这个包是用来处理virtual DOM。这里提一下用React Native的话，这里就是安装react-native
 * `npm install --save-dev webpack` - 安装Webpack, 现在最流行的模块打包工具
 * `npm install --save-dev webpack-dev-server` - webpack官网出的一个小型express服务器，主要特性是支持热加载
 * `npm install --save-dev babel-core` - 安装Babel, 可以把ES6转换为ES5，注意Babel最新的V6版本分为babel-cli和babel-core两个模块，这里只需要用babel-cor即可。
       + 安装其他的babel依赖:
    	+ `npm install --save babel-polyfill` - Babel includes a polyfill that includes a custom regenerator runtime and core.js. This will emulate a full ES6 environment
       + `npm install --save-dev babel-loader` - webpack中需要用到的loader
       + `npm install --save babel-runtime` - Babel transform runtime 插件的依赖.
       + `npm install --save-dev babel-plugin-transform-runtime` - Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals.
       + `npm install --save-dev babel-preset-es2015` - Babel preset for all es2015 plugins.
       + ``npm install --save-dev babel-preset-react` - Strip flow types and transform JSX into createElement calls
       + `npm install --save-dev babel-preset-stage-2` - All you need to use stage 2 (and greater) plugins (experimental javascript)

3. 打开 package.json 然后添加下面的scripts:

```
"scripts": {
  "start": "webpack-dev-server --hot --inline --colors --content-base ./build",
  "build": "webpack --progress --colors"
}
```

4. webpack的配置文件 `webpack.config.js`

```
var webpack = require('webpack'); module.exports = { entry: './src/app.js', output: { path: __dirname + '/build', filename: "bundle.js" }, module: { rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { plugins: ['transform-runtime'], presets: ['es2015', 'react', 'stage-2'] } }, { test: /\.css$/, loader: "style-loader!css-loader" }] } };

```

## 组件

1. 每一个react类组件都有一个render方法
2. 每个render方法都会返回一段jsx代码




