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
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");
var Employee = require("./models/employee");
var mongoDB ="mongodb+srv://new-user_62:34bx4y6ka@buwebdev-cluster-1.phrms.mongodb.net/test";    // Database connection string.

mongoose.connect(mongoDB, {

    useNewUrlParser: true,     // Connection string parser- useMongoClient not supported in current mongoose version.
    useUnifiedTopology: true  // Server discovery and monitoring for stable connection.
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;  // Database variable to hold connection.

// Error handling
 db.on("error", console.error.bind(console, "MongoDB connected error:")); 
  db.once("open", function(){      

    console.log("Application connected to mLab MongoDB instance");
});
                                
var app = express();  // creates an express application and puts it inside the app variable.

// Using app.use to serve up static CSS files in public folder.
app.use(express.static(path.join(__dirname, "public")));

app.use(logger("short"));

// Placeholder model for a new document.
var employee = new Employee({

    firstName: "John",
    lastName: "Doe"
});

app.set("views", path.resolve(__dirname, "views"));   // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs");  // Tells Express to use the EJS view engine.

// Request handlers are called to respond when a request to the home/about/contact pages are made. 
app.get("/", function(request, response){             
    response.render("index", {
        title: "Employee Records Management"
    });
});

app.get("/about", function(request, response) {        
	response.render("about", {
		title: "About Us"
	});
});

app.get("/contact", function(request, response) {        
	response.render("contact", {
		title: "Contact Us"
	});
});

http.createServer(app).listen(8080, function(){                // Starts the server listening on port 8080.  
    console.log("Application started on port 8080!");
});

 

