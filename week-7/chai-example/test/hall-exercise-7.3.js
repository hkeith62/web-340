/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 09/21/2021
;   Modified By: Keith Hall
;   Description: This is an example using Mocha and Chai frameworks to test a function.  
*/
var fruits = require("../hall-fruits");   // Requires the module that contains the function to be tested.
var chai = require("chai");            // Requires chai.
var assert = chai.assert;             // Chai's assert property is stored in the assert variable.

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple, Orange, Mango');
        assert(Array.isArray(f));                        // Tests if function returns an array of fruits.
    });
    });
});
