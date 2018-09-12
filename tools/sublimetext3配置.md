# sublimetext3配置

#### 实现Sublime Text3成为静态web服务器：SublimeServer

SublimeServer会启动一个轻量级的，静态的WEB服务器，让你在文本编辑器中直接启动服务器，并进行测试联调。

安装完成后，点击tools选项，就可以看到SublimeServer工具了，然后点击Settings，查看SublimeServer的基本配置，这里可以修改服务器端口，文件扩展名等。
配置后，点击Start SublimeServer，就可以启动服务器了。

**注意：**SublimeServer要求你的代码文件夹，要添加到Sublime Text的项目里面，这样才能列出这些文件夹。

#### Chrome和Sublime Text配置自动刷新网页

1. Chrome安装LiveReload插件
在更多扩展程序里搜索LiveReload插件，安装由livereload.com提供的

2. Sublime Text安装LiveReload插件

如果通过sublime text安装包命令安装不成功，建议手动下载https://github.com/alepez/LiveReload-sublimetext3

点击菜单栏Preferences-Package Settings->LiveReload->Settings - User打开用户配置文件输入如下内容配置插件；
{
    "enabled_plugins": [
        "SimpleReloadPlugin",
        "SimpleRefresh"
    ]
}

3. 实时预览
    * 在web服务器下编辑html文件，在浏览器中输入http://localhost访问文件；
    * 然后点击 Chrome浏览器右边的“LiveReload”图标中间小圆点由虚变实，表示启动插件；
    * 修改html文件内容按 ctr+s 保存，即可在chrome里面看到实时更新。

#### Sublime Text 3 搭建 React.js 开发环境

**1. Babel**
----
支持ES6， React.js, jsx代码高亮，对 JavaScript, jQuery 也有很好的扩展。

**2. SublimeLinter-eslint**
----
代码审查

**3. 修改 Emmet 兼容jsx 文件**
----
emmet 作为前端开发必备插件之一非常方便快捷，默认情况下使用快捷键ctrl+e可以自动扩展成适应于react的className形式。而使用tab来默认拓展则需要通过修改sublime快捷键。

配置方法：打开 preferences -> Key bindings - Users，把下面代码复制到[]内部。
```
{
  "keys": ["tab"],
  "command": "expand_abbreviation_by_tab",

  // put comma-separated syntax selectors for which
  // you want to expandEmmet abbreviations into "operand" key
  // instead of SCOPE_SELECTOR.
  // Examples: source.js, text.html - source
  "context": [
    {
      "operand": "source.js",
      "operator": "equal",
      "match_all": true,
      "key": "selector"
    },

    // run only if there's no selected text
    {
      "match_all": true,
      "key": "selection_empty"
    },

    // don't work if there are active tabstops
    {
      "operator": "equal",
      "operand": false,
      "match_all": true,
      "key": "has_next_field"
    },

    // don't work if completion popup is visible and you
    // want to insert completion with Tab. If you want to
    // expand Emmet with Tab even if popup is visible --
    // remove this section
    {
      "operand": false,
      "operator": "equal",
      "match_all": true,
      "key": "auto_complete_visible"
    },
    {
      "match_all": true,
      "key": "is_abbreviation"
    }
  ]
}
```

**4. JsFormat 格式化 js 代码**
----
jsformat 是 sublime 上 js 格式化比较好用的插件之一，通过修改它的e4x 属性可以使它支持 jsx。

配置方法：打开preferences -> Package Settings -> JsFormat -> Setting - Users,输入以下代码：
```
{
  "e4x": true,
  "format_on_save": true,
  "format_on_save_extensions": ["js", "json", "jsx"]
}
```
即可保存时自动格式化，并支持 jsx 类型文件。

**5. 编译 jsx**
带有编译 jsx 的命令 babel build。使用 babel 编译 jsx 也由 React 项目官方引用。该命令依赖于 node 包 babel。babel 同时也支持 ES6的新语法经过编译在浏览器中运用。
`npm install -g babel`

在 sublime 中使用`ctrl+shift+p`打开面板输入`babel transform`自动编译成 react.js 文件













**参考资料**
[Sublime Text 3 搭建 React.js 开发环境](https://segmentfault.com/a/1190000003698071#articleHeader0)


#### 其他插件推荐

* Package Control

* Terminal

  安装完就打开它的 `setting - user`

  因为需要支持`iTerm2`,所以修改为

  ```json
  {
      "terminal": "iTerm2-v3.sh",
      "parameters": ["--open-in-tab"] //在终端的tab打开
  }
  ```

  打开Sublime,快捷键`control + command + t`就可以打开终端，并且是进入了文件所在的目录



* SublimeCodeIntel
* BracketHighlighter
* A File Icon
* SideBarEnhancements
* JsFormat
* Emmet
* DocBlockr
* Boxy Theme
* JavaScript Next
* HTML-CSS-JS Prettify
* GitGutter 这是一个小巧有用的插件，它会告诉你自上次git commit以来已经改变的行。一个指示器显示在行号的旁边。
* AllAutocomplete
* git
* autofilename 路径自动补全
* EditorConfig
* Babel
* LiveReload
* Terminal
* Color Highlight: 在编辑器里显示颜色的背景色，不是**Color Highlighter**
*  Comment-Snippets 代码注释

react环境插件

* React ES6 Snippets  **react  es6 语法提示**





Emmet支持jsx，tab补全，**`[]`不能少**

```json
[
  {
    "keys": ["tab"],
    "command": "expand_abbreviation_by_tab",

    // put comma-separated syntax selectors for which
    // you want to expandEmmet abbreviations into "operand" key
    // instead of SCOPE_SELECTOR.
    // Examples: source.js, text.html - source
    "context": [
      {
        "operand": "source.js, text.html",
        "operator": "equal",
        "match_all": true,
        "key": "selector"
      },

      // run only if there's no selected text
      {
        "match_all": true,
        "key": "selection_empty"
      },

      // don't work if there are active tabstops
      {
        "operator": "equal",
        "operand": false,
        "match_all": true,
        "key": "has_next_field"
      },

      // don't work if completion popup is visible and you
      // want to insert completion with Tab. If you want to
      // expand Emmet with Tab even if popup is visible --
      // remove this section
      {
        "operand": false,
        "operator": "equal",
        "match_all": true,
        "key": "auto_complete_visible"
      },
      {
        "match_all": true,
        "key": "is_abbreviation"
      }
    ]
  }
]
```





## 更改 zsh 配置文件，在Mac终端使用sublime、vscode、atom快速打开文件或目录

```bash
alias atom='/Applications/Atom.app/Contents/MacOS/Atom'
alias subl='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'
alias code='/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code'
```

[更改 zsh 配置文件，在Mac终端使用sublime、vscode、atom快速打开文件或目录](http://qiubaiying.top/2017/03/17/Mac%E7%BB%88%E7%AB%AF(zsh)%E4%B8%8B%E7%94%A8%E4%BB%A3%E7%A0%81%E7%BC%96%E8%BE%91%E5%99%A8%E6%89%93%E5%BC%80%E6%96%87%E4%BB%B6%E6%88%96%E7%9B%AE%E5%BD%95/)


## ESLint 代码检查

ESLint结合编辑器实现时实校验
1. 首先安装两个插件
SublimeLinter： 所有linter的基础框架
SublimeLinter-eslint： 具体linter需要的，这里是eslint

2. 接着设置SublimeLinter使用ESLint来校验
Sublime Text --> preferences --> Package settings --> Sublime Linter --> settings - User。该按钮会打开一个配置文件，给该配置文件添加添加如下设置:
```

```

## 显示sublime的字体
view菜单下show console输入：
 `view.settings().get('font_face')`

 默认主题Monokai,默认字体Menlo

 

## Sublime Text3 + Markdown + 实时预览
### 安装过程：

* 需要两款插件：**Markdown Editing** + **MarkdownLivePreview**；
* 在Package Control → Install Package中输入两款插件的名字，找到相应插件，点击即可自动完成安装，安装完重启Sublime；
* 简单设置：Preferences → Package Settings → MarkdownLivePreview → Setting，打开后将左边default的设置代码复制到右边User栏，找到"markdown_live_preview_on_open": false,把false改为true，保存。



