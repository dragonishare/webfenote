# JavaScript的this关键字

它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。

随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则，那就是this指的是，**调用函数的那个对象**。

下面分四种情况，详细讨论this的用法。

**1. 纯粹的函数调用**

这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。
```
var a = 1;
function foo() {
	this.a = 0;
}
foo();//undefined
console.log(a);//0
```

**2. 作为对象方法的调用**

函数还可以作为某个对象的方法调用，这时this就指这个上级对象。
```
function foo() {
	console.log(this.a);
}
var obj = {};
obj.a = 1;
obj.fun = foo;

obj.fun();//1
```

**3. 作为构造函数调用**

所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。

**4. apply调用**

apply()是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this指的就是这第一个参数。
```
var a = 0;
function foo() {
    console.log(this.a);
}
var obj = {};
obj.a = 1;
obj.fun = foo;

obj.fun.apply();//0 apply()的参数为空时，默认调用全局对象。
obj.fun.apply(obj);//1
```


## 参考资料

* [Javascript的this用法](http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

