/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 09/21/2021
;   Modified By: Keith Hall
;   Description: This function servers as the unit test case for exercises 7.2-TDD and 7.3-Mocha and Chai. 
*/
function getFruits(str) {
    return str.split(','); // Specific code (str.split) tested in the TDD example, exercise 7.2.
   }

   module.exports = getFruits;  // Exports a default (one) value.