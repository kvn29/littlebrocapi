var express = require('express');
var app = express();
var fs = require('fs');
// mongodb://<dbuser>:<dbpassword>@ds155747.mlab.com:55747/littlebrocdb
// var routes = require('./api/routes');
var mongoose = require('mongoose');




// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/www'));

// set the home page route
app.get('/', function(req, res) {
	res.write('index.html');
});

app.listen(port, function() {
	console.log('Prêt sur  http://localhost:' + port);
});
