## 什么是 WebRTC ？

WebRTC 是由一家名为 Gobal IP Solutions，简称 GIPS 的瑞典公司开发的。Google 在 2011 年收购了 GIPS，并将其源代码开源。然后又与 IETF 和 W3C 的相关标准机构合作，以确保行业达成共识。其中：

- Web Real-Time Communications (WEBRTC) W3C 组织：定义浏览器 API。
- Real-Time Communication in Web-browsers (RTCWEB) IETF 标准组织：定义其所需的协议，数据，安全性等手段。

简单来说，WebRTC 是一个可以在 Web 应用程序中实现音频，视频和数据的实时通信的开源项目。在实时通信中，音视频的采集和处理是一个很复杂的过程。比如音视频流的编解码、降噪和回声消除等，但是在 WebRTC 中，这一切都交由浏览器的底层封装来完成。我们可以直接拿到优化后的媒体流，然后将其输出到本地屏幕和扬声器，或者转发给其对等端。

我们可以在不需要任何第三方插件的情况下，实现一个浏览器到浏览器的点对点（P2P）连接，从而进行音视频实时通信。当然，WebRTC 提供了一些 API 供我们使用，在实时音视频通信的过程中，我们主要用到以下三个：

- getUserMedia：获取音频和视频流（MediaStream）
- RTCPeerConnection：点对点通信
- RTCDataChannel：数据通信

不过，虽然浏览器给我们解决了大部分音视频处理问题，但是从浏览器请求音频和视频时，我们还是需要特别注意流的大小和质量。因为即便硬件能够捕获高清质量流，CPU 和带宽也不一定可以跟上，这也是我们在建立多个对等连接时，不得不考虑的问题。