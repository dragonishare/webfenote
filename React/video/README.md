# React视频教程总结
![image-20180517233820551](media/image-20180517233820551-1.png)


> 1、不管知识有多新、项目有多难，只要来了什么姿势都得上；
>
> 2、没人疼，没人爱，团队中没人能帮自己，需要借助外力。（看视频、Google）；
>
> 3、积极要求进步勇当三八红旗手；

## React应用场景

1. 复杂场景下的高性能（比如类似web应用类型的）
2. 组件高度可重用，可组合

   

## React基础

jsx语法糖：方便使用和易读的一种代码书写方式，不影响代码的功能

### jsx中样式的使用

1. 使用className添加类名，比如直接添加`<div className="txt"></div>`，如果是变量的话`<div className={变量名}`
2. 使用行内样式style, 比如`<div style={{color: 'red', fontSize: '12px'}}`, 双大括号，属性名用小驼峰

### 组件中this

组件中的方法是被组件自身调用的，所以组件的方法对应的this是指组件本身——在使用`React.createClass` 时可以这么理解;

* 使用`React.createClass` 时 `React` 会自动帮我们处理函数中的 `this` 指针

* 使用`React.Component时`由于使用了 ES6，这里会有些微不同，属性this并不会自动绑定到 React 类的实例上

  1. 在`constructor`中绑定，比如`this.handleClick = this.handleClick.bind(this)`;

  2. 使用箭头函数，箭头函数中的this指的是函数定义时所在宿主对象

     ```javascript
     handleClick = (e) => {
         this.setState({
             count: this.state.count + 1
         });
     }
     ```

     

  3. 在行内代码中绑定正确的执行上下文，比如

     ```javascript
      render() {
         return (
           <div onClick={this.handleClick.bind(this)}></div>
         );
       }
     ```

     

this四种用法，详情：慕课网“JavaScript深入浅出”-this节



### 组件的state和props



### 组件的生命周期





### 组件的事件处理

事件传递参数有两种形式

1. 通过箭头函数` <button onClick={() => this.handlerClick('参数')}>点击</button>`
2. 通过bind函数 ` <button onClick={this.handlerClick.bind(this,'参数')}>点击</button>`



### 调试错误方式

1. `console.log()`打印出相应的内容
2. 浏览器打断点或者代码中加**debugger**打断点
3. 

