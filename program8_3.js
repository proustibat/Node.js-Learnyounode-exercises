var http = require("http");
var concatStream = require('concat-stream')

var urlToGet = "http://faubourgsimone.paris/";
if (process.argv[2] !== undefined) {
	urlToGet = process.argv[2];
}

http.get(urlToGet, function(response) {

	response.pipe(concatStream(function(data) {
		var nbChars = data.toString().length;
		console.log(nbChars);
		console.log(data.toString());
	}))


}).on('error', function(e) {
	console.error("Got error: " + e.message);
});
