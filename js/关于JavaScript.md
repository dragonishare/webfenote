# JavaScript历史

Brendan Eich只用10天时间就把Javascript设计出来了。

由于设计时间太短，语言的一些细节考虑得不够严谨，导致后来很长一段时间，JavaScript写出来的程序混乱不堪。

总的来说，他的设计思路是这样的：

1. 借鉴C语言的基本语法；
2. 借鉴Java语言的数据类型和内存管理；
3. 借鉴Scheme语言，将函数提升到"第一等公民"（first class）的地位；
4. 借鉴Self语言，使用基于原型（prototype）的继承机制。

所以，**JavaScript语言实际上是两种语言风格的混合产物----（简化的）函数式编程+（简化的）面向对象编程**。这是由Brendan Eich（函数式编程）与网景公司（面向对象编程）共同决定的。

如果不是公司的决策，Brendan Eich绝不可能把Java作为Javascript设计的原型。作为设计者，他一点也不喜欢自己的这个作品：
> "与其说我爱Javascript，不如说我恨它。它是C语言和Self语言一夜情的产物。十八世纪英国文学家约翰逊博士说得好：'它的优秀之处并非原创，它的原创之处并不优秀。'（the part that is good is not original, and the part that is original is not good.）"

### 继承
JavaScript里面都是对象，必须有一种机制，将所有对象联系起来。所以，Brendan Eich最后还是设计了"继承"。

但是，他不打算引入"类"（class）的概念，因为一旦有了"类"，JavaScript就是一种完整的面向对象编程语言了，这好像有点太正式了，而且增加了初学者的入门难度。
他考虑到，C++和Java语言都使用new命令，生成实例。
因此，他就把**new**命令引入了JavaScript，用来从原型对象生成一个实例对象。但是，JavaScript没有"类"，怎么来表示原型对象呢？
这时，他想到C++和Java使用new命令时，都会调用"类"的**构造函数（constructor）**。他就做了一个简化的设计，在JavaScript语言中，new命令后面跟的不是类，而是构造函数。

用构造函数生成实例对象，有一个缺点，那就是**无法共享属性和方法**。每一个实例对象，都有自己的属性和方法的副本。这不仅无法做到数据共享，也是极大的资源浪费。

Brendan Eich决定为构造函数设置一个**prototype**属性。

这个属性包含一个对象（以下简称"prototype对象"），所有实例对象需要共享的属性和方法，都放在这个对象里面；那些不需要共享的属性和方法，就放在构造函数里面。
实例对象一旦创建，将自动引用prototype对象的属性和方法。也就是说，实例对象的属性和方法，分成两种，**一种是本地的，另一种是引用的**。

由于所有的实例对象共享同一个prototype对象，那么从外界看起来，prototype对象就好像是实例对象的原型，而实例对象则好像"继承"了prototype对象一样。

这就是**JavaScript继承机制**的设计思想。


## 参考资料

* [Javascript继承机制的设计思想](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)
* [Javascript诞生记](http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html)

