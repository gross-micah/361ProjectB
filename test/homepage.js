var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Vist \'/\'', function(){
    it('respond with html', function(done){
        // Will have to change once on server. Maybe environment variable? 
        chai.request('http://localhost:8080')
            .get('/')
            .end(function(err, res) {
            should.not.exist(err);
            res.status.should.equal(200);
            res.type.should.equal('text/html');
            done();
            })
    });
})

// Test for posting form data here