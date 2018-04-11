# React相关概念

## React起源
React 起源于 Facebook 的内部项目，2013年5月开源。

### 单页应用SPA
单页应用SPA（ Single Page Application ）

### 特点
>
 + **仅仅只是 UI**
 + **虚拟 DOM**：最大限度减少与 DOM 的交互（类似于使用 jQuery 操作 DOM）
 + **单向数据流**：很大程度减少了重复代码的使用
 + **组件化**：可组合（Composeable），可重用（Reusable），可维护（Maintainable）
 
### 生命周期
> 
 + Mounting：已插入真实 DOM
 + Updating：正在被重新渲染
 + Unmounting：已移出真实 DOM

## Redux

对于复杂的 SPA，状态（state）管理非常重要。state 可能包括：服务端的响应数据、本地对响应数据的缓存、本地创建的数据（比如，表单数据）以及一些 UI 的状态信息（比如，路由、选中的 tab、是否显示下拉列表、页码控制等等）。如果 state 变化不可预测，就会难于调试（state 不易重现，很难复现一些 bug）和不易于扩展（比如，优化更新渲染、服务端渲染、路由切换时获取数据等等）。

> state 为单一对象，使得 Redux 只需要维护一棵状态树，服务端很容易初始化状态，易于服务器渲染。state 只能通过 dispatch(action) 来触发更新，更新逻辑由 reducer 来执行。

![](media/15234360907740.jpg)
项目中看到的结构是：
```
├─store
├─actions
├─reducers
├─constants
├─helpers
├─components
├─app.js
├─favicon.ico
├─index.html
├─index.js
└─routes.js
```
获取 state 需要在组件中调用 connect 函数，可以自行定义需要获取的 state。
**connect 必须紧跟 component 的定义，不然会报错。**

## Router

为项目添加路由系统，使用了 react-router 来管理路由。在开发项目的时候，比较推荐的做法是使用路由去跳转页面，并且创建 store 的同时我们就把 router 加入其中，然后我们根据路由的变化去更新视图。

`path` 是跳转路径，`component` 是与路径相匹配的组件。

## Component

组件作为 React 渲染的一个基本组成，我们通常把它们分为两类，**容器型**和**展示型**。相较于**容器型**，**展示型**是通过**容器型**传递 props 来获取数据，而**容器型**可以直接从 store 中获取，处理并传递给下级组件。

# 参考资料
[React 入门实践]()


