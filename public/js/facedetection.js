// Using Google API here

var Vision = require('@google-cloud/vision');
var vision = Vision();
var fs = require('fs');

var self = module.exports = {
    detectFaces: function (inputFile, callback) {
        // Make a call to the Vision API to detect the faces
        vision.detectFaces(inputFile, function (err, faces) {
        if (err) {
          return callback(err);
        }
        var numFaces = faces.length;
        console.log('Found ' + numFaces + (numFaces === 1 ? ' face' : ' faces'));
        callback(null, faces);
        });
    },
    
    highlightFaces: function (inputFile, faces, outputFile, Canvas, callback) {
      fs.readFile(inputFile, function (err, image) {
        if (err) {
          return callback(err);
        }

        var Image = Canvas.Image;
        // Open the original image into a canvas
        var img = new Image();
        img.src = image;
        var canvas = new Canvas(img.width, img.height);
        var context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, img.width, img.height);
    
        // Now draw boxes around all the faces
        context.strokeStyle = 'rgba(0,255,0,0.8)';
        context.lineWidth = '5';
    
        faces.forEach(function (face) {
          context.beginPath();
          face.bounds.face.forEach(function (bounds) {
            context.lineTo(bounds.x, bounds.y);
          });
          context.lineTo(face.bounds.face[0].x, face.bounds.face[0].y);
          context.stroke();
        });

        // Write the result to a file
        console.log('Writing to file ' + outputFile);
        var writeStream = fs.createWriteStream(outputFile);
        var pngStream = canvas.pngStream();
    
        pngStream.on('data', function (chunk) {
          writeStream.write(chunk);
        });
        pngStream.on('error', console.log);
        pngStream.on('end', callback);
      });
    },
    
    processFace: function (inputFile, outputFile, Canvas, callback) {
        outputFile = outputFile || 'out.png';
        self.detectFaces(inputFile, function (err, faces) {
        if (err) {
          return callback(err);
        }
    
        console.log('Highlighting...');
        self.highlightFaces(inputFile, faces, outputFile, Canvas, function (err) {
          if (err) {
            return callback(err);
          }
          console.log('Finished!');
          callback(null, faces);
        });
      });
    }
}