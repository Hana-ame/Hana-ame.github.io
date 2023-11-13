# [mastodon-api-phaser](file:///C:\workplace\fedi\mastodon-api-parser)

```go
type X stuct{
  key string `formphaser:"tag1"`
  key string `formphaser:"tag2"`
  key string `formphaser:"tag3"`
}

type X stuct{
  key string `formphaser:"tag1"`
  key string `formphaser:"tag2"`
  key string `formphaser:"tag3"`
  key X `formphaser:"tag4"`
}
```

想这种。

对于

key[][key]

暂时作为[]string拿出来。

## TODO
看一眼所有的key有没有带这种

啊要死了，是不是思路错了啊。传map是不是好点啊。一定要处理吗。
传map吧。`map[string][]string`

