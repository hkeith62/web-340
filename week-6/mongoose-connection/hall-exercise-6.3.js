/**
    Title: WEB 340 – Node.js
    Author: Professor Krasso
    Date: 09/14/2021
    Modified By: Keith Hall
    Description: This is the JavaScript file for web-340, mongoose connection example.
 */
// Required modules
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// Database connection
var mongoDB ="mongodb+srv://new-user_62:34bx4y6ka@buwebdev-cluster-1.phrms.mongodb.net/test";

mongoose.connect(mongoDB, {
  useNewUrlParser: true    // New MongoDb instance
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;  // Database variable to hold connection.

  db.on("error", console.error.bind(console, "MongoDB connected error:")); 
  db.once("open", function(){     // Error handling

    console.log("Application connected to MongoDB");
});

var app = express();   // creates an express application

app.use(logger("dev"));    

http.createServer(app).listen(8080, function() {         // Starts the server listening on port 8080.  
  console.log("application started on port 8080.");
});