let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : '47.107.120.52',
    user     : 'nodejs',
    password : 'nqg&oyHG3q^HLEPr',
    database : 'truck'
});
module.exports.connection = connection;