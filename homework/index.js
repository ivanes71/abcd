var express = require("express"),
	fs = require("fs");

var app = express();

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/quote", function(request, response) {
	fs.readFile("database.txt", "utf-8", function(err, content) {
		if (err) throw err;

		var stringContent = content.toString();
		var readyContent = stringContent.split("\n");
		var random = getRandom(0, readyContent.length - 1);
		response.send(readyContent[random]);
	});
});

app.listen(591, function() {
	console.log("Server was started...");
});