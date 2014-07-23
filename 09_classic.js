// modules
var http = require("http");
var bufferList = require("bl");

var urlsToGet = [];
var dataOrdered = [];
var indexLoaded = 0;
var i;



function getData(index) {
	// traitement
	http.get(urlsToGet[index], function(response) {
		response.pipe(bufferList(function(err, data) {
			if (err) {
				return console.error(err);
			}
			dataOrdered[index] = data.toString();
			indexLoaded++;

			if (indexLoaded === 3) {
				for (var i = 0; i < 3; i++) {
					console.log(dataOrdered[i]);
				}
			}
		}));

	}).on('error', function(e) {
		console.error("Got error: " + e.message);
	});
}

// params
if (process.argv[2] === undefined) {
	// urls par défaut si pas de paramètres
	urlsToGet = ["http://faubourgsimone.paris/", "http://proustib.at", "http://usine.io"];
}
else {
	// récupération des 3 urls passées en arguments
	for (i = 0; i < process.argv.length - 2; i++) {
		if (process.argv[i + 2] !== undefined) {
			urlsToGet[i] = process.argv[i + 2];
		}
	}
}

// Boucle de chargement des urls
for (i = 0; i < urlsToGet.length; i++) {
	getData(i);
}
