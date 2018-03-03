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


