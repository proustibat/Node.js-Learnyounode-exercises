/*
var fs = require('fs');
var extWanted = "*";
if (process.argv[2] !== undefined) {
	extWanted = process.argv[2];
}

fs.readdir('.', function(err, files) {
	if (err) {
		console.log(err);
	}
	else {
		files.forEach(function(item, index) {
			if (extWanted === "*") {
				console.log(item.toString());
			}
			else {
				var itemSplit = item.toString().split(".");
				var extItem = itemSplit[itemSplit.length - 1];
				if (extItem === extWanted) {
					console.log(item.toString());
				}
			}
		});
	}
});
*/

var fs = require("fs");
var path = require("path");
var dirWanted = ".";
if (process.argv[2] !== undefined) {
	dirWanted = process.argv[2];
}

var extWanted = "*";
if (process.argv[3] !== undefined) {
	extWanted = process.argv[3];
}


fs.readdir(dirWanted, function(err, list) {
	if (err) {
		console.log(err);
	}
	else {
		list.forEach(function(item, index) {
			if (extWanted === "*") {
				console.log(item.toString());
			}
			else if (path.extname(item) === "." + extWanted) {
				console.log(item);
			}
		});
	}
});
