// This is an Amazon RDS MySQL database that we all have access to.c

var mysql = require('mysql');
var pool = mysql.createPool({
  host              : 'host',
  user              : 'user',
  password          : 'pass',
  port              : 3306
});

module.exports.pool = pool;
