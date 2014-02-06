//******************************************************************************************************//
//											SERVER.JS													//
//******************************************************************************************************//

var express = require('express');
var app = express();

// Database connection string: pg://<username>:<password>@host:port/dbname 
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

//

console.log("Server started. Listening on port 8888.");
app.listen(8888);