var express = require('express');
var path 	= require('path');
var app 	= express();

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'./public/index.html'));
});

var server = app.listen(5000, function () {
  var port = server.address().port;
  console.log('App is listening on port: ' +  port);
});