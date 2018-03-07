## JavaScript数组基础知识
### Array 对象常用方法
 
* **push()** 用于向数组的末尾添加一个或多个元素，并返回新的长度。该方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。
* **pop()** 用于把数组的最后一个元素从其中删除，并返回最后一个元素的值。pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
* **shift()** 用于把数组的第一个元素从其中删除，并返回第一个元素的值。如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。请注意，该方法不创建新数组，而是直接修改原有的 arrayObject。
* **unshift()** 用于向数组的开头添加一个或更多元素，并返回新的长度。unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。请注意，unshift() 方法不创建新的创建，而是直接修改原有的数组。
* **splice()** 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
* **slice()** 方法可从已有的数组中返回选定的元素。从 start 到 end （**不包括该元素**）。请注意，**该方法并不会修改数组**，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
* **concat()** 方法用于连接两个或多个数组。该方法**不会改变现有的数组**，而仅仅会返回被连接数组的一个副本。**返回一个新的数组**。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
* **join()** 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。**返回一个字符串**。该字符串是通过把 arrayObject 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 separator 字符串而生成的。
* **sort()** 方法用于对数组的元素进行排序。返回对数组的引用。请注意，**数组在原数组上进行排序**，不生成副本。如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。
* **reverse()** 方法用于颠倒数组中元素的顺序。该方法会改变原来的数组，而不会创建新的数组。

### JavaScript数组操作

1、数组的创建
```javascript
var array = [];
var array = new Array();　//创建一个数组
var array = new Array([size]);　//创建一个数组并指定长度，注意不是上限，是长度
var array = new Array([element0[, element1[, ...[, elementN]]]]);　//创建一个数组并赋值
```
2、 数组元素的访问
```javascript
var getArrItem=array[1]; //获取数组的元素值
array[1]= "new value"; //给数组元素赋予新的值
```
3、 数组元素的添加
```javascript
array. push([item1 [item2 [. . . [itemN ]]]]);// 将一个或多个新元素添加到数组结尾，并返回数组新长度
array.unshift([item1 [item2 [. . . [itemN ]]]]);// 将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度
array.splice(insertPos,0,[item1[, item2[, . . . [,itemN]]]]);//将一个或多个新元素插入到数组的指定位置，插入位置的元素自动后移，返回""
```
4、 数组元素的删除
```javascript
array.pop(); //移除最后一个元素并返回该元素值
array.shift(); //移除最前一个元素并返回该元素值，数组中元素自动前移
array.splice(deletePos,deleteCount); //删除从指定位置deletePos开始的指定数量deleteCount的元素，数组形式返回所移除的元素
array.slice(start, [end]); //以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素
```
5、 数组的合并
```javascript
array.concat([item1[, item2[, . . . [,itemN]]]]); //将多个数组（也可以是字符串，或者是数组和字符串的混合）连接为一个数组，返回连接好的新的数组
```
6、 数组的拷贝
```javascript
array.slice(0); //返回数组的拷贝数组，注意是一个新的数组，不是指向
array.concat(); //返回数组的拷贝数组，注意是一个新的数组，不是指向
```
7、 数组元素的排序
```javascript
array.reverse(); //反转元素（最前的排到最后、最后的排到最前），返回数组地址
array.sort(); //对数组元素排序，返回数组地址
```
8、 数组元素的字符串化
```javascript
array.join(separator); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。
 
toLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用
```

### ECMAScript5新增方法

1、位置方法

* **indexOf()**
* **lastIndexOf()**

这两个方法都接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。
这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1。
```javascript
var arr = [1, 2, 3, 4];
var position1 = arr.indexOf(1);
var position2 = arr.lastIndexOf(1);
console.log(position1);// =>0
console.log(position2);// =>0
```









