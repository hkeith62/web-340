/**
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 05/30/2021
;   Modified By: Keith Hall
;   Description: This is an example of how to require modules/packages in Node.
*/
var url = require("url"); /** This takes the name of the module as a string argument and returns the module as an object. 
                           ;  The object with the parse function attached is put inside the url variable.
						  */
var parsedURL = url.parse("https://github.com/profile?name=hall"); // Uses the parse function of the module and puts the result in the parsedURL variable.
// Use parsedURL to display data from the url module.
console.log(parsedURL.protocol); 
console.log(parsedURL.host);
console.log(parsedURL.query);
console.log(parsedURL.path);