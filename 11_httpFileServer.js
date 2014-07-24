// Required modules
var http = require("http");
var fs = require("fs");


// User Arguments or defaults values
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}
var fileLocation = "allo.txt";
if (process.argv[3] !== undefined) {
	fileLocation = process.argv[3];
}

// Create http server
var server = http.createServer(function(req, res) {

	// Opens the file as a readable stream
	var readStream = fs.createReadStream(fileLocation);

	// The stream is valid to piping
	readStream.on("open", function() {

		// res.writeHead(200, { 'content-type': 'text/plain' })

		// Pipes the read stream to the response object (which goes to the client)
		readStream.pipe(res);
	});

	// Catches any errors while creating the stream
	readStream.on("error", function(err) {
		res.end(err.toString());
	});
});

// Start listening
server.listen(requestedPort);
