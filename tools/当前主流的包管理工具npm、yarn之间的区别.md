## 当前主流的包管理工具npm、yarn之间的区别

### Yarn
[yarn](https://yarnpkg.com/zh-Hans/)是一个新的Javascript包管理器，它由Facebook, Google, Exponent and Tilde开发者共同开发完成。Yarn 不是 NPM 的fork版本，而是它的重新设计，Yarn 定位为"**快速、可靠、安全的依赖管理工具**"，它的目标是解决团队开发中使用 NPM 遇到的问题。

* 极其快速  

> Yarn 会缓存它下载的每个包，所以无需重复下载。它还能并行化操作以最大化资源利用率，安装速度之快前所未有。 

* 特别安全

> Yarn会在每个安装包被执行前校验其完整性。

* 超级可靠

> Yarn 使用格式详尽而又简洁的 lockfile文件 和确定性算法来安装依赖，能够保证在一个系统上的运行的安装过程也会以同样的方式运行在其他系统上。

####  特点
* **离线模式** 如果你之前安装过某个包，你就可以在没有网络连接的情况下再次安装它。
* **确定性** 不管是什么顺序，在不同的机器上的依赖会以同一方式安装。
* **网络性能** Yarn可以高效地队列化请求并且避免请求瀑布化，使网络利用率最大化。
* **相同的软件包** 从 npm 安装软件包并使用相同的包管理流程。
* **网络适应** 单个请求失败不会导致安装失败，请求失败时会重试。
* **扁平模式** 解析不匹配的依赖版本为一个单一的版本来避免导致多个版本。

#### NPM 一些潜在的问题:

* 嵌套依赖 (npm 3.0版本已修复)
* 串行安装
* 单一个 package 来源（npmjs.com）
* 需要网络来安装软件包（尽管我们可以创建一个临时缓存）
* 允许程序包在安装时运行代码（不利于安全性）
* 不确定的包状态（不能确定项目的所有副本使用相同的包版本）

#### Yarn 解决方案:
* 单依赖包结构: 可以使用单一版本的依赖包，安装更快速，占用磁盘空间更少
* 并行安装: 并行下载依赖包，减少下载时间
* 多个包来源: Yarn 读取和安装 npmjs.com 和 Bower安装包，如果有个渠道down掉了，可以从另一个渠道下载包并安装
* 自动重试: 单个网络请求失败不会导致安装失败，请求在失败后会重试，这解决了由于临时网络问题而产生的构建异常
* 兼容 NPM: 从 NPM 切换到 Yarn 不需要做特殊兼容处理
* yarn.lock: 用来管理 javascript 包，这个对于开发团队来说可能是最有用的功能了。 在package.json中，依赖的包版本可以被指定为一个范围，也可以不带版本号。这个可能会导致一种问题，团队内不同开发人员使用不同版本的软件包。我们都知道，复现环境的能力与完全相关的依赖关系对于高校的调试和新团队人员的融入至关重要。从包管理器（Bundler）中借鉴，Yarn 创建了 yarn.lock文件，用来记录项目使用每个包的确切版本。当将此文件提交至 SVN、GIT 等代码维护工具，可以保证项目的所有开发人员共享一套依赖包的版本号。


#### Yarn 的安装
```
brew install yarn

/* Yarn 团队不推荐 */
npm install -g yarn 
```
#### NPM CLI vs Yarn CLI

* 初始化项目

```
npm  init
yarn init
```
* 从 package.json 安装依赖

```
npm install
yarn
```
* 安装指定包到依赖或者开发依赖

```
npm install --save [package]
yarn add [package]

npm install --save-dev [package]
yarn add [package] [--dev/-D]
```
* 安装包到全局

```
npm install --global [package]
yarn global add [package]
```
* 安装指定版本的包

```
npm install [package]@[version]
yarn add [package]@[version]
```
* 重新下载所有包

```
npm reubild
yarn install --force
```
* 卸载包

```
npm uninstall [package]

npm uninstall --save [package]
yarn remove [package]

npm uninstall --save-dev [package]
```
* 升级包

```
rm -rf node_modules && npm install
yarn upgrade
```

相比 NPM，Yarn解决了不确定依赖、网络问题、并行下载等问题。

### NPM
[npm](https://www.npmjs.com/)是Node.js能够如此成功的主要原因之一。npm团队做了很多的工作，以确保npm保持向后兼容，并在不同的环境中保持一致。

npm是围绕着[语义版本控制（semver）](https://semver.org/)的思想而设计的，下面是从他们的网站摘抄过来的：
给定一个版本号：主版本号.次版本号.补丁版本号， 以下这三种情况需要增加相应的版本号:

* 主版本号： 当API发生改变，并与之前的版本不兼容的时候
* 次版本号： 当增加了功能，但是向后兼容的时候
* 补丁版本号： 当做了向后兼容的缺陷修复的时候

npm使用一个名为`package.json`的文件，用户可以通过`npm install --save`命令把项目里所有的依赖项保存在这个文件里。

例如，运行`npm install --save lodash`会将以下几行添加到`package.json`文件中。
```
"dependencies": {
    "lodash": "^4.17.4"
}
```
请注意，在版本号lodash之前有个**`^`字符**。这个字符告诉npm，安装主版本等于4的任意一个版本即可。所以如果我现在运行npm进行安装，npm将安装lodash的主版本为4的最新版，可能是 lodash@4.25.5（**@是npm约定用来确定包名的指定版本的**）。你可以在此处查看所有支持的字符：https://docs.npmjs.com/misc/semver。

理论上，次版本号的变化并不会影响向后兼容性。因此，安装最新版的依赖库应该是能正常工作的，而且能引入自4.17.4版本以后的重要错误和安全方面的修复。

但是，另一方面，即使不同的开发人员使用了相同的package.json文件，在他们自己的机器上也可能会安装同一个库的不同种版本，这样就会存在潜在的难以调试的错误和“在我的电脑上…”的情形。

大多数npm库都严重依赖于其他npm库，这会导致嵌套依赖关系，并增加无法匹配相应版本的几率。

虽然可以通过`npm config set save-exact true`命令关闭在版本号前面使用^的默认行为，但这个只会影响顶级依赖关系。由于每个依赖的库都有自己的`package.json`文件，而在它们自己的依赖关系前面可能会有^符号，所以无法通过`package.json`文件为嵌套依赖的内容提供保证。

为了解决这个问题，npm提供了`shrinkwrap`命令。此命令将生成一个`npm-shrinkwrap.json`文件，为所有库和所有嵌套依赖的库记录确切的版本。
然而，即使存在`npm-shrinkwrap.json`这个文件，npm也只会锁定库的版本，而不是库的内容。即便npm现在也能阻止用户多次重复发布库的同一版本，但是npm管理员仍然具有强制更新某些库的权力。

这是引用自`shrinkwrap`文档的内容：
如果你希望锁定包中的特定字节，比如是为了保证能正确地重新部署或构建，那么你应该在源代码控制中检查依赖关系，或者采取一些其他的机制来校验内容，而不是靠校验版本。

`npm 2`会安装每一个包所依赖的所有依赖项。如果我们有这么一个项目，它依赖项目A，项目A依赖项目B，项目B依赖项目C，那么依赖树将如下所示：
```
node_modules
- package-A
-- node_modules
--- package-B
----- node_modules
------ package-C
-------- some-really-really-really-long-file-name-in-package-c.js
```
这个结构可能会很长。这对于基于Unix的操作系统来说只不过是一个小烦恼，但对于Windows来说却是个破坏性的东西，因为有很多程序无法处理超过260个字符的文件路径名。
`npm 3`采用了扁平依赖关系树来解决这个问题，所以我们的3个项目结构现在看起来如下所示：
```
node_modules
- package-A
- package-B
- package-C
-- some-file-name-in-package-c.js
```
这样，一个原来很长的文件路径名就从`./node_modules/package-A/node_modules/package-B/node-modules/some-file-name-in-package-c.js变成了/node_modules/some-file-name-in-package-c.js`。

你可以在[这里](https://docs.npmjs.com/how-npm-works/npm3)阅读到更多有关`NPM 3`依赖解析的工作原理。

这种方法的缺点是，npm必须首先遍历所有的项目依赖关系，然后再决定如何生成扁平的node_modules目录结构。npm必须为所有使用到的模块构建一个完整的依赖关系树，这是一个耗时的操作，是[npm安装速度慢的一个很重要的原因](https://github.com/npm/npm/issues/8826)。

由于我没有详细了解npm的变化，所以我想当然的以为每次运行`npm install`命令时，NPM都得从互联网上下载所有内容。

但是，我错了，npm是有本地缓存的，它保存了已经下载的每个版本的压缩包。本地缓存的内容可以通过`npm cache ls`命令进行查看。本地缓存的设计有助于减少安装时间。

总而言之，npm是一个成熟、稳定、并且有趣的包管理器。

### Yarn
Yarn发布于2016年10月。这个项目由一些高级开发人员维护，包括了Sebastian McKenzie（[Babel.js](https://babeljs.io/)）和Yehuda Katz（[Ember.js](https://www.emberjs.com/)、[Rust](https://www.rust-lang.org/en-US/)、[Bundler](http://bundler.io/)等）。

Yarn一开始的主要目标是解决上一节中描述的由于语义版本控制而导致的npm安装的不确定性问题。虽然可以使用`npm shrinkwrap`来实现可预测的依赖关系树，但它并不是默认选项，而是取决于所有的开发人员知道并且启用这个选项。

Yarn采取了不同的做法。每个yarn安装都会生成一个类似于`npm-shrinkwrap.json`的`yarn.lock`文件，而且它是默认创建的。除了常规信息之外，`yarn.lock`文件还包含要安装的内容的校验，以确保使用的库的版本相同。

由于yarn是崭新的经过重新设计的npm客户端，它能让开发人员并行化处理所有必须的操作，并添加了一些其他改进，这使得运行速度得到了显著的提升，整个安装时间也变得更少。我估计，速度提升是yarn受欢迎的主要原因。

像npm一样，yarn使用本地缓存。与npm不同的是，yarn无需互联网连接就能安装本地缓存的依赖项，它提供了离线模式。这个功能在2012年的npm项目中就被提出来过，但一直没有实现。

yarn还提供了一些其他改进，例如，它允许合并项目中使用到的所有的包的许可证，这一点让人很高兴。

一个有趣的事情是，yarn文档的态度开始针对npm发生改变，因为yarn项目变得流行起来。
最开始的yarn公告是这么介绍yarn的安装的：

```
//最简单的入门方法是运行：
 npm install -g yarn
yarn *
```
现在的yarn安装页面是这么说的：
注意：通常情况下不建议通过npm进行安装。npm安装是非确定性的，程序包没有签名，并且npm除了做了基本的SHA1哈希之外不执行任何完整性检查，这给安装系统程序带来了安全风险。
基于这些原因，强烈建议你通过最适合于你的操作系统的安装方法来安装yarn。


yarn是一个更安全的选择，但是pnpm可能是一些测试用例的更好的选择。例如，它可以在运行大量集成测试并希望尽可能快地安装依赖关系的中小型团队中发挥作用。
npm仍然提供了一个非常有用的解决方案，支持大量的测试用例。大多数开发人员使用原始npm客户端仍然可以做得很好。





