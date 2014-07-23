// Required modules
var net = require("net");

// User Arguments
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = process.argv[2];
}

// New TCP server
var server = net.createServer(function(socket) {
	var currentDate = new Date();

	var YYYY = currentDate.getFullYear().toString();
	var MM = formatForDoubleIntegers(currentDate.getMonth().toString());
	var DD = formatForDoubleIntegers(currentDate.getDay().toString());
	var HH = formatForDoubleIntegers(currentDate.getHours().toString());
	var mm = formatForDoubleIntegers(currentDate.getMinutes().toString());

	var dateToReturn = YYYY + "-" + MM + "-" + DD + " " + HH + ":" + mm;

	socket.write(dateToReturn);

	socket.end();
});

function formatForDoubleIntegers(value) {
	if(value.length ==1) {
		value = "0"+value;
	}
	return value;
}


server.listen(requestedPort);
