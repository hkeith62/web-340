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
app.set('port', process.env.PORT || 8080);

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

app.get('/list', function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employees);
            res.render('list', {
                title: 'Employee List',
                employees: employees
            });
        }
    });
});
app.post("/process", function (req, res) {
    var newEmployee = new Employee(req.body);
    newEmployee.save(function (err) {             // Save new employee first and last name to mongodb.
        if (err) {
            console.log("Validation Failed");
            throw err;
        } else {
            console.log(newEmployee + ' saved successfully!');
            res.redirect('/list');
        }
    });
});

app.get('/view', function (request, response) {   // Get views page
    var queryName = request.params["queryName"];      // queries string of request object.
    Employee.find({'name': queryName}, function (error, employees) {  //Selects mongodb record (employee name) by queryName.
        if (error) {
            console.log('Error Occurred');
            throw error;
        } else {
            console.log(queryName + "Record for");   // If no error, display record in the console.

            if (employees.length > 0) {               // If record length is greater than 0, redirects to views page.
                response.render('view', {
                    title: "Employee Record",
                    employee: employees
                });
            } else {
                response.redirect('/list');
            }
        }
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Application started on port ' + app.get('port'));
});