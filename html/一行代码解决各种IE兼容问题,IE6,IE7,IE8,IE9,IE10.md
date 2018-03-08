
在网站开发中不免因为各种兼容问题苦恼，针对兼容问题，其实IE给出了解决方案Google也给出了 
### google的解决方案
google的ie7-js中是一个JavaScript库（解决IE与W3C标准的冲突的JS库），使微软的Internet Explorer的行为像一个Web标准兼容的浏览器，支持更多的W3C标准，支持CSS2、CSS3选择器。它修复了许多的HTML和CSS问题，并使 得透明PNG在IE5、IE6下正确显示。

使IE5,IE6兼容到IE7模式（推荐）
```html
<!–[if lt IE 7]>
<script src=”http://ie7-js.googlecode.com/svn/version/2.0(beta)/IE7.js” type=”text/javascript”></script>
<![endif]–>
```
 使IE5,IE6,IE7兼容到IE8模式

```html
<!–[if lt IE 8]>
<script src=”http://ie7-js.googlecode.com/svn/version/2.0(beta)/IE8.js” type=”text/javascript”></script>
<![endif]–>
```
 使IE5,IE6,IE7,IE8兼容到IE9模式

```html
<!–[if lt IE 9]> <script src=”http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js”></script> <![endif]–>
```
解决PNG显示问题
只需将透明png图片命名为*-trans.png
需要注意的是：此方法对背景平铺(background-repeat)和背景(background-position)无法起到任何作用,默认会占满整个容器。

### 常用的方案

```html
<meta http-equiv=”X-UA-Compatible” content=”IE=edge,chrome=1″ />
```

这样写可以达到的效果是如果安装了GCF，则使用GCF来渲染页面，如果没安装GCF，则使用最高版本的IE内核进行渲染。Google Chrome Frame（谷歌内嵌浏览器框架GCF）。这个插件可以让用户的IE浏览器外观不变，但用户在浏览网页时，实际上使用的是**Google Chrome浏览器内核**，而且支持IE6、7、8等多个版本的IE浏览器。


