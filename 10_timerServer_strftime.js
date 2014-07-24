// Required modules
var net = require("net");
var strftime = require("strftime");

// User Arguments
var requestedPort = 8080;
if (process.argv[2] !== undefined) {
	requestedPort = parseInt(process.argv[2], 10);
}

// New TCP server
var server = net.createServer(function(socket) {
	socket.end(strftime('%F %R', new Date()) + "\n"); // https://github.com/samsonjs/strftime
});



server.listen(requestedPort);



/* OFFICIAL SOLUTION */
/*

   var net = require('net')

   function zeroFill(i) {
     return (i < 10 ? '0' : '') + i
   }

   function now () {
     var d = new Date()
     return d.getFullYear() + '-'
       + zeroFill(d.getMonth() + 1) + '-'
       + zeroFill(d.getDate()) + ' '
       + zeroFill(d.getHours()) + ':'
       + zeroFill(d.getMinutes())
   }

   var server = net.createServer(function (socket) {
     socket.end(now() + '\n')
   })

   server.listen(Number(process.argv[2]))

*/
