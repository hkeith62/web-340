/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 09/21/2021
;   Modified By: Keith Hall
;   Description: This is an example of a simple TDD test case using Node- exercise 7.2. 
*/
var assert = require("assert"); // Defines if a given expression is true or not.

//Function tested 
describe("String#split", function() {  
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple, Orange, Mango'.split(','))); // Tests if string (apple, orange, mago).split (',') returns an array of fruits.
    });
});
 