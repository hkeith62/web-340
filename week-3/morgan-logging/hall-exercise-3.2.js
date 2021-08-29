/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/24/2021
;   Modified By: Keith Hall
;   Description: This is an example of how to set up and use the Morgan logging module.
*/
// Modules to be used in the project.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();   // creates an express application and puts it inside the app variable.

app.set("views", path.resolve(__dirname, "views")); // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs"); // Tells Express to use the EJS view engine.

app.use(logger("short")); // Uses morgan middleware to log requests instead of Node.

app.get("/",function(request, response) {   // Request handler is called to respond when a request to the site root is made.
	
	response.render("index.ejs",{
		
	message: "This page is an example of the Morgan logging module for Web-340 Exercise 3.2"
    });
});

http.createServer(app).listen(8080, function() {          
	
	console.log("Application started on port 8080");    // Starts the server listening on port 8080.
});
	
	