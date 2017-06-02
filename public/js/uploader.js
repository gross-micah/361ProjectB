

var multer = require('multer');
var upload = multer({ dest: './uploads/' }).single('userimage');

module.exports.upload = function (req, res, next) {
  upload(req, res, function (err) {
    if (err) return next(err)

    console.log(req.file);
  })
}

