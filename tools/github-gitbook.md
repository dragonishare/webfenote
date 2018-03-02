## gitbook和github双向同步

### 双向同步设置
Sync your content with GitHub;Store your content on GitHub.com;
gitbook上编辑后的内容，会自动同步到github上；github上编辑后的内容，会自动同步到github上；  
这样既可以通过gitbook编辑内容，又可以通过本地编辑后push到github；
* **第一步：** 在gitbook上Create a new book，然后在github上新建一个repo用来存放书籍源码
* **第二步：** 在gitbook上新建书籍的settings里进行如下设置：
![](/assets/gitbook_github1.jpeg)

* **第三步：success!**

### 书籍文件介绍
* **SUMMARY.md: ** 用于在gitbook上或者通过gitbook命令来生成目录框架的文件；
* **README.md: ** gitbook和github查看项目是，默认的说明文件；

### 在github上展示电子书设置
由于通过github地址在浏览器可以直接对md文件进行预览，因此不需要新建gh-pages存放通过gitbook命令生成的_book下的静态文件；
设置步骤：
* **第一步：** 在github对应书籍仓库的settings里进行如下设置：
Use the **master branch** for GitHub Pages
![](/assets/gitbook_github2.png)
* **第二步：** 在README.md里编辑目录（把SUMMARY.md文件里的内容复制过来即可）
* **第三步：** 设置完成后，就可以访问md文件版的项目github pages了







