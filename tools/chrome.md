# chrome 调试

## 参考资料
[Chrome DevTools 官方文档](https://developer.chrome.com/devtools)
[Chrome开发者工具系列](http://www.cnblogs.com/constantince/category/712675.html)
[chrome 控制台使用指南](http://frontenddev.org/column/chrome-development-tools-using-guide/)
[一探前端开发中的JS调试技巧](http://seejs.me/2016/03/27/jsdebugger/)
[如何使用Fiddler调试线上JS代码](http://www.cnblogs.com/RockLi/p/3511132.html)
[在线调试利器Fiddler AutoResponse](http://www.cnblogs.com/peak-weng/archive/2012/01/19/2325855.html)

# chrome插件

React Developer Tools

## video在chrome大于53的高版本出现下载按钮

一般浏览器不会出现下载按钮，，只有谷歌浏览器会

去掉下载按钮
```
video::-internal-media-controls-download-button {
    display:none;
}

video::-webkit-media-controls-enclosure {
    overflow:hidden;
}

video::-webkit-media-controls-panel {
    width: calc(100% + 30px); 
}

```

