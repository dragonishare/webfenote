# MacOS Docker 安装

## Homebrew 安装

macOS 我们可以使用 Homebrew 来安装 Docker。
Homebrew 的 Cask 已经支持 Docker for Mac，因此可以很方便的使用 Homebrew Cask 来进行安装：

```shell
# 安装命令
brew cask install docker

==> Satisfying dependencies
==> Downloading https://download.docker.com/mac/stable/28905/Docker.dmg
######################################################################## 100.0%
==> Verifying SHA-256 checksum for Cask 'docker'.
==> Installing Cask docker
==> Moving App 'Docker.app' to '/Applications/Docker.app'.
🍺  docker was successfully installed!
```
从应用中找到 Docker 图标并点击运行，点击 Next，可能会询问你的 macOS 登陆密码，你输入即可。之后会弹出一个 Docker 运行的提示窗口，状态栏上也有有个小鲸鱼的图标（![img](assets/1515480613-2248-whale-x.png)）

## 手动下载安装

如果需要手动下载，请点击以下链接下载 Stable 或 Edge 版本的 Docker for Mac。
如同 macOS 其它软件一样，安装也非常简单，双击下载的 .dmg 文件，然后将鲸鱼图标拖拽到 Application 文件夹即可。

![img](assets/1515480386-7270-1293367-9516b2edf79deee7.png)

从应用中找到 Docker 图标并点击运行。可能会询问 macOS 的登陆密码，输入即可。

点击顶部状态栏中的鲸鱼图标会弹出操作菜单。
![image-20181124105829047](assets/image-20181124105829047.png)

刚安装完，可能会看到安装成功的界面

启动终端后，通过命令可以检查安装后的 Docker 版本
```shell
~ docker version
Client: Docker Engine - Community
 Version:           18.09.0
 API version:       1.39
 Go version:        go1.10.4
 Git commit:        4d60db4
 Built:             Wed Nov  7 00:47:43 2018
 OS/Arch:           darwin/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          18.09.0
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.4
  Git commit:       4d60db4
  Built:            Wed Nov  7 00:55:00 2018
  OS/Arch:          linux/amd64
  Experimental:     false
  
~ docker --version
Docker version 18.09.0, build 4d60db4

~ docker -v
Docker version 18.09.0, build 4d60db4
```
## 镜像加速

鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们需要配置加速器来解决，网易的镜像地址：`http://hub-mirror.c.163.com`

在顶部状态栏点击 鲸鱼图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址即可。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。

![image-20181124111537036](assets/image-20181124111537036.png)

之后我们可以通过 docker info 来查看是否配置成功
```shell
~ docker info
...
Registry Mirrors:
 http://hub-mirror.c.163.com/
Live Restore Enabled: false
Product License: Community Engine
```

# Docker 使用

## 常用命令

### 查看版本信息

```bash
# 查看docker相关信息
docker info

# 查看版本信息
docker -v 或者 docker --version

# 查看Client和Server版本信息
docker version
```

### docker run 命令

Docker 允许你在容器内运行应用程序， 使用 `docker run`命令来在容器内运行一个应用程序。

`docker run ubuntu:15.10 /bin/echo "Hello world"`

各个参数解析：

 * docker: Docker 的二进制执行文件。
 * run:与前面的 docker 组合来运行一个容器。
 * ubuntu:15.10指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
 * /bin/echo "Hello world": 在启动的容器里执行的命令

以上命令完整的意思可以解释为：Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。

`docker run -i -t ubuntu:15.10 /bin/bash`

各个参数解析：

 * -t:在新容器内指定一个伪终端或终端
 * -i:允许你对容器内的标准输入 (STDIN) 进行交互
 * -d:让容器在后台运行
 * -P:将容器内部端口随机映射到主机的端口
 * -p:将容器内部端口绑定到指定的主机端口

此时我们已进入一个 ubuntu15.10系统的容器

在容器中运行命令 cat /proc/version和ls分别查看当前系统的版本信息和当前目录下的文件列表

```bash
root@37017c93983f:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@37017c93983f:/# cat /proc/version
Linux version 4.9.125-linuxkit (root@659b6d51c354) (gcc version 6.4.0 (Alpine 6.4.0) ) #1 SMP Fri Sep 7 08:20:28 UTC 2018
root@37017c93983f:/#
```
通过运行`exit`命令或者使用`CTRL+D`来退出容器


启动容器（后台模式）: 使用以下命令创建一个以进程方式运行的容器
`docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"`

### 查看命令

```bash
# 查看当前运行的容器
docker ps

# 查看所有容器，包括停止的
docker ps -a

# 查看最新创建的容器，只列出最后创建的
docker ps -l

# 查看网络端口
docker port [容器ID|容器名]

# 查看容器内部的标准输出
docker logs [容器ID|容器名]

# 查看容器内部运行的进程
docker top [容器ID|容器名]

# 查看 Docker 的底层信息。它会返回一个 JSON 文件记录着 Docker 容器的配置和状态信息
docker inspect [容器ID|容器名]
```

### docker stop 命令

 使用`docker stop` 命令来停止容器

 `docker stop [容器ID|容器名]`

### docker start 命令

 已经停止的容器，可以使用命令 `docker start [容器ID|容器名]` 来启动
 正在运行的容器，可以使用 `docker restart [容器ID|容器名]` 命令来重启

### docker rm 命令

 ```bash
 # 删除容器，删除容器时，容器必须是停止状态
 docker rm [容器ID|容器名]
 
 # 删除所有的容器
 docker rm $(docker ps -aq)
 ```

## Docker容器使用

### Docker 客户端

 直接输入 `docker` 命令来查看到 Docker 客户端的所有命令选项
 通过命令 `docker command --help` 更深入的了解指定的 Docker 命令使用方法

### 容器命名

当创建一个容器的时候，docker会自动对它进行命名。另外，也可以使用--name标识来命名容器
`docker run -d -P --name [容器名] training/webapp python app.py`

## Docker 镜像使用

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载

### 列出镜像列表

 ```bash
 # 列出本地主机上的镜像
~ docker images
REPOSITORY      TAG           IMAGE ID            CREATED             SIZE
ubuntu          15.10         9b9cb95443b5        2 years ago         137MB
training/webapp latest        6fae60ef3446        3 years ago         349MB
 ```

各个选项说明:
 * REPOSITORY：表示镜像的仓库源
 * TAG：镜像的标签
 * IMAGE ID：镜像ID
 * CREATED：镜像创建时间
 * SIZE：镜像大小

同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本，如ubuntu仓库源里，有15.10、14.04等多个不同的版本，我们使用 REPOSITORY:TAG 来定义不同的镜像

 ```bash
  ~ docker run -t -i ubuntu:15.10 /bin/bash
  root@6939a46db5bb:/#
 ```

如果不指定一个镜像的版本标签，例如只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像

### 获取一个新的镜像（下载镜像）

当我们在本地主机上使用一个不存在的镜像时 Docker 就会自动下载这个镜像。如果我们想预先下载这个镜像，我们可以使用 `docker pull 镜像名` 命令来下载它

### 查找镜像

 ```bash
# 搜索镜像
docker search 镜像名
 ```

# Docker软件安装

## Docker 安装 Nginx

### docker pull nginx(推荐)


