var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var router = express.Router();
//app.use('/assets', express.static(__dirname+'/assets'));
//app.use('view engine', 'ejs');

router.get('/', function(req,res){
	res.render('layout', {content:'./views/login.ejs'});				
});
router.post('/home', function(req, res){
				console.log('GOT HERE!');
				console.log(req);
	res.sendFile(__dirname + '/home.html');				
});
