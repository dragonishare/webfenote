## javascript获取当前url中所有的参数，并返回参数对象

```javascript
function getUrlParams(url) {
      var url = url;//window.location.href;
      var paramsObj = {};
      if(url.indexOf("?") != -1) {
            var strArr = url.split("?")[1];//获取url"?"后的字符串
            var tmpStrArr = str.split("&");
            for (var i = 0, len = tmpStrArr.length; i < len; i++) {
                  paramsObj[tmpStrArr[i].split("=")[0]] = tmpStrArr[i].split("=")[0];
            }
      }
      return paramsObj;
}
```

