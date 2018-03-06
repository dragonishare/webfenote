##JavaScript函数
### 传递参数

> **ECMAScript中所有函数的参数传递都是==按值传递==。**

在向参数传递基本类型的值时，**被传递的值会被复制给一个局部变量**（即命名参数，或者用ECMA Script的概念来说，就是arguments对象中的一个元素）。在向参数**传递引用类型的值**时，会把这个值在内存中的地址复制给一个局部变量，因此**这个局部变量的变化会反映在函数的外部。**
```javascript
function setName(obj) {
	obj.name = "aaa";
	console.log("new 之前",obj)
	obj = new Object();//改变obj的指向，此时obj指向一个新的内存地址，不再和person指向同一个
	obj.name = "bbb";
	console.log('new之后obj是什么',obj.name);
	console.log("new之后obj是什么",obj)
}
var person = new Object();
person.ff = 'f';
//执行下面的代码
setName(person);
console.log(person.name)
//执行结果
new 之前 {ff: "f", name: "aaa"}
new之后obj是什么 bbb
new之后obj是什么 [name: "bbb"]
aaa
``` 
示例说明：
即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，**当在函数内部重写obj时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即销毁。**


