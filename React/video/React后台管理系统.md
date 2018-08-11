## 简介
项目整体架构
本项目是基于React的后台管理系统
后台项目主要涉及三大部分**核心库**、**中间件**和**公共封装模块**

## 核心库

### React

**React特点**

* 声明式
* 组件化
* Virtual DOM高效的DOM Diff算法
* 单向数据流

**生态介绍**

* Vue生态：Vue + Vue Router + Vuex + Axios + Babel + Webpack
* React生态：React + React Router + Redux + Axios + Babel + Webpack

**React脚手架、Yarn介绍**

* React官方脚手架 [create-react-app](https://github.com/facebook/create-react-app)
* [Yarn](https://yarnpkg.com) - 新一代依赖包管理工具
  - 快速、可靠、安全的依赖管理工具
  - 输出更简洁
  - 更语义化

yarn常用命令

[yarn global](https://yarnpkg.com/en/docs/cli/global)

```
 yarn init //初始化生成package.json
 
 yarn install //根据package.json安装全部的依赖
 
 yarn global add packagenameA //全局安装packagenameA，global不能简写

 yarn add packagenameA // 安装packagenameA，安装 运行环境的依赖,同时会更新package.json

 yarn add --dev packagenameB //安装开发环境的依赖,同时会更新package.json

 yarn remove packagenameC //卸载指定包packagenameC,同时会更新package.json
```

npm常用命令

```
npm init //初始化生成package.json

npm install //根据package.json安装全部的依赖

npm install packagenameA -g //安装到全局，-g或者-global

npm install packagenameA //安装到本地
npm install packagenameA --save //安装到本地，同时会更新package.json
npm install packagenameA --save-dev //安装到本地，同时会更新package.json

npm uninstall packagenameA //卸载本地安装包
npm uninstall packagenameA --save //卸载本地安装包，同时会更新package.json
npm uninstall packagenameA --save-dev //卸载本地安装包，同时会更新package.json
```

**React生命周期**



### React Router
### Redux

## 中间件

### Axios
### antd
### Echarts

## 公共封装模块

### 权限管理、菜单配置
### 消息通知
### API封装
### 错误拦截
### loading、分页封装
### 日期、金额、手机号、邮箱等工具库封装
### 表格、表单封装
### 主页面架构设计、Header、Footer

## Mock及联调







