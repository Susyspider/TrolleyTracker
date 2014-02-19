// node.js

// parameters
var port = 8080;

// dependencies
var fs = require('fs');
var http = require('http');
var client = require('socket.io');

var server = http.createServer(function(req, res) {
	
	res.end("Hello world");

}).listen(port, "localhost", function() {
	console.log("Server listening.");	
});

client.listen(server).on('connection', function(socket) {	
		
	console.log("New client connected.");	
			
	socket.on('update', function(update) {
				
		// Add a timestamp
		update["date"] = Date.now();

		// Stringify the object		
		var updateStr = JSON.stringify(update) + "\n";
	
		// TODO: Replace this line with function to update client map		
		//console.log("Update received: " + updateStr);		
		socket.broadcast.emit('mapUpdate', updateStr);		
		
		// test write data to text file
		fs.appendFile("/tmp/updates.txt", updateStr, function(err) {
			if (err) throw err;			
			console.log("Update saved successfully.");
		});		
	});	
});


