---
sidebarDepth: 2
---
# Minecraft服务器连接方式

<!--## 地址
我们使用Java版1.17.1。如果你想要访问我们的服务端，你可以使用下方列表中任意一个加入我们的服务器。
- ~~xiyu.943689.top(最慢，最不稳定)~~在240315被删除
- ay.943689.xyz
- ay.943689.top
- ipv6.943689.xyz(理论最快，但需要ipv6)-->
<!--由于更改了连接方式，地址已被弃用-->

首先在主站注册一个账号。这是后续大多数重要操作来说必要的。

我们使用frpc的stcp类型连接。  
你可以[在此](/pardon/download.php)下载frpc，并按下列要求操作：


1. 解压，内部应该包含3个文件：start.bat,frpc.exe,frpc.toml。  
如果你看不到文件后缀，请百度"Windows如何显示文件扩展名"。  
如果你的frpc被杀毒软件删掉了(显示器右下角可能会有类似的报毒)，请把它恢复并且加入白名单。

<!--2. (使用你喜欢的程序比如记事本)打开frpc.toml。你需要修改其中的第5,6行内容。
```
serverAddr = "**.**.**.**"
serverPort = ****
auth.token = "aaaaaaa"
loginFailExit = false
user = "<更改这里>"
metadatas.token = "<更改这里>"
```
你可以从[这里](/pardon/getuser.php)获取这两个值，它们分别对应frpuser和frptoken。  
需要你先在主站注册一个账号，然后[留言](/issue)，附上你的主站用户名以及想要的user和token，可以随便写。  
当你在前面的链接中看到你的user和token时，说明你的账号已经被注册到frp中，可以使用上面的方法来正常使用。  
或者你可以**临时**使用这个账号(后期可能删除)
```
user = "pub"  
metadatas.token = "pubtest"
```-->
2. *不要挂梯子*，双击点开start.bat。略有耐心。打开的黑窗不要关闭，挂后台即可。  
看到里面输出`visitor added: [mc-stcp]`类似字样时，证明你已经连接到了服务器。

3. 在mc的服务器列表中添加一个地址为127.0.0.1的服务器，然后进入服务器。

4. 玩得愉快！当你下线时，就可以关闭刚才的黑窗了。



::: tip
如果你在[test-ipv6.com](https://test-ipv6.com)的测试结果为10/10，那么你也可以通过ipv6.943689.xyz直接进入服务器
:::

如果你愿意的话，你也可以联系Fish加入我们的微信通知群获取更好的帮助。