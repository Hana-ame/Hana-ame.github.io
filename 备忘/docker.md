# docker

## [wsl + Docker Engine踩坑指北 - 知乎](https://zhuanlan.zhihu.com/p/670958325)

## [Proxy configuration | Docker Docs](https://docs.docker.com/engine/cli/proxy/)

但是自己家porxy好像会断，我疯了。f


Docker save

```
docker run \
-e HTTP_PROXY=http://DESKTOP-LLULJ2Q.mshome.net:10809  \
-e http_proxy=http://DESKTOP-LLULJ2Q.mshome.net:10809  \
-e HTTPS_PROXY=http://DESKTOP-LLULJ2Q.mshome.net:10809  \
-e https_proxy=http://DESKTOP-LLULJ2Q.mshome.net:10809  \
-e SOCKS_PROXY=DESKTOP-LLULJ2Q.mshome.net:10808  \
-e socks_proxy=DESKTOP-LLULJ2Q.mshome.net:10808  \
315ff903b968
```