# nginx

配配置。

`default_server`
这是啥
本来是放在 listen 80 后面的
作为default使用，不命中其他所有server时。

`listen 80 http2;`
好像行不通。报错http0.9

**开目录**
`autoindex on;`
> #for enable directory listing


**proxy for https**

see nginx-config 80

反正蛮好的，但是好像因为缓存的关系，大文件会下载不下来

[set buffer](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)

好像行了，测试下来稳定性是不怎么样。


