<h1 align="center">truck_full server</h1>

## 目录规范:
- 通用功能在 /common 下
- 路由分层在 /routes下

## 返回数据格式:
- 数据格式均为
```json
{"data": "text", "code": "0", "msg": "msg"}
```
- code为0 表示参数正常且可以正常处理; 
- code为1 表示参数正常但由于其他原因无法正常处理数据
- code为2 表示参数格式错误
- code为3 表示其他错误
- 具体原因均会提示在msg中


