/**
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/14/2021
;   Modified By: Keith Hall
;   Description: This is an example of a simple hello app using the express middleware feature.
*/
var express = require("express");  // This code requires the express and http modules.
var http = require("http");

var app = express();              // Calls the express function to start a new express application.

app.use(function(request, response) {     // Middleware (request handler) that accepts a request and sends a reponse.
	
	console.log("In comes a request to: " + request.url);
	response.end("hello World!");
})

http.createServer(app).listen(8080);     //Starts the server listening on port 8080.
