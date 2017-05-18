//NOTE: We need to identify a mysql host that can be accessed by all members in the group. This was the formatting for
//one student controlling everything, but that won't necesarrily work for this group project. Need to research an alternative

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit   : 10,
  host              : 'mysql.eecs.oregonstate.edu',
  user              : 'cs340_grossmmi',
  password          : '****',
  database          : 'cs340_grossmmi' 
});

module.exports.pool = pool;
