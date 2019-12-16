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
    let  addSqlParams = [req.body['phoneNum'], req.body['password']];

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


module.exports = router;
