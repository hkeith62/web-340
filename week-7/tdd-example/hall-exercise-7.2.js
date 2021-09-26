/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 09/21/2021
;   Modified By: Keith Hall
;   Description: This is a file containing the passed code/function used in exercise 7.2-TDD. 
*/
function getFruits(str) {
    return str.split(','); // Specific code (str.split) tested.
   }

   module.exports = getFruits;  // Exports a default (one) value.