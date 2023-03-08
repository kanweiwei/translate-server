## 通用文本翻译

对接的是百度翻译api，需要 appid 和对应的密钥

## 使用方法

### 启动翻译服务

1. 创建 .env

```
t_appid=xxx
t_secret=xxx
```

2. yarn install
3. node index.js

### 使用翻译服务

使用post 请求访问 http://localhost:4000/translate

body 数据格式为

```json
{
  "from": "en",
  "to": "zh",
  "q" : "apple"
}
```

返回数据格式为

```json
{
    "from": "en",
    "to": "zh",
    "trans_result": [
        {
            "src": "apple",
            "dst": "苹果"
        }
    ]
}
```
