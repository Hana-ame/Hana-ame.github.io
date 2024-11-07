# django
```sh
django-admin startproject myproject
```
创建一个叫 myproject 的文件夹，里面是项目的模版


报错了，跟提示走一下。
> py manage.py migrate

不能开在80端口
```sh
sudo ~/miniconda3/bin/py manage.py runserver 0:80
```


> py manage.py startapp polls
会在proj文件夹下面建立一个文件夹polls，用来保存一个站点

我日。urls.py要自己create啊

>     "polls.apps.PollsConfig",

> python manage.py makemigrations polls


[document](https://docs.djangoproject.com/en/5.1/)


## unsolved

还是会报错找不到django