# 微信小程序

## 小程序登录
小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系。

登录流程时序
![微信小程序登录流程时序](http://p4z4c6ik8.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%99%BB%E5%BD%95%E6%B5%81%E7%A8%8B%E6%97%B6%E5%BA%8F.jpeg)

说明：
1. 小程序调用wx.login() 获取 **临时登录凭证code** ，并回传到开发者服务器。
2. 开发者服务器以code换取 **用户唯一标识openid 和 会话密钥session_key**。

之后开发者服务器可以根据用户标识来生成**自定义登录态**，用于后续业务逻辑中前后端交互时识别用户身份。

**wx.login(OBJECT)**
调用接口wx.login() 获取**临时登录凭证（code）**

[OBJECT参数说明](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxchecksessionobject)
success返回参数说明

参数名 | 类型|说明
------- | -------|---
errMsg|String| 调用结果
code|String|用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 openid 和 session_key 等信息

示例代码
```
//app.js
App({
  onLaunch: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  }
})
```

**登录凭证校验**
临时登录凭证校验接口是一个 HTTPS 接口，开发者服务器使用 **临时登录凭证code** 获取 session_key 和 openid 等。

**注意：**

1.	会话密钥session_key 是对用户数据进行加密签名的密钥。为了应用自身的数据安全，开发者服务器**不应该把会话密钥下发到小程序，也不应该对外提供这个密钥**。
2.	UnionID 只在满足一定条件的情况下返回。具体参看UnionID机制说明
	
**接口地址：**
`https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code`

请求参数 | 必填 | 说明
------- | ----|---
appid | 是|小程序唯一标识
secret|是|小程序的 app secret
js_code|是|登录时获取的 code
grant_type|是|填写为 authorization_code

返回说明
```
//正常返回的JSON数据包
{
      "openid": "OPENID",//用户唯一标识
      "session_key": "SESSIONKEY",//会话密钥
}

//满足UnionID返回条件时，返回的JSON数据包
{
    "openid": "OPENID",
    "session_key": "SESSIONKEY",
    "unionid": "UNIONID"//用户在开放平台的唯一标识符
}
//错误时返回JSON数据包(示例为Code无效)
{
    "errcode": 40029,
    "errmsg": "invalid code"
}
```

