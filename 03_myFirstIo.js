var fileName = process.argv[2];
var fs = require('fs');
var buf = null;
var nbLines = null;
try {
	buf = fs.readFileSync(fileName, 'utf8');
	var buffStr = buf.toString();
	var linesArr = buffStr.split('\n');
	nbLines = linesArr.length -1; // -1 because of line in file's end
	console.log(nbLines);
}
catch (e) {
	console.log(e);
}


