let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : '47.107.120.52',
    user     : 'truck',
    password : 'AQL1yNI3eYkI',
    database : 'truck'
});
module.exports.connection = connection;
