## 路由

当用户使用 `http://10.0.0.1/about` 来访问该页面时，Web 服务会接收到这个请求，然后会解析 URI 中的路径 `/about`，在 Web 服务的程序中，该路径对应着相应的处理逻辑，程序会把请求交给路径所对应的处理逻辑，这样就完成了一次「路由分发」，这个分发就是通过「路由」来完成的。

## 前端路由

在 HTML5 的 `history` API 出现之前，前端的路由都是通过 `hash` 来实现的，`hash` 能兼容低版本的浏览器

Web 服务并不会解析 `hash`，也就是说 `#` 后的内容 Web 服务都会自动忽略，但是 JavaScript 是可以通过 `window.location.hash` 读取到的，读取到路径加以解析之后就可以响应不同路径的逻辑处理。

history 是 HTML5 才有的新 API，可以用来操作浏览器的 session history (会话历史)



## React-router4 

* BrowserRouter/HashRouter
* Route
* Link
* Switch
* Redirect


