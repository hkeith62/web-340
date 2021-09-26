/*
;   Title: WEB 340 –  Node.js
;   Author: Professor Krasso
;   Date: 08/27/2021
;   Modified By: Keith Hall
;   Description: This is a file containing the code/function to be tested in exercise 7.3.  
*/
// Function to be tested.  
function fruits(str) {
    return str.split(',');     // Tests if str('apple, orange, mango').split returns an array of fruits.
   }

   module.exports = fruits;   // Exports a default (one) value.
