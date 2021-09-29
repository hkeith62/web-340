/*
; Title:  Web- 340 Node.js
; Author: Professor Krasso
; Date:   09/28/2021
; Modified by: Keith Hall
; Description: Demonstrates how to configure an application for CSRF protection.
*/
/*jslint node: true */
"use strict";

// Required modules
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

// Set up csrf protection
var csrfProtection = csrf({cookie: true});

// Initialize the express application.
var app = express();

app.use(logger("short"));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});

app.set("views", path.resolve(__dirname, "views"));  // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs");                      // Tells Express to use the EJS view engine.

// routing
app.get("/", function (req, res) {
    res.render("index", {
        message: "New Employee Entry Page"
    });
});

app.post("/process", function (req, res) {
    console.log(req.body.txtName);
    res.redirect("/");
});

http.createServer(app).listen(8080, function () {                  // Starts the server listening on port 8080.  
    console.log("application started on port 8080.");
});







