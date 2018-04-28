[toc]
# React

## React入门

使用react的时候，需要引用 react.js 和 react-dom.js 这两个js文件以及browser.js。 **并非必需引入browser.js**，引入它的作用是使浏览器支持babel，你可以使用ES2015进行编码。如果你用ES5，可以不引入。

* react.js 是 React 的 核心库
* react-dom.js 是 提供与 DOM 相关的功能 
* browser.js 是 **将 JSX 语法转为 JavaScript 语法** ，这一步 很消耗时间 ，实际上线的时候，应该将它放到服务器完成。（转换只要在 浏览器解析之前就可以了） 
React 独有的 JSX 语法，跟 JavaScript 不兼容。 凡是使用 JSX 的地方，都要加上 type="text/babel" 。

browser.js 是Babel提供的转换器脚本，可以在浏览器运行。用户的ES6脚本放在 script 标签之中，但是要注明 type="text/babel" 。

>
**ReactDOM.render()** 实例化根组件，启动框架，注入标记到原始的 DOM 元素中。

React 组件使用一个名为** render() **的方法，该方法返回一颗 React 组件树，这棵树最终将会渲染成 HTML。（ 接收数据作为输入，输出页面中对应展示的内容。）


### 核心概念

#### 组件
[React创建组件的三种方式及其区别](https://www.cnblogs.com/wonyun/p/5930333.html)

1. 获取属性的值用的是this.props.属性名
2. 创建的组件名称首字母必须大写。
3. 为元素添加css的class时，要用className。
4. 组件的style属性的设置方式也值得注意，要写成style==={{==width: this.state.witdh==}}==。
5. getInitialState函数必须有返回值，可以是NULL或者一个对象。
6. 访问state的方法是this.state.属性名。
7. 修改状态值要用setState方法。
8. 变量用{}包裹，不需要再加双引号。

**组件的生命周期**
组件的生命周期分成三个状态：

* Mounting：已插入真实 DOM
* Updating：正在被重新渲染
* Unmounting：已移出真实 DOM 
React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

* componentWillMount()
* componentDidMount()
* componentWillUpdate(object nextProps, object nextState)
* componentDidUpdate(object prevProps, object prevState)
* componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数。

* componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
* shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用 



## ES6
涉及到的常用知识点

* 箭头函数 Arrow functions
* 对象解构 Object destructuring
* 类 Classes
* 展开操作符 The spread operator

ES6入门资料

* [Practical ES6](https://ponyfoo.com/books/practical-modern-javascript/chapters)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)

## 设计思想
1. [React 设计思想](https://github.com/react-guide/react-basic)
2. [React的设计哲学 - 简单之美](http://www.infoq.com/cn/articles/react-art-of-simplity/)
3. [颠覆式前端UI开发框架:React](http://www.infoq.com/cn/articles/subversion-front-end-ui-development-framework-react/)

## 学习资料
[JavaScript全栈教程](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
[JavaScript 标准参考教程](http://javascript.ruanyifeng.com/)
[JavaScript MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[React 学习资源汇总](https://www.ctolib.com/topics-79199.html)
[十分详细的React入门实例](https://blog.csdn.net/a153375250/article/details/52667739)

[React架构的静态站点生成器 Gatsby](https://github.com/gatsbyjs/gatsby)

## 其他

### Redux
在React阵营里，Redux是最受欢迎的状态管理库。Redux不仅能帮助你集中管理数据，同样可以将对数据的操作限制在一定规范内。

![](media/15248445968891.jpg)
你可以将Redux想象成一个银行：你不能直接修改你账户的存款数字（来来来，让我在后面多加几颗零吧！）。而是需要填写存款表单，让银行出纳认证后来完成这个操作。
相似的，Redux也不允许你直接修改全局state的数据。而是通过向reducers传递actions来进行，reducer其实就是一个接收旧状态和操作返回新状态的方法。

[Redux 教程](https://learnredux.com/)
[egghead.io上的视频教程](https://egghead.io/courses/getting-started-with-redux)

### GraphQL
由Fackbook开源的项目[GraphQL](http://graphql.org/)，它可以作为传统REST APIs的替代解决方案。
不同于REST API根据你预先定义的数据集（例如 /api/posts, /api/comments, etc.）分发出不同的REST路径。GraphQL可以让你只通过一个数据端像操作数据库一样按需查询数据。
这种新的策略在你需要请求多组数据源的时候非常有意义。你只需要一次请求就可以获取所有的数据。

GraphQL本身只是一项协议，它最好的实现是能和Redux非常好地协同的[Apollo](https://www.apollographql.com/)这个库。现在网上的相关教程确实比较少，不过[Apollo](https://www.apollographql.com/client/)官方文档   已经能让你很好地了解它了。

### Elm
[Elm](http://elm-lang.org/)不仅是一个框架，更是一种建立在JavaScript之上的语言，类似CoffeeScript/TypeScript等。
它有很多优点，例如性能提升，语义化的版本，没有运行异常等。


