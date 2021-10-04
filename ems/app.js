/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/27/2021
;   Modified By: Keith Hall
;   Description: This is server file for the employee records app.
*/
/*jslint node: true */
"use strict";

// Calls all modules to be used in the employee records app project.
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee");

// Database connection string
var mongoDB = "mongodb+srv://new-user_62:34bx4y6ka@buwebdev-cluster-1.phrms.mongodb.net/test";    // Database connection string.

mongoose.connect(mongoDB, {

    useNewUrlParser: true,     // Connection string parser- useMongoClient not supported in current mongoose version.
    useUnifiedTopology: true  // Server discovery and monitoring for stable connection.
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;  // Database variable to hold connection.

// Error handling
db.on("error", console.error.bind(console, "MongoDB connected error:")); 
db.once("open", function () {      

    console.log("Application connected to mLab MongoDB instance");
});

// CSRF Protection
var csrfProtection = csrf({cookie: true});

var app = express();  // Creates an express application and puts it inside the app variable.

// Serve up static CSS files in public folder.
app.use(express.static(path.join(__dirname, "public")));

// Dependency libraries
app.use(logger("short")); // Morgan logger

// Body parser
app.use(bodyParser.urlencoded ({
    extended: true
}));
// Cookie parser
app.use(cookieParser());

// CSRF protection
app.use(csrfProtection);

// Helmet header security
app.use(helmet.xssFilter());   

// Intercepts incoming requests and adds a CSRF token to the response.
app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("CSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});

app.set("views", path.resolve(__dirname, "views"));   // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs");  // Tells Express to use the EJS view engine.

// Request handlers are called to respond when a request to the home/about/contact pages are made.
app.get("/", function (request, response) {             
    response.render("index", {
        title: "Employee Records Management"
    });
});

app.get("/about", function (request, response) {        
    response.render("about", {
        title: "About Us"
    });
});

app.get("/contact", function (request, response) {        
    response.render("contact", {
        title: "Contact Us"
  });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: "New Employee Entry Form"
    });
});

app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

app.post("/process", (req, res) => {
    var myData = new Employee(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
http.createServer(app).listen(8080, function () {                // Starts the server listening on port 8080.  
    console.log("Application started on port 8080!");
});
