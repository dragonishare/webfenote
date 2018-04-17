# Ant Design项目实战


## 安装 dva-cli

通过 npm 安装 dva-cli 并确保版本是 0.9.1 或以上。

```
//全局安装
npm install dva-cli -g 
//查看版本
dva -v
```

## 创建新应用

安装完 dva-cli 之后，就可以在命令行里访问到 `dva`命令。现在，你可以通过 `dva new` 创建新应用。

`dva new dva-qucikstart`

这会创建` dva-quickstart `目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。

`cd`进入` dva-quickstart `目录，并启动开发服务器：
```
cd dva-quickstart
npm start
```

## 使用 antd

通过 npm 安装` antd `和` babel-plugin-import `。`babel-plugin-import `是用来按需加载` antd `的脚本和样式的。
```
npm install antd babel-plugin-import --save
```
编辑` .webpackrc`，使` babel-plugin-import `插件生效。
```
{
+  "extraBabelPlugins": [
+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
+  ]
}
```

## 定义路由

首先第一步是创建路由，路由可以想象成是组成应用的不同页面。
新建 route component routes/Products.js，内容如下：
```
import React from 'react';

const Products = (props) => (
  <h2>List of Products</h2>
);

export default Products;
```
添加路由信息到路由表，编辑 router.js :
```
import Products from './routes/Products';

<Route path="/products" exact component={Products} />
```

# 参考资料
[Ant Design of React](https://ant.design/docs/react/practical-projects-cn)

