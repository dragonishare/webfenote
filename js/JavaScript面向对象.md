# JavaScript面向对象

## 面向对象编程：封装

JavaScript是一种**基于对象（object-based）**的语言，一切皆对象。但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）。
如果我们要把"属性"（property）和"方法"（method），封装成一个对象，甚至要从原型对象生成一个实例对象，我们应该怎么做呢？

**1、生成实例对象的原始模式**
```
var obj = {
	property: "",
	method: function () {}
}
```
这是最简单的封装，把属性和方法封装在一个对象里面。
这样的写法有两个缺点，一是如果多生成几个实例，写起来就非常麻烦；二是实例与原型之间，没有任何办法，可以看出有什么联系。

**2、原始模式的改进**
写一个函数，解决代码重复的问题。
```
function Obj(value) {
	return {
		property: value
	}
}
//然后生成实例对象，就等于是在调用函数：
var obj1 = Obj("111");
```
这种方法的问题依然是，实例之间没有内在的联系，不能反映出它们是同一个原型对象的实例。

**3、构造函数模式**
为了解决从原型对象生成实例的问题，JavaScript提供了一个构造函数（Constructor）模式。
所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。**对构造函数使用new运算符，就能生成实例**，并且this变量会绑定在实例对象上。
实例自动含有一个`constructor`属性，指向它们的构造函数。通过`instanceof`运算符，验证原型对象与实例对象之间的关系。

构造函数方法很好用，但是存在一个**浪费内存**的问题。

**4、prototype模式**
JavaScript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。因此就提高了运行效率。

**prototype模式的验证方法**
为了配合prototype属性，JavaScript定义了一些辅助方法，帮助我们使用它。

**4.1 isPrototypeOf()**
这个方法用来判断，某个proptotype对象和某个实例之间的关系。
`对象.prototype.isPrototypeOf(实例名)`

**4.2 hasOwnProperty()**
每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
`实例名.hasOwnProperty("属性名")`

**4.3 in运算符**
in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
`"属性名" in 实例名`
in运算符还可以用来遍历某个对象的所有属性。
```
for(var prop in Obj) {
    console.log("Obj["+prop+"]="+Obj[prop]);
}
```

## 面向对象编程：构造函数的继承

## 面向对象编程：非构造函数的继承

## 参考资料
* [Javascript 面向对象编程（一）：封装](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
* [Javascript面向对象编程（二）：构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)
* [Javascript面向对象编程（三）：非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)





