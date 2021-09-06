/*  Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;	Date: 08/31/2021
;	Modified By: Keith Hall
;	Description: This is an example of how to set http status codes in Express.
*/
var express = require("express"); 
var http = require("http");             // Modules to be used when setting http status codes.
var logger = require("morgan");

var app = express();     // creates an express application and puts it inside the app variable.

app.use(logger("dev")); // Tell Node to use morgan middleware.

app.get("/not-found", function(request, response) {  
    response.status(404);                         // Get request "not found" will return the appropriate json object.
    response.json({
        error: "Page not found."                  
    });
});
app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Page has been successfully loaded."
    });
});
app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "Unable to fulfill your request."
    });
});
http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");        // Starts the server listening on port 8080. 
});