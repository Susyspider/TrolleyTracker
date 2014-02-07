//******************************************************************************************************//
//											SERVER.JS													//
//******************************************************************************************************//

var express = require('express');
var app = express();

// PG DB:://<username>:<password>@host:port/dbname 
//var pg = require('pg');
//var conString = "pg://postgres:123@localhost:5432/icom5047";

//server configuration----------------------------------------------------------------------------------

app.use(express.bodyParser());

app.use(function(req, res, next){
 	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

//Server data
var trolleys = require('./appjs/trolley');
var Trolley = trolleys.Trolley;

var trolleyList = new Array(
	new Trolley(1,18.209764,-67.139674),
	new Trolley(2,18.210947,-67.145027),
	new Trolley(3,18.205797,-67.136958),
	new Trolley(4,18.21648,-67.133408),
	new Trolley(5,18.214534,-67.139792)
);

//
console.log("Server started. Listening on port 8888.");
app.listen(8888);