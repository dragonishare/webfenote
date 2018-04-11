# React相关概念
React 是一个采用声明式，高效而且灵活的用来构建用户界面的框架。

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

### 基本概念

#### JSX 简介
一种 JavaScript 的语法扩展。 推荐在 React 中**使用 JSX 来描述用户界面**。JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。

**JSX 用来声明 React 当中的元素。**

可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的**表达式要包含在大括号里**。

JSX 本身其实也是一种表达式，在编译之后呢，JSX 其实会被转化为普通的 JavaScript 对象，
这也就意味着，其实可以在 if 或者 for 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以

>
**警告**:
因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。
例如，class 变成了 className，而 tabindex 则对应着 tabIndex。

#### React 元素

**React应用的构成模块：元素和组件**
**React 元素**：用来描述你在屏幕上看到的内容。React 当中的元素事实上是普通的对象，**React DOM** 可以确保 **浏览器 DOM** 的数据内容与 **React 元素**保持一致。

要将React元素渲染到根DOM节点中，我们通过把它们都传递给** ReactDOM.render() **的方法来将其渲染到页面上：
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

React 组件使用一个名为** render() **的方法， 接收数据作为输入，输出页面中对应展示的内容。 

React 元素都是**immutable 不可变的**。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，它代表应用界面在某一时间点的样子。

#### 组件

组件从概念上看就像是函数，它可以接收任意的输入值（称之为“**props**”），并返回一个需要在页面上展示的React元素。





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

在实际应用中会发现，定义一个容器型组件负责处理数据，然后分发给下级展示型组件，当需要更新数据时，那么容器型组件发生变化会引起下级展示型组件的变化，这样就对我们业务上造成了一定的困扰（在不需要更新的部分组件上也发生了更新）。因此，我们选择在需要获取数据的组件中使用 `connect`，这样则会方便很多（感觉有些违反规则）。



# 参考资料
[React 入门实践](https://segmentfault.com/a/1190000004570818)
[一看就懂的ReactJs入门教程（精华版）](http://www.cocoachina.com/webapp/20150721/12692.html)
[React中文文档](https://doc.react-china.org/)


