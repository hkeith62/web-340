/**
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/17/2021
;   Modified By: Keith Hall
;   Description: This is an express routing example.
*/

var express = require("express");         
var http = require("http");                // These codes require the express and http modules.

var app = express();                       // Calls the express function to start a new express application.

app.use(function(request, response, next) {
	
	console.log("In comes a request to: " + request.url);   // Logs incoming requests and calls next() to continue to the next middleware in the chain.
	next();
});

app.get("/", function(request, response) {      // Request handler is called when a request to the site root is made.

  response.end("Welcome to the homepage!"); 
});

app.get("/about", function(request, response) {   // Request handler is called when a request to the /about page is made.
	
  response.end("Welcome to the about page!"); 
});

app.get("/contact", function(request, response) {
  
  response.end("Welcome to the contact page"); 
});

app.use(function(request, response) {          // If none of routes above are requested, the user ends here.
	
  response.statusCode = 404;
  response.end("404");
});

http.createServer(app).listen(8080);          // Starts the server listening on port 8080.

