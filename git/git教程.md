## Git 与 SVN区别

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

Git 与 SVN 区别点：

**1、Git 是分布式的，SVN 不是**：这是 Git 和其它非分布式的版本控制系统，例如 SVN，CVS 等，最核心的区别。

**2、Git 把内容按元数据方式存储，而 SVN 是按文件：**所有的资源控制系统都是把文件的元信息隐藏在一个类似 .svn、.cvs 等的文件夹里。

**3、Git 分支和 SVN 的分支不同：**分支在 SVN 中一点都不特别，其实它就是版本库中的另外一个目录。

**4、Git 没有一个全局的版本号，而 SVN 有：**目前为止这是跟 SVN 相比 Git 缺少的最大的一个特征。

**5、Git 的内容完整性要优于 SVN：**Git 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。



## Git安装配置

在使用Git前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac和 Windows 平台上运行。

Git 各平台安装包下载地址：[http://git-scm.com/downloads](http://git-scm.com/downloads)

### Git 配置

Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。

这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：

- `/etc/gitconfig` 文件：系统中对所有用户都普遍适用的配置。若使用 `git config` 时用 `--system` 选项，读写的就是这个文件。
- `~/.gitconfig` 文件：用户目录下的配置文件只适用于该用户。若使用 `git config` 时用 `--global` 选项，读写的就是这个文件。

- 当前项目的 Git 目录中的配置文件（也就是工作目录中的 `.git/config` 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 `.git/config` 里的配置会覆盖 `/etc/gitconfig` 中的同名变量。



#### 用户信息

配置个人的用户名称和电子邮件地址：

```shell
$ git config --global user.name "dragon"
$ git config --global user.email "dragon@example.com"
```

如果用了 **`--global`** 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。

如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 `--global` 选项重新配置即可，新的设定保存在当前项目的 `.git/config` 文件里。

#### 文本编辑器

设置Git默认使用的文本编辑器, 一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：:

```shell
$ git config --global core.editor emacs
```

#### 查看配置信息

要检查已有的配置信息，可以使用 git config --list 命令：

```shell
$ git config --list
user.name=dragon
user.email=dragon@example.com
```

有时候会看到重复的变量名，那就说明它们来自不同的配置文件（比如 `/etc/gitconfig` 和 `~/.gitconfig`），不过最终 Git 实际采用的是最后一个。

## Git工作流程



## Git 工作区、暂存区和版本库

### 基本概念

- **工作区：**电脑里能看到的目录。
- **暂存区：**英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- **版本库：**工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

#### 版本回退





#### 撤销修改

```shell
$ "git checkout -- <file>..." to discard changes in working directory
```

`git checkout -- file` 可以丢弃工作区的修改。

`git checkout -- file`命令中的`--`很重要，没有`--`，就变成了“切换到另一个分支”的命令。





```shell
# 这个命令有疑问，需要求证
$ git checkout HEAD <file>
```





```shell
$ "git reset HEAD <file>..." to unstage
```

`git reset HEAD <file>` 把暂存区的修改撤销掉（unstage）。

`git reset`命令既可以回退版本，也可以撤销暂存区的修改。当我们用`HEAD`时，表示最新的版本。





## Git 创建仓库

### git init

Git 使用 **git init** 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行。

在执行完成 **git init** 命令后，Git 仓库会生成一个 `.git` 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变（不像 SVN 会在每个子目录生成 `.svn` 目录，Git 只在仓库的根目录生成 `.git` 目录）。

#### 使用方法

使用当前目录作为Git仓库，我们只需使它初始化。

```shell
git init
```

该命令执行完后会在当前目录生成一个 `.git` 目录。

使用我们指定目录作为Git仓库。

```
git init dirname
```

初始化后，会在 `dirname` 目录下会出现一个名为 `.git` 的目录，所有 Git 需要的数据和资源都存放在这个目录中。

### git clone

我们使用 **git clone** 从现有 Git 仓库中拷贝项目（类似 **svn checkout**）。

克隆仓库的命令格式为：

```shell
git clone <repo>
```

如果我们需要克隆到指定的目录，可以使用以下命令格式：

```shell
git clone <repo> <directory>
```

**参数说明：**

- **repo:**Git 仓库。
- **directory:**本地目录。

执行该命令后，Git 会按照你提供的 仓库地址 所指示的项目的名称创建你的本地项目目录，其中包含一个 `.git` 的目录，用于保存下载下来的所有版本记录。

如果要自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：`directory`

## Git 基本操作

Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。

### git init

用 `git init` 在目录中创建新的 Git 仓库。在目录中执行 `git init`，就可以创建一个 Git 仓库了。

### git clone

用 `git clone` 拷贝一个 Git 仓库到本地。

```shell
$ git clone https://github.com/username/reponame.git
```

克隆完成后，在当前目录下会生成一个 `reponame` 目录。默认情况下，Git 会按照你提供的 URL 所指示的项目的名称创建你的本地项目目录。

如果我们需要克隆到指定的目录，可以使用以下命令格式：

```shell
$ git clone https://github.com/username/reponame.git <directory>
```

如果要自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：`directory`

### git add

`git add` 命令可将文件添加到暂存区



### git status

`git status` 命令用于查看项目的当前状态。加了 `-s` 参数，以获得简短的结果输出。



### git diff





### git commit



### git rm





### git mv





## Git 分支管理

创建分支命令：

```shell
$ git branch <branchname>
```

切换分支命令:

```shell
$ git checkout <branchname>
```

当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容， 所以多个分支不需要多个目录。

列出分支基本命令：

```shell
$ git branch
```

没有参数时，**git branch** 会列出你在本地的分支。

当你执行 **git init** 的时候，缺省情况下 Git 就会为你创建 **master** 分支。

创建新分支并立即切换到该分支:

```shell
$ git checkout -b <branchname>
```

删除分支命令：

```shell
$ git branch -d <branchname>
```

合并分支命令:

```shell
$ git merge <branchname>
```

将 `branchname` 分支合并到当前分支中。



## Git 查看提交历史

用 `git log` 命令查看提交历史。加 `--oneline` 参数来查看历史记录的简洁的版本。加 `--graph` 参数开启拓扑图。加 **`--reverse`**  参数来逆向显示所有日志。加 `--author` 查找指定用户的提交日志。

## Git 标签

如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 `git tag` 给它打上标签。

查看所有标签：

```shell
$ git tag
```

给最新一次提交打上（HEAD）"v1.0"的标签:

```shell
$ git tag v1.0
```

给指定commit打标签：

```shell
$ git tag <tagname> <commit_id>
```

给commit_id打标签tagname。

删除标签：

```shell
$ git tag -d <tagname>
```

## Git 远程仓库



### 添加远程库



### 查看当前的远程库

```shell
$ git remote
# 执行时加上 -v 参数，你还可以看到每个别名的实际链接地址。
$ git remote -v
```



