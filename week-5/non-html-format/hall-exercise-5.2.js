/*  Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;	Date: 09/07/2021
;	Modified By: Keith Hall
;	Description: This is an example of other formats besides HTML that Express can render/send a response.
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

app.get("/", function(request, response){     // Express renders a response based on what is entered for response.type
    response.type("text");
    response.render("index",{
        message: "Text based message"
    });
});
http.createServer(app).listen(8080, function(){                // Starts the server listening on port 8080.
    console.log("Application started on port 8080!");
});

