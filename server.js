var express = require('express');
var mysql = require('./dbcon.js');
var app = express();
var handlebars = require('express-handlebars');
var request = require('request');
var myParser = require("body-parser");
var serveStatic = require("serve-static");
var async = require('async');

app.set('port', process.argv[2]);
app.use(myParser.json());
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
    res.render('home');
});

app.get("/search", function(req, res, next) {
  res.render("search");
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
