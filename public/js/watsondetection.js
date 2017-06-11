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

//should return donalod trump with valid api key replacement
// curl -XGET "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces?version=2016-05-20&api_key=$KEY&url=https://assets.donaldjtrump.com/2017/web/homepage/og_image.jpg"

//currently troubleshooting invalid-api-key returns when everything is entered as expected.

//emails to customer support still unanswered. Tracing problems in two URLs
//https://stackoverflow.com/questions/38078487/ibm-watson-invalid-api-key
//https://developer.ibm.com/answers/questions/282775/visual-recognition-no-longer-accepting-keys.html
