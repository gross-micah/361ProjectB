// This is an Amazon RDS MySQL database that we all have access to.c

var mysql = require('mysql');
var pool = mysql.createPool({
  host              : '$IP',
  user              : '$C9_USER',
  password          : '',
  port              : 3306
});

module.exports.pool = pool;
