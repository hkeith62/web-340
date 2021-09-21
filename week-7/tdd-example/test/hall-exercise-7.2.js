/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 09/21/2021
;   Modified By: Keith Hall
;   Description: This is an example using Node/Mocha in TDD- exercise 7.2. 
*/
var assert = require("assert"); // Defines if a given expression is true or not.
 
describe("String#split", function() { 
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple, Orange, Mango'.split(','))); // Tests if .split (',') returns an array of fruits.
    });
});
 