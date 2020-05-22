<h1 align="center">truck_full server</h1>

## 目录规范:
- 通用功能在 /common 下
- 路由分层在 /routes下

## 返回数据格式:
- 数据格式均为
```json
{"data": "text", "code": "0", "msg": "msg"}
```
- 其中code为0 表示接收数据正常; code为1 表示接受数据格式错误; code为2 表示其他错误
- 错误均会提示在msg中


