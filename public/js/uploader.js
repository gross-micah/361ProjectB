var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
 
var upload = multer({ storage: storage }).single('userimage');

module.exports.upload = function (req, res, next) {
  upload(req, res, function (err) {
    if (err) return next(err);
    res.locals.filename = req.file.originalname;
    next();
  });
}
