var fileName = process.argv[2];
var fs = require('fs');
var buf = null;
var nbLines = null;
try {
	buf = fs.readFileSync(fileName, 'utf8');
	var buffStr = buf.toString();
	var linesArr = buffStr.split('\n');
	nbLines = linesArr.length;
	console.log(nbLines);
}
catch (e) {
	console.log(e);
}


