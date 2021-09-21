/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/27/2021
;   Modified By: Keith Hall
;   Description: This function servers as the unit test case for exercises 7.2-TDD and 7.3-Mocha and Chai. 
*/
// Fruit function that splits a comma separated string into an array.   
function fruits(str) {
    return str.split(',');  
   }

   module.exports = fruits;  // Exports a default (one) value.