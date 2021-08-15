var url = require("url");
var parsedURL = url.parse("https://github.com/profile?name=hall");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
console.log(parsedURL.path);