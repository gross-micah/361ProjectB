var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var fs = require('fs');

var imagePath = './test/testImage.jpeg';
describe('Post image to /uploads', function() {
    it('uploads image', function(done) {
        // Needs to be changed according to server
        chai.request('http://localhost:8080')
            .post('/uploads')
            .attach('userimage', fs.readFileSync(imagePath))
            .set('Content-Type', 'image/jpeg')
            .end(function(err, res) {
                console.log(err);
            should.not.exist(err);
            res.status.should.equal(200);
            done();
        })
    });
})
