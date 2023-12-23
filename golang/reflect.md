# [reflect](https://pkg.go.dev/reflect)

简直吃屎了

概括一下 
- value是只针对value的
- field为什么是在struct的type下面才能拿到的东西啊.
- 正确的循环应该是
  1. 哦type是struct
  2. 更新下面所有的scope
  3. 乳沟scpoe是struct再循环
	
[之后再改.](https://github.com/Hana-ame/go-form-phaser)

[本地在](file:///C:\workplace\fedi\go-form-phaser)

喷了当时是什么毛病

加入一个struct写好param是哪里来的
然后unmarshal,好像不太行
直接从gin.Context转过来
当时为啥做不出来。谜

# https://golangbot.com/reflection/

## [reflect.Type and reflect.Value](https://golangbot.com/reflection/#reflecttype-and-reflectvalue)

`Type`
`Value`

run https://go.dev/play/p/81BS-bEfbCg

```log
Type  main.order
Value  {456 56}
```

`Kind`

run https://go.dev/play/p/Xw3JIzCm54T

```log
Type  main.order
Kind  struct
```

`Field`
`NumField`

```log
Number of fields 2
Field:0 type:reflect.Value value:456
Field:1 type:reflect.Value value:56
```


