# acme.sh

https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E

try to renew moonchan.xyz but failed.

```
acme.sh --renew -d '*.moonchan.xyz' -d 'moonchan.xyz'   --yes-I-know-dns-manual-mode-enough-go-ahead-please --debug
```

```
_chk_alt_domains='moo'
```

## 申请个证书

work.gd里面的

acme的--nginx会跳过已经有ssl的设置的.

呃,还是提示ssl on
尝试指定webroot

还是不行,加上了server_name

尝试了一下,但是文件和访问成功了,但是acme不成功
待会试试更新

https://community.letsencrypt.org/t/issue-with-acme-keys/104029/3

麻了没有fullchain.cer

不想弄了.

麻了不报错但是会超时.

8443端口
bwh.
