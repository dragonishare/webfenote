## JavaScript算法

### 编写一个js函数用来求n的阶乘n！
#### 1. 递归方式   

```javascript
function factorial(n){
    return n > 1 ? n * factorial(n-1) : 1;
}
factorial(n);
```
#### 2. 利用while循环
```javascript
function factorial(n){
	var result = 1;
	while(n){
		result *= n;
		n--;
	}
	return result;
}
```
#### 3. 利用for循环
```javascript
function factorial(n){
	var result = 1;
	for(var i = 1; i <= n; i++) {
	   result *= i;
	}
	return result;
}
```
### 字符串反转
> 涉及知识点：
>
* **String.split()** ：**用于把一个字符串分割成字符串数组。返回一个字符串数组**。（分隔符必需。如果把空字符串 ("") 用作分隔符，那么每个字符之间都会被分割。）
>
* **Array.join()**：**用于把数组中的所有元素放入一个字符串。返回一个字符串。**元素是通过指定的分隔符进行分隔的。（如果省略分隔符，则使用逗号作为分隔符。）
>
* **Array.reverse()**：**用于颠倒数组中元素的顺序。**（该方法会改变原来的数组，而不会创建新的数组。）

#### 1.使用内置函数
```javascript
function reverseStr(str) {
    return str.split("").reverse().join(""); }
reverseStr("hello world"); // =>"dlrow olleh"
```
#### 2.利用for循环递减遍历
```javascript
function reverseStr(str) {
	var newStr = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}
reverseStr("hello world");// =>"dlrow olleh"
```
#### 3.利用for循环递减遍历
```javascript
function reverseStr(str) {
    var newStr = "";
    var i = str.length - 1;
    while(i >= 0) {
        newStr += str[i];
    	i--;
    }
    return newStr;
}
reverseStr("hello world");// =>"dlrow olleh"
```
#### 4.递归方法
> * **str[0]**取出字符串第一个字符或者用**str.charAt()** 方法返回指定位置的字符  
* String 对象的方法 **slice()**、**substring()** 和 substr() （不建议使用）都可返回字符串的指定部分。slice() 比 substring() 要灵活一些，因为它允许使用负数作为参数。slice() 与 substr() 有所不同，因为它用两个字符的位置来指定子串，而 substr() 则用字符位置和长度来指定子串。

```javascript
function reverseStr(str) {
	return str && reverseStr(str.substring(1)) + str[0];
	//return str && reverseStr(str.slice(1)) + str.charAt(0);
}
reverseStr("hello world");// =>"dlrow olleh"
```



