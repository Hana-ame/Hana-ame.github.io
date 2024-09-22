# 一个用来备份文件的小工具

每隔一段时间检查一下文件是否被改变，如果改变则生成一份改变后的备份。

[下载地址](https://upload.moonchan.xyz/api/01LLWEUU3OWKRISJGDAZF3UNHALBE4RAG4/backup-file.60s.exe)

![](https://upload.moonchan.xyz/api/01LLWEUU7LRTRNF2TKWZF2GTVTRII423PC/image.png)

使用方法是将文件拖到图标上（与将文件移入文件夹的操作相同）  
文件名的60s可以更改为所需的间隔时间  
例如1h 15m 1s等  
不建议备份太大的文件  

允许的文件名

```
backup-file.1h.60s.exe // 3660s
backup-file.1h.exe // 3600s
backup-file.1m.exe // 60s
什么傻逼玩意.1s.exe // 1s
什么傻逼玩意.exe // 60s, 默认值
```


[source code](https://pastebin.com/C3xxRp0X)