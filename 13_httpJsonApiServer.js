// Required modules
var http = require("http");
var urlMod = require("url");


// User Arguments or defaults values
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

// Create http server
var server = http.createServer(function(req, res) {

	// Control for favicon
	if (req.url === '/favicon.ico') {
		res.writeHead(200, {
			'Content-Type': 'image/x-icon'
		});
		res.end();
		return;
	}


	// Get pathname (routes)
	var urlStr = req.url;
	var urlObj = urlMod.parse(req.url, true);
	var pathname = urlObj.pathname.toLowerCase();


	// Get query (variables in url)
	var query = urlObj.query;
	var iso = query.iso;

	// Define content type for JSON response
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	// Create Date object
	var date = new Date(iso);

	// Object depends on route
	var dataObj = null;
	if (pathname === "/api/parsetime") {
		dataObj = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	}
	else if (pathname === "/api/unixtime") {
		dataObj = {
			"unixtime": date.getTime()
		};
	}
	else {
		res.write("No data here!");
	}

	// JSON
	if (dataObj !== null) {
		var dataToSend = JSON.stringify(dataObj);
		res.write(dataToSend);
	}

	// Close
	res.end();

});

server.listen(requestedPort);
