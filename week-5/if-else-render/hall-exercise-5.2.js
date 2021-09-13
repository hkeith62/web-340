/*  Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;	Date: 09/07/2021
;	Modified By: Keith Hall
;	Description: This is an example of how to use if/for loops in rendering ejs pages.
*/
// Modules to be used in this project.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();        // creates an express application.

app.set("views", path.resolve(__dirname,"views"));  // Tells Express that the 'views files are in the views directory.
app.set("view engine", "ejs");      // Tells Express to use the EJS view engine.

app.use(logger("short"));   // Tells Node to use morgan middleware.

var composers =["Beethoven", "Bach", "Mozart", "Schoenberg"];

app.get("/", function(request, response){   // Express renders a response based on what is entered for (response.type).
    response.render("index",{
        names: composers  //responds with composers array in ejs.
    });
});
http.createServer(app).listen(8080, function(){               
    console.log("Application started on port 8080!"); // Starts the server listening on port 8080.
});