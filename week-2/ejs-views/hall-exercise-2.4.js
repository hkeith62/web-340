/**
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

app.set("views", path.resolve(_dirname, "views");  // Tells express that views will be in a folder called views.
app.set("view engine", "ejs");  // Tells express to use the EJS view engine.

app.get("/", function(request, response) {
	
  respnse.render("index", {
	  message: "Welcome to the home page!"
  })
})

