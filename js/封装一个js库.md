## 封装一个js库
JavaScript库实际上就是一堆函数的集合 

### 注意事项
* 1.不要使用版本检测，而要使用能力检测

由于浏览器的类型和版本太多，以及不断的新的浏览器出现，我们不可能投入大量的时间和成本去实践检测各种版本的浏览器。"浏览器检测"也叫"版本检测"通常被认为是一种错误的做法，浏览器检测的最佳实践是**能力检测**，通常也被称为**对象检测**，指的是在代码执行之前检测某个脚本对象or方法是否存在，而不是依赖于你对哪个浏览器具有哪些特定的了解。如果必须的对象和方法存在，那么说明浏览器能够使用它，而且代码也可以按照预期执行。能力检测使用<if(xxx.xxxx)>的方式

* 2.使用命名空间

使用命名空间的两点原则：**唯一性，不共享**。
使用匿名函数来实现代码的不共享

>
//匿名函数
==(==function(){
//code,运行的代码
}==)==**()**;

**注意**：()在JavaScript中有两种含义：**一是运算符；二是分隔符**。
**上面匿名函数需要说明两点：**
     ①**高亮括号**里是一个匿名函数，**高亮括号**代表分割，表示里面的函数是一个部分；
     ②**加粗括号**表示一个运算符，表示**高亮括号**里面的函数要运行；相当于定义完一个匿名函数后就让它直接运行。

### js库模板
```javascript
	(function (){
		function $(){
			alert("被调用到喽！"); 
			/*alert()是JavaScript脚本语言中窗口window对象的一个常用方法；
			其主要用法就是在你自己定义了一定的函数以后，通过执行相应的操作，
			所弹出对话框的语言。并且alert对话框通常用于一些对用户的提示信息。*/ 
			}
		  
		  //注册命名空间 'myNameSpace' 到window对象上  
            window['myNameSpace'] = {}  
          
		  //把$函数注册到 'myNameSpace'命名空间中
		  window['myNameSpace']['$']=$;
          
	})();
```

[参考地址-JS---创建自己的“JavaScript库”，原来如此简单
](http://blog.csdn.net/mazhaojuan/article/details/7659906)


------------------------------
### 立即执行的匿名函数

不管是模块化开发还是非模块化开发，建立一个工具库时，一般都得用到匿名函数。

差别在于：模块化开发依赖模块加载器提供的define函数，匿名函数作为参数传入，会自动getValue求值。而非模块化开发，则用特殊的格式写立即执行的匿名函数，其中一种格式如下：
```javascript
;(function(window) {
    //这里写你所有的内容
}(window));
```
开头的分号，意在防止与其他js文件合并压缩时，由于上一个文件没有用分号结尾而产生问题。最末尾的分号则是防止与下一个js文件发生合并冲突。

将全局对象window作为参数传入，则可以使之在匿名函数内部作为局部变量访问，提供访问速度。

### 保存常用函数为局部变量
有一些数组或对象的方法经常能使用到，应将它们保存为局部变量以提高访问速度。
```javascript
;(function(window){
    var obj = {},
                toStr = obj.toString,
                hasOwnProp = obj.hasOwnProperty,
                arr = [],
                slice = arr.slice,
                push = arr.push;

            var isObject = function(obj) {
                    return obj == null ? obj.toString() : toStr.call(obj) === '[object Object]';
                },
                isArray = Array.isArray || function(obj) {
                    return toStr.call(obj) === '[object Array]';
                },
                isFunction = function(obj) {
                    return typeof obj === 'function';
                },
                isString = function(obj) {
                    return typeof obj === 'string';
                },
                isBoolean = function(obj) {
                    return typeof obj === 'boolean';
                },
                inArray = function(arr, item) {
                    return arr.indexOf(item) !== -1;
                };

}(window));
```

[参考地址-如何写一个你自己的jQuery库
?](https://github.com/Lucifier129/Lucifier129.github.io/issues/10)


