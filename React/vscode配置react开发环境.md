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

* 安装prettier-code formatter插件

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



 

