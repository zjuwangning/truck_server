/*
* 用户相关操作
*
*
*/

let cmnFun = require('../common/cmn')
let express = require('express');
let connection = (require('../common/database')).connection;
let router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.post('/login',  function (req, res){
    let resp = {origin: "ymss"};
    if (cmnFun.isEmpty(req.body['username']) || cmnFun.isEmpty(req.body['password'])) {
        res.send({data: {}, code: 2, msg: "请输入用户名及密码"});
        return ;
    }
    let  querySql = 'select * from user where username = "' + req.body['username'] + '";';
    connection.query(querySql,function (err, result) {
        if (err) {
            console.log('mysql error', err);
            res.send({data: {}, code: 3, msg: "数据库连接异常, 请稍后重试"});
            return;
        }
        result = JSON.parse(JSON.stringify(result));
        if (cmnFun.isEmpty(result)) {
            resp = {data: {}, code: 1, msg: "用户名重复"};
            res.send(resp);
        }
    })
});

router.post('/register',  function (req, res){
    let resp = {};
    if (cmnFun.isEmpty(req.body['username']) || cmnFun.isEmpty(req.body['password'])) {
        res.send({data: {}, code: 2, msg: "请输入用户名及密码"});
        return ;
    }
    let  querySql = 'select * from user where username = "' + req.body['username'] + '";';
    connection.query(querySql,function (err, result) {
        if(err){
            console.log('mysql error', err);
            res.send({data: {}, code: 3, msg: "数据库连接异常, 请稍后重试"});
            return;
        }
        result = JSON.parse(JSON.stringify(result));
        // 无重复用户名 可以创建用户
        if (cmnFun.isEmpty(result)) {
            let  addSql = 'INSERT INTO user(username, password) VALUES(?,?)';
            let  addSqlParams = [req.body['username'], req.body['password']];

            connection.query(addSql,addSqlParams,function (err, result) {
                if(err){
                    res.send({data: {}, code: 3, msg: "数据库连接异常, 请稍后重试"});
                    return;
                }
                resp = {data: {}, code: 0, msg: "用户注册成功"};
                res.send(resp);
            });
        }
        // 用户名重复 不可创建
        else {
            resp = {data: {}, code: 1, msg: "用户名重复"};
            res.send(resp);
        }
    });
});


module.exports = router;
