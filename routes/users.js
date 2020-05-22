let express = require('express');
let connection = (require('../common/database')).connection;
let router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// router.get('/login',  function (req, res){
//     let resp = {origin: "ymss"};
//     res.send(resp);
// });

router.post('/login',  function (req, res){
    console.log('request', req);
    let resp = {origin: "ymss"};
    let resp1 = {origin: "ymss1"};
    connection.connect();

    let  addSql = 'INSERT INTO user(username, password) VALUES(?,?)';
    let  addSqlParams = [req.body['username'], req.body['password']];

    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            res.send(resp1);
            return;
        }

        console.log('-------------------INSERT-------------------');
        console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        console.log('--------------------------------------\n\n');
    });

    connection.end();
    res.send(resp);
});

router.post('/register',  function (req, res){
    console.log('request', req);
    let resp = {origin: "ymss"};
    let resp1 = {origin: "ymss11"};
    connection.connect();

    let  querySql = 'select * from user where username = ' + req.body['username'] + ';';

    connection.query(querySql,function (err, result) {
        if(err){
            console.log('[QUERY ERROR] - ',err.message);
            res.send(resp1);
            return;
        }

        console.log('-------------------QUERY-------------------');
        console.log('1',result);
        console.log('2', typeof result);
        console.log('3', result[0]);
        console.log('3', typeof result[0]);
        connection.end();
        res.send(resp);
        console.log('--------------------------------------\n\n');
    });
});


module.exports = router;
