/*  Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;	Date: 09/07/2021
;	Modified By: Keith Hall
;	Description: Pug template.
*/
// Modules to be used in this project.
var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug");
var logger = require("morgan");
 
var app = express();

app.use(logger("short"));             // Tells Node to use morgan to log requests.

app.set("views", path.resolve(__dirname, "views"));   

app.set("view engine", "pug");          // Tells Node to use the pug template .

app.get("/", function(request, response) {
    response.render("index", {
        message: "My Pug Template Example!"
    });
});

http.createServer(app).listen(8080, function() {            // Starts the server listening on port 8080.
    console.log("Application started on port 8080!");
});