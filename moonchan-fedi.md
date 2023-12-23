for the time being.

controller/mastodon write the api

fedi-anntena write chan api first.
that contains.
- activitypub/core(recv/post)
  - follow/unfollow
  - block/unblock
  - statues
    - post/delete/edit
      - format
    - favourite/reblog
- for user
  - regist
  - login
  - follow/unfollow
  - statues
- for board
  - create(regist)
  - post(reblog)
  - @




# 月岛

在用go写mastodon api

- mastodon
  - api
    - 有json了
      - 生成swagger
      - 生成gin用的api，用来接受传参
      - 生成`core/mastodon`的模板
  - entities
    - gorm的部分还要再搓
- activitypub
  - TODO

这里写完前不更新

去[readme](/fedi/)那个branch里看。

[swaggo](fedi/swaggo.md)
[gin](fedi/gin.md)
[misc]

## TODO
- 在[parser](javascript/mastodon-api-phaser.md#todo)里面找一下key是不是对的

- 额啊取参数取了半年. 用map吧.
- 不marshal没有乱序需要的
