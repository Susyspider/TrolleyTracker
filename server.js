//******************************************************************************************************//
//											SERVER.JS													//
//******************************************************************************************************//

var express = require('express');
var app = express();

// PG DB:://<username>:<password>@host:port/dbname 
//var pg = require('pg');
//var conString = "pg://postgres:123@localhost:5432/icom5047";

//SERVER CONFIG ------------------------------------------------------------------------------------------

//app.use(express.bodyParser()); 
app.use(express.json());
app.use(express.urlencoded());

app.use(function(req, res, next){
 	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

//SERVER DATA --------------------------------------------------------------------------------------------
var trolleys = require('./appjs/trolley');
var Trolley = trolleys.Trolley;

var trolleyList = new Array(
	new Trolley(1,18.209764,-67.139674),
	new Trolley(2,18.210947,-67.145027),
	new Trolley(3,18.205797,-67.136958),
	new Trolley(4,18.21648,-67.133408),
	new Trolley(5,18.214534,-67.139792)
);

//REST METHODS -------------------------------------------------------------------------------------------
//Get all trolleys' locations
app.get("/trolleys", function(req,res){
	console.log("Get trolleys request received.");

	if(trolleyList.length < 1){
		res.statusCode = 404;
		res.json("There are no trolleys to get.");
	}

	var tempList = new Array();
	
	for (var i=0; i < trolleyList.length; ++i){
		tempList.push(trolleyList[i]);
	}

	res.statusCode=200;
	res.json({"trolleys":tempList});
});

//Get trolley location by id
app.get("/trolley/:id", function(req,res){
	console.log("Get trolley #"+ req.params.id +" location request received.");
	
	if(trolleyList.length < 1){
		res.statusCode = 404;
		res.json("There are no trolleys to get.");
	}
	
	var temp = -1;
	
	for (var i=0; i < trolleyList.length; ++i){
		if(trolleyList[i].id == req.params.id){
			temp = trolleyList[i];
		}	
	}
	
	if(temp == -1){
		res.statusCode = 404;
		res.json("No trolley with the specified id was found.");
	}

	res.statusCode=200;
	res.json({"trolley":temp});
});

console.log("Server started. Listening on port 8888.");
app.listen(8888);