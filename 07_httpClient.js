var http = require("http");

var urlToGet = "http://faubourgsimone.paris/";
if (process.argv[2] !== undefined) {
	urlToGet = process.argv[2];
}


http.get(urlToGet, function(response) {

	// console.log("Response Status description : " + http.STATUS_CODES[response.statusCode]);

	response.setEncoding("utf8");

	response.on("data", function(data) {
		console.log(data.toString());
	});

	// response.on("end", function() {
	// 	console.log("END");
	// });

	// response.on("error", function(data) {
	// 	console.log(data.toString());
	// });

}).on('error', function(e) {
	console.log("Got error: " + e.message);
});
