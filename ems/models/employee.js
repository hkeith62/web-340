/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   09/24/2021
; Description: File for the Employee database model
;===========================================
*/

// Require statements.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define employee schema.
const employeeSchema = new Schema({

    firstName: {type: String, required: true},
    lastName:  {type: String, required: true}
});
// Define model  
const Employee = mongoose.model("Employee", employeeSchema); // Mongoose maps employeeSchema to Employee model.
module.exports = Employee;  // Makes this model accessible from other JavaScript files.

/* var nameSchema = new Schema({
      first: String,
      last: String
    });

    personSchema = new Schema({
      name: {
        type: nameSchema,
        required: true
      }
    });
*/

