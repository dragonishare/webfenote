使用eslint需要全局安装eslint包，或者在本地、本项目安装

## 1.通过create-react-app脚手架生成项目

* 生成的项目中默认已经安装了eslint及相关的依赖包，使用react默认的eslint配置规则即可
* package.json中已经默认配置了eslintconfig
* webpack也已经添加了eslint-loader

因此开发的时候，通过webpack的热加载是可以看到相应的规范报告的，需要根据提示**手动解决**

### 可以通过prettier,husky等可以在git add或者commit的时候，格式化

 通过prettier进行格式化，需要在项目根目录新建.prettierrc文件及设置相关的规则

## 2.vscode编辑器配置eslint及代码格式化

在开发阶段希望实时显示代码检查，同时希望保存的时候自动格式化，可以安装vscode对应的插件

* eslint插件，默认是启动的 `"eslint.enable": true`
* 开启eslint自动修改，设置 `"eslint.autoFixOnSave": true`

* 安装`prettier-code formatter`插件

如果以上配置不起作用，还需要对项目安装依赖包`yarn add --dev eslint-plugin-prettier`
同时修改package.json里边的配置
```json
 "eslintConfig": {
    "extends": "react-app",
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error"
    }
  },
```

### vs code 配置eslint和prettier


* 安装插件：[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

* vscode setting配置

```
{  "prettier.eslintIntegration": true,  "eslint.autoFixOnSave": true,  "editor.formatOnSave": true}

```


参考：[使用ESLint ＆ Prettier美化Vue代码](https://www.imooc.com/article/39856)

## prettier和ESLint一起使用
很多项目都会使用ESLint来提高代码的质量，有两种方式能够集成Prettier和ESLint，你也可以单独或同时使用它们。

### 使用ESLint运行Prettier

如果你已经在你的项目中使用ESLint并且想要只通过单独一条命令来执行你的所有的代码检查的话，你可以使用ESLint来为你运行Prettier。

只需要使用[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)来添加Prettier作为ESLint的规则配置。

`yarn add --dev prettier eslint-plugin-prettier`

配置信息.eslintrc.json
```
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
### 关闭ESLint的格式规则

你是否通过ESLint来运行Prettier，又或者是单独运行两个工具，那你大概只想要每个格式问题只出现一次，而且你特别不想要ESLint仅仅是和Prettier有简单的不同和偏好而报出“问题”。

所以你大概想要禁用冲突的规则（当保留其他Prettier不关心的规则时）最简单的方式是使用[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)。它可以添加到任何ESLint配置上面。

`yarn add --dev eslint-config-prettier`



To integrate this plugin with `eslint-config-prettier`, you can use the `"recommended" `configuration:

In addition to the above installation instructions, install `eslint-config-prettier`:

`npm install --save-dev eslint-config-prettier`

Then you need to add `plugin:prettier/recommended` as the last extension in your `.eslintrc.json`:
```
{
  "extends": [
    "plugin:prettier/recommended"
  ]
}
```
This does three things:

* Enables `eslint-plugin-prettier`.
* Sets the `prettier/prettier` rule to `"error"`.
* Extends the `eslint-config-prettier` configuration.

You can then set Prettier's own options inside a `.prettierrc` file.


[eslint-plugin-prettier官方说明](https://github.com/prettier/eslint-plugin-prettier)


