[toc]

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



