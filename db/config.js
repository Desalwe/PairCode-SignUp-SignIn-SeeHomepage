const mysql = require('mysql');
const keys = require('../keys');

const connection = mysql.createConnection({
    host:  'localhost', // address of the server
    user:  keys.MYSQL_USERNAME, // username
    password:  keys.MYSQL_PASSWORD,
    database:  'books',
});
module.exports = connection;