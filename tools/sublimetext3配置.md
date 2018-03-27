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

#### 其他插件推荐

* Package Control
* Terminal
* SublimeCodeIntel
* A File Icon
* SideBarEnhancements
* JsFormat
* Emmet
* DocBlockr
* Boxy Theme






