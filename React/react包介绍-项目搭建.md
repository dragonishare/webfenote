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

## react-redux
http://redux.js.org/docs/basics/UsageWithReact.html

# 项目搭建

## creact-react-app整合router和redux


