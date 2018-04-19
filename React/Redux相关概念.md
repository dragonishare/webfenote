# Redux相关概念

## Redux起源

React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。有两个方面，它没涉及。
>
 * 代码结构
 * 组件之间的通信

对于大型的复杂应用来说，这两方面恰恰是最关键的。因此，只用 React 没法写大型应用。

为了解决这个问题，2014年 Facebook 提出了 Flux 架构的概念，引发了很多的实现。2015年，Redux 出现，将 Flux 与函数式编程结合一起，很短时间内就成为了最热门的前端架构。

## 预备知识
需要懂 React

Redux 有很好的[文档](https://redux.js.org/)，还有配套的小视频（[前30集](https://egghead.io/courses/getting-started-with-redux)，后30集）

## 设计思想

> 
（1）Web 应用是一个状态机，视图与状态是一一对应的。
（2）所有的状态，保存在一个对象里面。

## 基本概念和 API



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

![](media/15235004676150.jpg)
图上可以看出，store，state，reducer，action其实最后都只有一个，我们只是为了代码逻辑将其分为多个，层次分明，便于开发和阅读。

[一幅图明白React-Redux的原理](https://juejin.im/post/5acdbe8f51882548fe4a7af1)

## 参考资料
[Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)


