## go work

不知道是啥

会生成一个 `go.work` 写的不对会编译不过

不是相对路径

```
go 1.20

use (
  .
)
``` 

这样弄了


## go get

话说version怎么逻辑变了
不再是跟着tag走了

[go install](#go-install)

## go install

会下载 binary

https://www.reddit.com/r/golang/comments/x722i0/go_install_vs_go_mod_tidy_vs_go_get/