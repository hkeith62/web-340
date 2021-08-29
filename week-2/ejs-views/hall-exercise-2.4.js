/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/19/2021
;   Modified By: Keith Hall
;   Description: This is an example of how to set up and use EJS in Express.
*/

// These 3 lines of code requires the express, http, and path modules.
var express = require("express");   
var http = require("http");
var path = require("path");

var app = express();     // Calls the express function to start a new express application.

app.use(function(request, response, next) {
	
	console.log("In comes a request to: " + request.url);   // Logs incoming requests and calls next() to continue to the next middleware in the chain.
	next();
});

app.set("views", path.resolve(__dirname, "views"));  // Tells express that views will be in a folder called views.
app.set("view engine", "ejs");  // Tells express to use the EJS view engine.

app.get("/", function(request, response) {
	
  response.render("index.ejs", {
	  firstName: "First Name: Keith",             // Passes defined values to index.ejs.
	  lastName: "Last Name: Hall",
	  address: "Adress: 1801 Ave. H"
  });                 
});

http.createServer(app).listen(8080, function() {    // Creates a server and starts it listening on port 8080.  
  
  console.log("EJS-Views app started on port 8080.");
});