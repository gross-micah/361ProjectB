var express = require('express');
var mysql = require('./dbcon.js');
var app = express();
var handlebars = require('express-handlebars');
var request = require('request');
var myParser = require("body-parser");
var serveStatic = require("serve-static");
var path = require('path');
var fs = require('fs');
var async = require('async');
var uploader = require('./public/js/uploader.js');
var faceDetection = require('./public/js/facedetection.js');

app.set('port', process.argv[2]);
app.use(myParser.json());
app.use(myParser.urlencoded());
app.use(express.static('public'));
app.use(serveStatic('public'));


app.engine('handlebars', handlebars( {
  extname: 'handlebars',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}));

app.set('view engine', 'handlebars');

app.get("/", function(req, res, next){
    res.status(200);
    res.render('home');

});

app.get("/search", function(req, res, next) {
  res.render("search");
});

app.get("/searchresultstable", function(req, res, next) {
  res.render("searchresultstable");
});

// Will upload to 'uploads' folder (uploader.js)
// then call detectFaces (facedetection.js)
app.post("/upload", uploader.upload, function(req, res, next) {
  // Called inside function so that res is defined, which is needed
  // for res.locals.filename
  faceDetection.detectFaces(res.locals.filename, function() {
    // console.log to show that it was called
    console.log(res.locals.filename);
    console.log('called faceDetection');
  });
 res.render()
  // Need to set up response so doesn't end in 404
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

