// Using IBM Watson

var watson = require('watson-developer-cloud');
var fs = require('fs');
var visual_recognition = watson.visual_recognition({
  api_key: 'WKJTFh-yt97obIHCFycZNKUDyhWH0M3mmNQtj4Hxi8ky',
  version: 'v3',
  version_date: '2016-05-20'
});

var params = {
  images_file: fs.createReadStream('./resources/car.png')
};

visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
