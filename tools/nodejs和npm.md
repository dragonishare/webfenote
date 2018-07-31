# Node.js相关

## Node.js

> Node.js是一个Javascript运行环境(runtime)。实际上它是对Google V8引擎进行了封装。V8引 擎执行Javascript的速度非常快，性能非常好。Node.js对一些特殊用例进行了优化，提供了替代的API，使得V8在非浏览器环境下运行得更好。

node.js通过nvm进行版本管理
```
//设置默认版本
nvm alias default 4.2.1
```

## NPM

> NPM的全称是Node Package Manager ，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。

**显示已安装的包**
`npm list -g --depth 0`

**什么时候用本地／全局安装？**
1. 当你试图安装命令行工具的时候，例如 grunt CLI的时候，使用全局安装
全局安装的方式：npm install -g 模块名称
2. 当你试图通过npm install 某个模块，并通过require('XXX')的方式引入的时候，使用本地安装
本地安装的方式：npm install 模块名称

npm install 模块：安装好后不写入package.json中
npm install 模块 --save 安装好后写入package.json的dependencies中（生产环境依赖）
npm install 模块 --save-dev 安装好后写入package.json的devDepencies中（开发环境依赖）

**删除包**

npm uninstall -g <package> 删除全局模块
npm uninstall 模块：删除模块（删除本地模块），但不删除模块留在package.json中的对应信息
npm uninstall 模块 --save 删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall 模块 --save-dev 删除模块，同时删除模块留在package.json中devDependencies下的对应信息


