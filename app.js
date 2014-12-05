 var express = require('express');
 var app = express();
app.use(express.static(__dirname + '/assets'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));


var db = require('diskdb');

