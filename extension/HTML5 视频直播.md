# HTML5 视频直播 
目前 WEB 上主流的视频直播方案有 HLS 和 RTMP，移动 WEB 端目前就只有 HLS 能用。

移动端的 FLV 方案[HTML5 FLV Player]（https://github.com/Bilibili/flv.js）


## HTTP Live Streaming
HTTP Live Streaming（简称 HLS）是一个基于 HTTP 的视频流协议，由 Apple 公司实现，Mac OS 上的 QuickTime、Safari 以及 iOS 上的 Safari 都能很好的支持 HLS，高版本 Android 也增加了对 HLS 的支持。一些常见的客户端如：MPlayerX、VLC 也都支持 HLS 协议。

HLS 协议基于 HTTP，非常简单。一个提供 HLS 的服务器需要做两件事：

* 编码：以 H.263 格式对图像进行编码，以 MP3 或者 HE-AAC 对声音进行编码，最终打包到 MPEG-2 TS（Transport Stream）容器之中；
* 分割：把编码好的 TS 文件等长切分成后缀为 ts 的小文件，并生成一个 .m3u8 的纯文本索引文件；

浏览器使用的是 m3u8 文件。m3u8 跟音频列表格式 m3u 很像，可以简单的认为 m3u8 就是包含多个 ts 文件的播放列表。播放器按顺序逐个播放，全部放完再请求一下 m3u8 文件，获得包含最新 ts 文件的播放列表继续播，周而复始。整个直播过程就是依靠一个不断更新的 m3u8 和一堆小的 ts 文件组成，m3u8 必须动态更新，ts 可以走 CDN。一个典型的 m3u8 文件格式如下：

``` bash
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=200000
gear1/prog_index.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=311111
gear2/prog_index.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=484444
gear3/prog_index.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1, BANDWIDTH=737777
gear4/prog_index.m3u8
```

可以看到 HLS 协议本质还是一个个的 HTTP 请求 / 响应，所以适应性很好，不会受到防火墙影响。但它也有一个致命的弱点：**延迟现象非常明显**。如果每个 ts 按照 5 秒来切分，一个 m3u8 放 6 个 ts 索引，那么至少就会带来 30 秒的延迟。如果减少每个 ts 的长度，减少 m3u8 中的索引数，延时确实会减少，但会带来更频繁的缓冲，对服务端的请求压力也会成倍增加。所以只能根据实际情况找到一个折中的点。

对于不支持 m3u8 的浏览器，比如 PC / Mac 上的 Chrome，需要借助 Flash 来实现了。网上有一些较为成熟的方案可以直接用，如：[Sewise Player](https://github.com/jackzhang1204/sewise-player)（免费）、[JW Player](https://support.jwplayer.com/customer/portal/articles/1403635-media-format-reference#streaming)（收费）。

实际上，HLS 除了提到过的**延迟很大**这个缺点之外，在 iOS 的 Safari 浏览器中还**只能全屏播放，也无法做到自动播放**，这个是 iOS 系统对 Video 标签统一做的限制。有没有什么办法解决这些问题呢？

## Real Time Messaging Protocol
Real Time Messaging Protocol（简称 RTMP）是 Macromedia 开发的一套视频直播协议，现在属于 Adobe。这套方案需要搭建专门的 RTMP 流媒体服务如 Adobe Media Server，并且在浏览器中只能使用 Flash 实现播放器。它的实时性非常好，延迟很小，但**无法支持移动端 WEB 播放**是它的硬伤。

前面提到的 JW Player 能很好的播放采用 RTMP 协议的直播服务。


## 参考资料
* [HTML5 视频直播](https://imququ.com/post/html5-live-player-1.html)


使用腾讯云的解决方案
