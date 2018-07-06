
[TOC]

# react包介绍

## react-redux和react-router-redux有什么区别

**react-redux**: 把react的state 集成到redux的store上，让redux来管理react组件的状态
**react-router-redux**：把react-router url的变化、参数等信息作为状态，交给redux的store管理，一般场景下直接使用react-router即可，因为url的这些状态比较独立，不一定非要交给redux来管理的。

## react-router

https://reacttraining.com/react-router/

## redux-router

https://github.com/acdlite/redux-router

**The README for react-router-redux has a useful picture included here:**
redux (store.routing)  ↔  react-router-redux  ↔  history (history.location)  ↔  react-router

**The picture of redux-router would look more like this:**
redux (store.router)  ↔  redux-router  ↔  react-router (via RouterContext)
## react-router-dom
https://github.com/ReactTraining/react-router
## react-redux
http://redux.js.org/docs/basics/UsageWithReact.html

# 项目搭建
create-react-app 自动创建的项目是基于 Webpack + ES6

## creact-react-app配合router和redux


## 利用create-react-app结合react-redux、react-router4构建单页应用
1.创建项目：
　　a.全局安装create-react-app: npm  install  create-react-app  -g
       b.执行create-react-app  my-projectName创建自己的项目，完成之后npm run  start即可启动项目。
2.引入组件库、插件配置等:
　　a.执行npm install  antd-mobile  --save安装组件库
　　b.执行npm install  babel-plugin-import  --save安装按需加载插件
　　c.执行npm  run  eject  弹出个性化配置，在package.json中的babel配置项添加按需加载插件配置:
![](media/15255107198686.jpg)
3.引入redux、react-redux
　　a.执行npm install  redux  --save安装redux 
　　b.执行npm install  redux-thunk安装thunk插件，使redux可处理异步操作
　　c.执行npm install  react-redux  --save安装react-redux简化参数传递
　　d.执行npm  install  babel-plugin-transform-decorators-legacy --save-dev安装此插件支持connect的装饰器写法
　
4.引入react-router4
　　a.执行npm  install  react-router-dom  --save


## 配置信息

### .prettierrc 格式化插件配置
https://prettier.io/playground/

格式化插件配置
```
{
  "printWidth": 120,               // 换行字符串阈值
  "tabWidth": 2,
  "semi": true,                    // 句末加分号
  "singleQuote": true,             // 用单引号
  "trailingComma": "none",         // 最后一个对象元素加逗号
  "bracketSpacing": true,          // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
  "jsxBracketSameLine": false,     // jsx > 是否另起一行
  "arrowParens": "avoid",          // (x) => {} 是否要有小括号
  "requirePragma": false,          // 是否要注释来决定是否格式化代码
  "proseWrap": "preserve"          // 是否要换行
}
```



# react-redux流程

redux 分为三大部分，store ， action ，reducer

## 目录结构组织
使用ducks方式组织redux目录结构
https://www.jianshu.com/p/324fd1c124ad
https://segmentfault.com/a/1190000010915166

## 流程
简化版的流程是：
一、Provider组件接受redux的store作为props，然后通过context往下传。
二、connect函数收到Provider传出的store，然后接受三个参数mapStateToProps，mapDispatchToProps和组件，并将state和actionCreator以props传入组件，这时组件就可以调用actionCreator函数来触发reducer函数返回新的state，connect监听到state变化调用setState更新组件并将新的state传入组件。
connect可以写的非常简洁，mapStateToProps，mapDispatchToProps只不过是传入的回调函数，connect函数在必要的时候会调用它们，名字不是固定的，甚至可以不写名字。
简化版本：connect(state => state, action)(Component);


![](media/15256167520246.jpg)
在Redux中，所有的数据（比如state）被保存在一个被称为store的容器中 → 在一个应用程序中只能有一个。store本质上是一个状态树，保存了所有对象的状态。任何UI组件都可以直接从store访问特定对象的状态。要通过本地或远程组件更改状态，需要分发一个action。分发在这里意味着将可执行信息发送到store。当一个store接收到一个action，它将把这个action代理给相关的reducer。reducer是一个纯函数，它可以查看之前的状态，执行一个action并且返回一个新的状态。

* 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

* State 是只读的，唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

* 为了描述 action 如何改变 state tree ，你需要编写 reducers。



### Store

store 是应用状态 state 的管理者，包含下列四个函数：

* getState() # 获取整个 state
* dispatch(action) # ※ 触发 state 改变的【唯一途径】※
* subscribe(listener) # 您可以理解成是 DOM 中的 addEventListener
* replaceReducer(nextReducer) # 一般在 Webpack Code-Splitting 按需加载的时候用



### Action

Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。

[Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)


#### 定义

业界提出以一种标准 action，[叫做 Flux Standard Action](https://github.com/redux-utilities/flux-standard-action)。该标准下的action除了type属性之外，只允许多加（不是必须包含）这三个属性：payload，error，meta。
```
let action = {
    type: 'ACTION_NAME',//大写字母+下划线 
    payload: <bool | number | string | object>, //action的负载，可以是数据或 error 对象
    error: <bool>, // 指明该action是否是一个以 error 为负载的action
    meta: <string> // action元数据， 包含解释该action含义的信息
}
```



### Reducer



# 利用create-react-app，一步一步搭框架

## Quick Start

### Prerequisites

Node.js v8.11 or later.

#### 使用的工具及依赖库

* 使用官方脚手架create-react-app，本项目开发时最新1.5.2，[更多前往](https://github.com/facebook/create-react-app)
* 使用UI组件库[antd 3.5.1](https://ant.design/docs/react/introduce-cn)
* 依赖库的安装使用react官方推荐的yarn,本项目开发时最新1.5.1，yarn的安装和使用与npm基本类似，[更多前往](https://yarnpkg.com/)
 yarn常用命令

```
 yarn add packagenameA // 安装packagenameA，安装 运行环境的依赖

 yarn install //根据package.json安装全部的依赖

 yarn add --dev packagenameB //安装开发环境的依赖

 yarn remove packagenameC //卸载指定包packagenameC
```

**依赖库**

状态管理redux react-redux redux-thunk、路由管理react-router-dom react-router-redux@next history、superagent请求后端接口ajax库

```
yarn add redux react-redux redux-thunk superagent react-router-dom react-router-redux@next history
```

工具库lodash、时间库moment moment-timezone、ui组件库antd

```
yarn add lodash moment moment-timezone antd
```

开发环境的依赖安装
 ```
 yarn add babel-plugin-import less less-loader --dev
 yarn add redux-logger redux-devtools-extension --dev
 ```
babel-plugin-import: 按需加载antd组件，避免全部加载造成性能问题，主要开发的时候使用
less less-loader: less文件用到的
redux-logger redux-devtools-extension: 开发时方便调试使用，[更多前往](https://github.com/yellowfrogCN/reduxDevTools/blob/master/README.md)

#### webpack配置

通过`yarn run eject`命令把create-react-app所有内建的配置暴露出来

**配置babel-plugin-import和less、less-loader**

1、添加antd之后，装babel-plugin-import插件，实现按需加载提高性能，但是需要对webpack.config.dev.js做修改：

`["import", { "libraryName": "antd", "style": true }]`

 ```
 //package.json 文件
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", { "libraryName": "antd", "style": true }]
    ]
  },
 ```

2、添加less,less-loader之后，同样需要做修改
使用create-react-app 创建的项目默认不支持less，以下增加less配置的步骤

修改`webpack`配置
修改 `webpack.config.dev.js` 和 `webpack.config-prod.js` 配置文件

改动1：

`/\.css$/ 改为 /\.(css|less)$/`, 修改后如下：

```
exclude: [
  /\.html$/,
  /\.(js|jsx)$/,
  /\.(css|less)$/,
  /\.json$/,
  /\.bmp$/,
  /\.gif$/,
  /\.jpe?g$/,
  /\.png$/,
],
```

改动2：

test: /\.css$/ 改为 /\.(css|less)$/
test: /\.css$/ 的 use 数组配置增加 less-loader

```
{
  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {},
    {
      loader: require.resolve('less-loader'), // compiles Less to CSS
      options: { javascriptEnabled: true }
    }
  ],
},

```


**如果运行过程中发现有报less相关的错误，建议把（css|less）拆开两个规则**


3、自动格式化代码配置 formatting-code-automatically

```
yarn add husky lint-staged prettier --dev
```

* husky makes it easy to use githooks as if they are npm scripts.
* lint-staged allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
* prettier is the JavaScript formatter we will run before commits.

添加完之后，package.json做如下配置

 ```
 "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom",
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,jsx,json,css}": [
      "prettier --write",
      "git add"
    ]
  },

 ```
????格式化插件配置 参数requirePragma设为true，避免数组和（）换行时合并


[更多前往](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically)


### Download Codes

```
git clone
```

### Code organization


```

├── config                          # 项目配置信息，环境配置，路径配置，webpack配置等
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js      # webpack开发配置信息
│   ├── webpack.config.prod.js     # webpack生产配置信息
│   └── webpackDevServer.config.js
├── scripts
│   ├── build.js                   # 构建配置
│   ├── start.js                   # 开发启动配置
│   └── test.js                    # 测试用例配置
├── public
│   ├── favicon.ico
│   ├── index.html                 # 应用入口HTML 入口模板
│   └── manifest.json
├── src
│   ├── assets                     # 项目静态资源image,fonts,icons
│   │   └── logo.svg
│   ├── common                     # 应用公用配置，如导航信息,菜单项
│   │   ├── Menu.js                # 菜单配置
│   │   └── Routes.js              # 路由配置
│   ├── components                 # 业务通用组件
│   │   ├── Breadcrumb             # 面包屑
│   │   ├── LayoutContent          # 主体区域内容
│   │   ├── LayoutFooter           # 主体区域底部
│   │   ├── LayoutHeader           # 主体区域顶部
│   │   └── SideBar                # 侧边栏
│   ├── pages                      # 业务页面入口和常用模板
│   │   ├── App                    # 组件主入口文件
│   │   ├── Authorized             # 权限组件
│   │   ├── Home                   # 主体布局组件
│   │   └── Login                  # 登录组件
│   ├── redux                      # 状态管理相关
│   │   ├── Modules                # 把actionTypes, actions, reducers写在一个文件中，文件名与组件名保持一致
│   │   └── Store.js               # 全局唯一store
│   ├── services                   # 后台接口服务
│   │   └── request.js             # 后台请求
│   ├── views                      # 当多个项目时，放具体项目的内容，项目文件夹下按照views同级目录进行自定义
│   │   └── security
│   ├── index.css
│   ├── index.js                   # 整个项目的入口文件
│   └── registerServiceWorker.js   # 生产环境下，缓存资源到本地，提升访问速度
├── README.md
├── intro.md
├── package.json
├── yarn-error.log
└── yarn.lock

```

### How to run

```bash
cd fe
npm install
npm start         # 访问 http://localhost:8000
```

### Build
```bash
npm run build
```

## 兼容性

现代浏览器及 IE11

## 使用文档

项目是基于React/dva/antd，更多信息请参考

* [Ant Design Pro](http://pro.ant.design/docs/getting-started)
* [dva](https://github.com/dvajs/dva)




https://yq.aliyun.com/articles/565630?spm=a2c4e.11163080.searchblog.99.66082ec1RsZL1G


https://yq.aliyun.com/articles/184687?spm=a2c4e.11163080.searchblog.9.464e2ec1I1Ms1I

