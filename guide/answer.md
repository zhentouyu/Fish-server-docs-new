---
sidebarDepth: 2
---
# 新答案集合
[链接到文件储存点](https://xiyu.943689.top)
## 干啥用的
收集一些咱们平时用得到的答案(如果能收集到的话)

旧答案集合(已停止更新):  
[giteepage](https://zhentouyu.gitee.io/)微信内可以访问，但部分旧资料不全  
[cf](https://zhentouyu.pages.dev/)微信内不能访问  
非常不建议使用旧答案集合，尽管它在一些老旧的(八上及以前)答案方面仍然运作

网站服务器出现问题时，答案集合会一并崩溃。我们到时候会考虑临时替代方案。

## 怎么用
不要用IE打开答案集合中的任何页面 将会导致一些奇奇怪怪的框架问题和排版问题

[答案pdf插件(电脑端)](https://xiyu.943689.top/answer/pdfplugin.html)  
如果你使用比较主流的电脑端浏览器 (Firefox,Edge,Chrome之类)，那么你可以尝试一下这里。  
经过测试，微信、via、小米都不支持浏览器端原生支持预览pdf文件。

[答案pdf插件(js)](https://xiyu.943689.top/answer/pdfjs.html)  
如果你使用手机，请访问此处。如果你愿意的话，电脑端同样可以访问这里。

[源文件下载](https://xiyu.943689.top/answer/#filedownload)
我们把所有的pdf原文件都放在了蓝奏云。或者你可以从[我们的服务器](https://xiyu.943689.top/answer/pdf/)直接下载。

如果你想要某一本的答案/想要上传某个答案，可以通过微信或者主站留言。

## 实现
我们为了对手机端的支持，加入了pdf.js。你可以上百度搜一搜这是什么。同样的，你可以使用我们服务器上的pdf.js。我们已经更改源码，关闭了pdf.js的cors检测。

pdfplugin.html中需要浏览器支持，本质上和pdf.js一样，但调用了电脑端部分浏览器自带的pdf原生预览。