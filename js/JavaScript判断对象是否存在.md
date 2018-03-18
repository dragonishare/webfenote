# JavaScript判断对象是否存在
现在，我们要判断一个全局对象myObj是否存在，如果不存在，就对它进行声明。用自然语言描述如下：
```
if(myObj不存在) {
    声明myObj;
}
```
你可能会觉得，写出这段代码很容易。但是实际上，它涉及的语法问题，远比我们想象的复杂。[Juriy Zaytsev](http://perfectionkills.com/unnecessarily-comprehensive-look-into-a-rather-insignificant-issue-of-global-objects-creation/)指出，判断一个JavaScript对象是否存在，有超过50种写法。只有对JavaScript语言的实现细节非常清楚，才可能分得清它们的区别。

1.
```
if(!myObj) {
	var myObj = {}
}
```

2.
```
if (!window.myObj) {
	var myObj = {};
	//或者window.myObj = {};
}
```
window是JavaScript的顶层对象，所有的全局变量都是它的属性。所以，判断myobj是否为空，等同于判断window对象是否有myobj属性，这样就可以避免因为myObj没有定义而出现ReferenceError错误

这种写法的缺点在于，在某些运行环境中（比如V8、Rhino），window未必是顶层对象。

3.
```
if (!this.myObj) {
	this.myObj = { };
}
```
在全局变量的层面中，this关键字总是指向顶层变量，所以就可以独立于不同的运行环境。

但是，上面这样写可读性较差，而且this的指向是可变的，容易出错

4.
```
var global = this;
if (!global.myObj) {
	global.myObj = { };
}
```
用自定义变量global表示顶层对象

**5.使用typeof运算符，判断myObj是否有定义。**

这是目前使用最广泛的判断javascript对象是否存在的方法。

```
if (typeof myObj == "undefined") {
	var myObj = {};
}
```

由于在已定义、但未赋值的情况下，myObj的值直接等于undefined，所以上面的写法可以简化：
```
if (myObj == undefined) {
	var myObj = {};
}
```
这里有两个地方需要注意，首先第二行的var关键字不能少，否则会出现ReferenceError错误，其次undefined不能加单引号或双引号，因为这里比较的是undefined这种数据类型，而不是"undefined"这个字符串。

### 总结
1. 如果只判断对象是否存在，推荐使用第五种写法。
2. 如果除了对象是否存在，还要判断对象是否有null值，推荐使用第一种写法。
3. 除非特殊情况，所有变量都应该使用var命令声明。
4. 为了跨平台，建议避免使用window表示顶层对象。
5. 在Javascript语言中，null和undefined容易产生混淆。在可能同时涉及两者的情况下，建议使用"精确比较"运算符（===）。



