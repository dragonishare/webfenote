# react项目框架搭建步骤

[TOC]

通过官方脚手架create-react-app配合 redux 、react-router-dom搭建一个项目框架


## 项目目录组织



### 项目框架页面拆分

#### 项目主入口文件index.js


```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './redux/Store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


import App from './pages/App/App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
```

#### redux的Store.js

```
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import reduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./Modules/Reducers";

//官方推荐线上环境时用createBrowserHistory，开发环境的时候可以使用createHashHistory，hash方式会在URL加上#
//
export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    reduxThunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store;
```



#### redux的Reducers.js

```
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  router: routerReducer,
});

export default rootReducer;
```



#### 组件主入口文件App.js


```

```


## 登录和主页跳转功能demo实战





