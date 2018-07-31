# web前端编辑器推荐

**开发编辑器需要的功能**

* **性能，启动速度、安装包大小、内存占用**
* **语法高亮**
* **代码提示**
* 终端支持
* git支持
* eslint，prettier
* 代码折叠
* 文件未保存重启不丢失
* 多窗口
* 多项目

## 项目推荐

* React Native官方更推荐使用WebStorm或Sublime Text来编写React Native应用；还可以使用Atom+Nuclide、VSCode+React Native Tools


## Sublime Text

**小项目主要使用**

轻量，启动速度快，安装包小，可以无限试用
自己安装对应的插件

插件列表：

* 语法高亮
  + [Babel-Sublime](https://github.com/babel/babel-sublime)插件很好的支持了JSX语法的高亮显示，连包裹在组件中的HTML标签都能实现高亮显示；打开面板输入babel安装；
    > 打开.js, .jsx 后缀的文件;
    > 打开菜单view， Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel)，选择babel为默认 javascript 打开syntax
  + ReactJS
* [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)

## Visual Studio Code

插件列表
* 语法高亮
  + [Sublime Babel](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## WebStorm 


## eslint和prettier

prettier 已经逐渐成为业界主流的代码风格格式化工具
eslint 主要还是负责代码规则校验，prettier 只调整代码风格，代码样式，eslint 才是真正检查代码是否符合规范的工具

**解决代码格式化规范问题**

* 使用 editorconfig 协助兼容开发工具的代码格式化。
* 使用 eslint 检查代码。
* 使用 prettier 格式化代码。（可以理解为prettier是 eslint —fix 的加强版，用 prettier 来代替 eslint-fix）
* 手动修改剩下的有问题的地方，或者有些地方很难用规则来判断的时候，就需要手动修改。

**具体操作**

1.	统一团队使用的开发工具（webstorm，ide 编辑器）
2.	安装 eslint 和 prettier （node 模块）
3.	安装 eslint 和 prettier （ ide 编辑器的插件）
4.	配置 eslint 和 prettier
5.	配置 editorconfig （可选）
6.	严格督查，按照流程检查和格式化代码，按照规范和要求进行代码提交。

### prettier

```
.prettierrc 

{
  "printWidth": 120,               // 换行字符串阈值
  "semi": true,                    // 句末加分号
  "singleQuote": true,             // 用单引号
  "trailingComma": "none",         // 最后一个对象元素加逗号
  "bracketSpacing": true,          // 对象{}，数组[]加空格
  "jsxBracketSameLine": false,     // jsx > 是否另起一行
  "arrowParens": "avoid",          // (x) => {} 是否要有小括号
  "requirePragma": false,          // 是否要注释来决定是否格式化代码
  "proseWrap": "preserve"          // 是否要换行
}
```





## 参考

* [梳理前端开发使用eslint和prettier来检查和格式化代码问题](http://web.jobbole.com/94786/)



