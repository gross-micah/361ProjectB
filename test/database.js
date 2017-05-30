describe("Has User Database Table", function() {
	it('should exist', function() {
		exists = 0;
		mysql.pool.query('SELECT * FROM users', function(err, rows, fields) {
			if (err) {
				next(err);
				return;
			} else {
				exists = 1;
			}
		});
		assert.equal(exists, 1);
	  });
});

describe("Has Content_Record Database Table", function() {
	it('should exist', function() {
		exists = 0;
		mysql.pool.query('SELECT * FROM content_record', function(err, rows, fields) {
			if (err) {
				next(err);
				return;
			} else {
				exists = 1;
			}
		});
		assert.equal(exists, 1);
	  });
});