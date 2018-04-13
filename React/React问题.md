# React问题

**React正常显示html代码**
---
让内容换行显示时，`<br />`的代码在页面中不换行，而是直接显示`<br />`

React属性dangerouslySetInnerHTML，用来在一个标签中插入许多个标签
```
dangerouslySetInnerHTML={{
    __html: '<h3>hahhah</h3>'
    }}>
```
第一{}代表jsx语法开始，第二个是代表dangerouslySetInnerHTML接收的是一个对象键值对


