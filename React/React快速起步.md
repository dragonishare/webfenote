# React快速起步

**官网脚手架 `create-react-app`**
通过Facebook发布的create-react-app项目可帮助我们快速启动并运行我们系统上的React应用，无需自定义配置我们的一部分

在我们的系统上安装了 node 后，我们可以**安装create-react-app**包：
`npm install --global create-react-app`

使用全局方式安装的create-react-app ，我们可以在终端的任何地方使用create-react-app 命令。

**1、假设我们需要创建一个demo-app项目**
方式一：
`create-react-app demo-app`

yarn 在更新之后，集成了create, 通过yarn create，可以快速启动一个项目。
方式二：
`yarn create react-app demo-app`
稍等片刻，yarn 会为我们创建一个目录demo-app，拉取依赖，wepack 的配置通过 yarn 来调用，可以看到目录结构很干净
```
.
├── README.md
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
└── yarn.lock
```

**2、启动项目，进入src目录进行开发**
方式一：
`npm start`

方式二：
` yarn start`

这时会启动一个默认端口为3000的页面，如果端口冲突，会提示你是否选用另一个端口

**3、开发完成后需要发布时，进行编译**
方式一：
`npm run build`

方式二：
运行yarn build进行编译，发布build目录

三部曲完成，中间省略了非常多配置问题，给需要快速构建项目带来了极大的便利性。当然，默认配置也许不能够满足所有需求，`create-react-app`也提供了 抛出所有配置项的`yarn eject`供给开发者使用，如果需要到调整 webpack 的内容，就需要使用到这个命令。不过这样也会导致不能再回滚。官方的更新比较快，如果不是必要的情况建议直接使用内置的行为。

### 配合 Express 构建 server 端应用

1、首先创建一个叫server的文件夹和初始化 package.json文件：

`mkdir server && cd server && yarn init` 
2、增加依赖包

`yarn add express body-parser nodemon babel-cli babel-preset-es2015` 
主要用到express, body-parser, nodemon（检测node.js 改动并自动重启，适用于开发阶段）,babel-cli和babel-preset-es2015(以便使用 es6开发)

使用nodemon在开发阶段检测node.js 改动并自动重启

create-react-app会启动一个静态资源服务器，如果需要同时进行 server 端，在这里引入concurrently这个包来执行两条命令：
`yarn add concurrently`

package.json:
```
"scripts": {
    "react-start": "react-scripts start",
    "start": "concurrently 'yarn react-start' 'cd server && yarn start'",
    "react-build": "react-scripts build",
    "build": "concurrently 'yarn react-build' 'cd server && yarn build'",
},  
```
  
这样，我们只要执行`yarn start`会同步启动 webpack 以及 server文件夹下的 nodeman.

**Proxy**
如果我们在前端页面用使用fetch(/api/data)这样 请求，默认是会发送到`create-react-app `启动的 `localhost:3000/api/data`去的，无法达到目的。为了指向 server 端，需要指定proxy:

假设 server 端 express 启动了5000端口，则需要在package.json中增加：

`"proxy": "http://127.0.0.1:5000"`

这时当你使用`fetch(/api/data)`请求，则会指向到`localhost:5000/api/data`

## 参考资料

[使用 create-react-app配合express快速构建React开发环境](https://segmentfault.com/a/1190000009857965)

