/**
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/14/2021
;   Modified By: Keith Hall
;   Description: This assignment demonstrates how to use Node's built-in http module to develop a basic Node web server.
*/
var http = require("http");  // Requires Node's built http module.
function processRequest(req, res) {                               
var body = "You have arrived at homepage of Hall.com";            // Defines a function that will handle incoming http requests.
    var contentLength = body.length;         
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(processRequest);     // Creates a server that uses the function to handle requests.                        
s.listen(8080);  // Starts the server listening on port 8080. 