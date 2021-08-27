/**
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/24/2021
;   Modified By: Keith Hall
;   Description: This is an example of hadvanced routing in express.
*/
// Modules to be used in the project.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express(); // creates an express application and puts it inside the app variable.

app.set("views", path.resolve(__dirname, "views")); // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs"); // Tells Express to use the EJS view engine.

app.use(logger("short")); // Tell Node to use morgan middleware.

app.get(/(\d+)$/, function(request, response) {
	var employeeId = parseInt(request.params[0], 10);
	response.render("index", {
		employeeId: employeeId
	});
});

http.createServer(app).listen(8080, function() {
	console.log("Aplication started on port 8080");
});



