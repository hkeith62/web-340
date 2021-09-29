/*
; Title:  Web-340 Node.js
; Author: Professor Krasso
; Date:  09/28/2021
; Modified by: Keith Hall
; Description: Demonstrates how to configure an application for  XSS threats.        
*/
/*jslint node: true */
"use strict";

// Required modules.
var express = require("express");
var http = require("http");
var logger = require("morgan");
var path = require("path");
var helmet = require("helmet");

// Initialize express
var app = express();

// Tell Node to use morgan to log requests.
app.use(logger("short"));

// Sets http headers.
app.use(helmet.xssFilter());

app.set("views", path.resolve(__dirname, "views"));  // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs");                      // Tells Express to use the EJS view engine.

app.get("/", function (request, response) {
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

http.createServer(app).listen(8080, function () {                  // Starts the server listening on port 8080.  
    console.log("application started on port 8080.");
});

