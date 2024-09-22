# golang sqlite 错误记录 bad parameter or other API misuse: not an error (21)

```go
sql3 := `SELECT * from user where url=? ;
`
```

然后db.QueryRow(sql2, host)会爆出bad parameter or other API misuse: not an error (21)错误，解决方法，把 最后一个 ` 之前的回车符号删除变成

```go
sql3 := `SELECT * from user where url=? ;` 
```

恢复正常

————————————————

版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/qq_52624549/article/details/132313835

## 谁他妈想得到这个啊草泥马