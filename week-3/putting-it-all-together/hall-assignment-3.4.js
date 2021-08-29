/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/27/2021
;   Modified By: Keith Hall
;   Description: This is an example of routing and navigation in an Express application. 
*/
 // Requires all modules to be used in the app project.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();   // creates an express application and puts it inside the app variable.

app.set("views", path.resolve(__dirname, "views"));  // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs");                      // Tells Express to use the EJS view engine.

app.use(logger("short"));             // Tell Node to use morgan to log requests.

app.get("/", function(request, response) {       // Request handler is called to respond when a request to the site root is made.
	response.render("index", {
		message: "Home page"
	});
});


app.get("/about", function(request, response) {       // Request handler is called to respond when a request to the /about page is made.
	response.render("about", {
		message: "about page"
	});
});

app.get("/contact", function(request, response) {
	response.render("contact", {
		message: "contact page"
	});
});

app.get("/products", function(request, response) {
	response.render("products", {
		message: "products page"
	});
});

http.createServer(app).listen(8080, function() {                  // Starts the server listening on port 8080.  
	console.log("application started on port 8080.");
})