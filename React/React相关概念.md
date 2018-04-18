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

书写 JSX 的时候一般都会带上换行和缩进，这样可以增强代码的可读性。与此同时，同样**推荐在 JSX 代码的外面扩上一个小括号**，这样可以防止 分号自动插入 的 bug。

可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的**表达式要包含在大括号里**。

JSX 本身其实也是一种表达式，在编译之后呢，JSX 其实会被转化为普通的 JavaScript 对象，
这也就意味着，其实可以在 if 或者 for 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以

>
**警告:**
因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 **React DOM** 使用 **camelCase 小驼峰命名 来定义属性的名称**，而不是使用 HTML 的属性名称。
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

组件从概念上看就像是函数，它可以接收任意的输入值（称之为“**props**”），并返回一个需要在页面上展示的React元素。**组件的返回值只能有一个根元素**。
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
要用一个`<div>`来包裹所有`<Welcome />`元素

**函数定义/类定义组件**
定义一个组件最简单的方式是使用JavaScript函数：
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
该函数是一个有效的React组件，它接收一个单一的“props”对象并返回了一个React元素。

也可以使用 ES6 class 来定义一个组件:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
上面两个组件在React中是相同的。

>
**警告:**
**组件名称必须以大写字母开头**。
例如，`<div /> `表示一个DOM标签，但` <Welcome /> `表示一个组件，并且在使用该组件时你必须定义或引入它。

**Props的只读性**

无论是使用函数或是类来声明一个组件，它决不能修改它自己的props。
**所有的React组件必须像纯函数那样使用它们的props。**

#### State & 生命周期

定义为类的组件有一些特性。局部状态就是如此：一个功能只适用于类。

状态与属性十分相似，但是状态是私有的，完全受控于当前组件。

在组件类上声明特殊的方法，当组件挂载或卸载时，来运行一些代码：这些方法被称作生命周期钩子。

当组件输出到 DOM 后会执行` componentDidMount() `钩子

当组件被移除时，会执行 `componentWillUnmount()`钩子

**正确地使用状态**
1、不要直接更新状态
```
// Wrong 此代码不会重新渲染组件
this.state.comment = 'Hello';

// Correct 应当使用 setState()
this.setState({comment: 'Hello'});
```
**构造函数是唯一能够初始化` this.state `的地方。**

2、状态更新可能是异步的
因为 this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态。
```
// Wrong 此代码可能无法更新计数器
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数

3、状态更新合并
当你调用` setState() `时，React 将你提供的对象合并到当前状态。

#### 事件处理

React 元素的事件处理和 DOM元素的很相似。但是有一点语法上的不同:

* React事件绑定属性的命名采用驼峰式写法，而不是小写。
* 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)


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


