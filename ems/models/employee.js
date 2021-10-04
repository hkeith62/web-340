/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   09/24/2021
; Modified by: Keith Hall
; Description: File for the Employee database model
;===========================================
*/
/*jslint node: true */
"use strict";
// Require statements.
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define employee schema.
var employeeSchema = new Schema({

    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});
// Define model
var Employee = mongoose.model("Employee", employeeSchema); // Mongoose maps employeeSchema to Employee model.
module.exports = Employee;  // Makes this model accessible from other JavaScript files.


