# React问题


1. **React正常显示html代码**

    让内容换行显示时，`<br />`的代码在页面中不换行，而是直接显示`<br />`
    
    React属性dangerouslySetInnerHTML，用来在一个标签中插入许多个标签
    ```
    dangerouslySetInnerHTML={{
        __html: '<h3>hahhah</h3>'
        }}>
    ```
    第一`{}`代表jsx语法开始，第二个是代表`dangerouslySetInnerHTML`接收的是一个对象键值对

2. **create-react-app 创建项目时，目录名不要使用大写**，这样作只要是为了严谨性，因为在Linux下是严格区分大小写的。

3. `npm install --save` 把依赖包名称添加到 package.json 文件 dependencies 键下，--save-dev 则添加到 package.json 文件 devDependencies 键下;dependencies是运行时依赖，devDependencies是开发时的依赖;正常使用npm install时，会下载dependencies和devDependencies中的模块，当使用npm install –production或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。

4. **setState()设置完之后不能立即取值**，可通过回调或者在声明周期函数中处理

    setState()不是同步的

5. 
    
### 通过class方式创建组件
    
    事件处理方法要手动bind(this),有三种方式：
    
    * 在调用的时候bind(this)
    * 在constructor中先进行bind(this)
    * 定义函数的时候通过箭头函数的方式，可以避免bind(this)
    
    

