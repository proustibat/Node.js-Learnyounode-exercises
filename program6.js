var mymodulelist = require('./mymodule.js');

var dirWanted = ".";
if (process.argv[2] !== undefined) {
	dirWanted = process.argv[2];
}

var extWanted = "*";
if (process.argv[3] !== undefined) {
	extWanted = process.argv[3];
}

mymodulelist(dirWanted, extWanted, function(err, list) {
	if (err) {
		return console.log(err);
	}
	list.forEach(function(file) {
		console.log(file);
	})
});
