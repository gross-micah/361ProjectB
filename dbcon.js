// This is an Amazon RDS MySQL database that we all have access to.c

var mysql = require('mysql');
var pool = mysql.createPool({
  host              : 'group11-db.cef75i7qm1kt.us-west-2.rds.amazonaws.com',
  user              : 'groupeleven',
  password          : 'osucs2017',
  port              : 3306
});

module.exports.pool = pool;
