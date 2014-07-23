var fs = require('fs');
var fileName = process.argv[2];


fs.readFile(fileName, 'utf8', function (err, data) {
	if (err) {
		throw err;
	}
	else {
		var nbLines = data.toString().split('\n').length -1 ;
		console.log(nbLines);
	}
});
