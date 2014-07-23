var http = require("http");
var bufferList = require("bl");

var urlToGet = "http://faubourgsimone.paris/";
if (process.argv[2] !== undefined) {
	urlToGet = process.argv[2];
}

http.get(urlToGet, function(response) {

	response.pipe(bufferList(function(err, data) {
		if (err) {
			return console.error(err);
		}
		// `data` is a complete Buffer object containing the full data
		var nbChars = data.toString().length;
		console.log(nbChars);
		console.log(data.toString());
	}))

}).on('error', function(e) {
	console.error("Got error: " + e.message);
});
