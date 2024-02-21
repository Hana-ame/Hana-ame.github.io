# django

## start up

all in wsl.

### install

https://docs.djangoproject.com/en/5.0/intro/install/

install python
install database
install django

https://docs.djangoproject.com/en/5.0/topics/install/#installing-official-release

```sh
python -m pip install Django
```

### first app

https://docs.djangoproject.com/en/5.0/intro/tutorial01/

```sh
django-admin startproject mysite
# a folder named my site is created under where the command run
```

### restapi

https://www.django-rest-framework.org/tutorial/quickstart/

startproject里面是startapp

#### 01

难绷，mysite(project)里面的mysite是默认

#### 02

草，model里面怎么直接写sql。

```sh
python manage.py makemigrations polls
# Migrations for 'polls':
#   polls/migrations/0001_initial.py
#     - Create model Question
#     - Create model Choice
```

```sh
python manage.py sqlmigrate polls 0001
# https://docs.djangoproject.com/en/5.0/intro/tutorial02/
```

stop here.

## restful

