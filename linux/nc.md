# 发送文件夹的方法

从local发送到server


**Server**

```sh
nc -l 1324 -v| tar -xzvf - # server
```

**Local**

```sh
tar -czvf - assets index.html vite.svg | /c/bin/Nmap/ncat.exe [localhost] 1324 # local
```

