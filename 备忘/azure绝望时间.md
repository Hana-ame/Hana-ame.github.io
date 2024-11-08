# 与azure斗智斗勇。

我要死了怎么这么麻烦啊

主账号登陆不进去，所以application的权限全都用不了。

所以也不知道现在是返工web那个啥还是直接改写成spa

----

好像是web service不支持跨域访问，要死了这怎么弄啊。

好他妈傻逼

SPA大致上选择SPA，而且根据提示访问的时候需要

## SPA大成功，但是限制只有一天，我草泥马

### 摘要
需要找一个访问OneDrive business的东西，首先是看着很多年前的网盘web index借来的api，现在改版了，坐牢。

## [heymind/OneDrive-Index-Cloudflare-Worker: DEPRECATED: Please use https://github.com/spencerwooo/onedrive-cf-index instead](https://github.com/heymind/OneDrive-Index-Cloudflare-Worker)

[application lsit](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)

重新进入这个地方，在教程中寻找答案吧

### Python Example

好像示例就不行。得到api的endpoint之后去找吧


喷了你怎么知道这个东西是secret的。

![](https://upload.moonchan.xyz/api/01LLWEUU27NKDSSZVYXFH3WS5HZPJG7V56/image.png)

设置一些env，但是好像还是不够，想起来是没有load到环境里面，`. .env`好像不吃

![](https://upload.moonchan.xyz/api/01LLWEUUYBBBMXFD4O3FCJO6XTREN43C3V/image.png)

无事成功了

![](https://upload.moonchan.xyz/api/01LLWEUUZXZAU4QQPMWRDZXYCITVS6DQ5I/image.png)

试着在这里把权限都dump下来。


查看token是怎么获取的。在python里面写一下方法，然后再dump下来refresh token

python的msal不让

https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-web-app-python-call-api?tabs=windows

通过看document的endpoint找到获取refresh token的方法。


所以python成功了，为什么之前不行，我服了。


卧槽，那么他refresh token要送什么东西。


### first_leg

```py
import os
from urllib.parse import urlparse, parse_qs
from dotenv import load_dotenv
import requests

load_dotenv()

# 设置基本 URL
base_url = f"https://login.microsoftonline.com/{os.getenv('TENANT_ID')}/oauth2/v2.0/authorize"

# 构建请求参数
params = {
    "client_id": os.getenv("CLIENT_ID"),
    "scope": os.getenv("SCOPE"),
    "redirect_uri": os.getenv("REDIRECT_URI"),
    "response_type": "code",
    "code_challenge": os.getenv("CODE_CHALLENGE"),
    "code_challenge_method": os.getenv("CODE_CHALLENGE_METHOD")
}

# 创建请求
request = requests.Request('GET', base_url, params=params)

# 准备请求并打印完整的 URL
prepared_request = request.prepare()

print("访问这个网址登录")
print(prepared_request.url)
# 示例 URL
url = input("登陆过后的redirect url")

# 解析 URL
parsed_url = urlparse(url)

# 获取查询参数
query_params = parse_qs(parsed_url.query)

# 输出解析结果
for key, value in query_params.items():
    print(f"{key}: {value[0]}")  # value 是一个列表，取第一个元素
    if key == "code":
        with open("getAToken", "w") as f:
            f.write(f"code={value[0]}")
```

### second_leg
```py
import os
import requests
from dotenv import load_dotenv

# 加载 .env 文件
load_dotenv()
load_dotenv("getAToken")

# 从环境变量中获取参数
tenant_id = os.getenv("TENANT_ID")  # 请在 .env 文件中定义此参数
client_id = os.getenv("CLIENT_ID")  # 你的 Client ID
redirect_uri = os.getenv("REDIRECT_URI")  # 重定向 URI
scope = os.getenv("SCOPE")  # 请求的权限范围
code = os.getenv("code")  # 授权码
code_verifier = os.getenv("CODE_VERIFIER")  # 代码验证器
client_secret = os.getenv("CLIENT_SECRET")  # 客户端密钥（仅对 Web 应用需要）

# 构建请求的 URL
token_url = f"https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token"

# 设置请求参数
data = {
    "client_id": client_id,
    "scope": scope,
    "code": code,
    "redirect_uri": redirect_uri,
    "grant_type": "authorization_code",
    "code_verifier": code_verifier,
    "client_secret": client_secret  # 仅对 Web 应用需要
}

print(data)

# 发送 POST 请求
response = requests.post(token_url, data=data, headers={
    "Content-Type": "application/x-www-form-urlencoded",
})

# 检查响应
if response.status_code == 200:
    # 成功，解析访问令牌
    token_response = response.json()
    print(token_response)
    with open("refresh_token", 'w') as env_file:
        env_file.write(f"refresh_token={token_response.get("refresh_token")}")
    access_token = token_response.get("access_token")
    print("Access Token:", access_token)
else:
    # 处理错误
    print("Error:", response.status_code, response.text)
```

## tl;dr

py first_leg.py

1.运行
1.访问提示链接
1.复制返回的链接到控制台
1.自动退出

py second_leg.py

1.运行

bash upload.sh

1.运行（未测试）