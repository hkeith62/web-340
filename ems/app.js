/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/27/2021
;   Modified By: Keith Hall
;   Description: This is server file for the employee records app. 
*/
// Calls all modules to be used in the employee records app project.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();  // creates an express application and puts it inside the app variable.

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response){
    response.render("index", {
        title: "Home Page"
    });
});

app.get("/about", function(request, response) {       // Request handler is called to respond when a request to the /about page is made.
	response.render("about", {
		title: "About"
	});
});

app.get("/about", function(request, response) {       // Request handler is called to respond when a request to the /about page is made.
	response.render("contact", {
		title: "Contact Us"
	});
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});

 

