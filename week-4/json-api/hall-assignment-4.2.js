/*  Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;	Date: 08/31/2021
;	Modified By: Keith Hall
;	Description: This is an example of a JASON API-creating a get request that returns a jason object.
*/

// Modules to be used in this api project.
var express = require("express");
var http = require("http");                 
var logger = require("morgan");

var app = express();     // Creates an express application and puts it inside the app variable.

app.use(logger("dev")); // Tell Node to use morgan middleware.
 
app.get(/^\/united-airlines\/destination\/(\d+)$/, function (request, response) {   // Get request with the specified path and must include an integer value.
    var id = parseInt(request.params[0], 10);
    response.json({                        // Get request above will return these 3 jason objects.
        unitedAirlines: "United Airlines",               
        flightNumber: id,
        destination: "France"
    });
});

http.createServer(app).listen(8080, function() {          // Starts the server listening on port 8080.
    console.log("Application started on port 8080");
});