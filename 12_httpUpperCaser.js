// Required modules
var http = require("http");
var map = require("through2-map");

// User Arguments or defaults values
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

// Create http server
var server = http.createServer(function(req, res) {

	// Check if POST method
	if (req.method != "POST") {
		res.end("POST method requested!");
		return;
	}

	// Create map to transform characters
	var upperCaseMap = map(function(chunk) {
		return chunk.toString().toUpperCase();
	});

	// Use the map
	var valueToReturn = req.pipe(upperCaseMap);

	// Pipes the result to the response object
	valueToReturn.pipe(res);

});

server.listen(requestedPort);
