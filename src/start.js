// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License.  You may obtain a copy
// of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
// License for the specific language governing permissions and limitations under
// the License.

// Global variables representing the index of certain columns.
var COLUMN_NUMBER = {
  EMAIL: 3,
  HOURS_START: 4,
  HOURS_END: 8,
  HOURLY_PAY: 9,
  CALC_PAY: 10,
  APPROVAL: 11,
  NOTIFY: 12,
};

// TODO: Set these global variables accordingly!
var APPROVED_EMAIL_SUBJECT = '';
var REJECTED_EMAIL_SUBJECT = '';
var APPROVED_EMAIL_MESSAGE = '';
var REJECTED_EMAIL_MESSAGE = '';

/** 
 * Creates the menu item "Timesheets" for user to run scripts on drop-down.
 */
function onOpen() {
  /**
   * TODO: Add code that creates a drop-down menu to run this solution's
   * scripts. 
   */
}

/** 
 * Adds "WEEKLY PAY" column with calculated values using array formulas. 
 * Adds an "APPROVAL" column at the end of the sheet, containing 
 * drop-down menus to either approve/disapprove employee timesheets.  
 * Adds a "NOTIFIED STATUS" column indicating whether or not an
 * employee has yet been e mailed.
 */
function columnSetup() {
   /**
   * TODO: Add code that calls helper functions to set up up three new columns,
   * with necessary parameters.
   */
}

/**
 * Adds a CALCULATE PAY column and automatically calculates
 * every employee's weekly pay.
 *
 * @param {Object} sheet Spreadsheet object of current sheet.
 * @param {Integer} beginningRow Index of beginning row.
 */
function addCalculatePayColumn(sheet, beginningRow) {
  /**
   * TODO: This column needs to be filled with each employee's weekly pay value.
   */
}

/**
 * Adds an APPROVAL column allowing managers to approve/
 * disapprove of each employee's timesheet.
 *
 * @param {Object} sheet Spreadsheet object of current sheet.
 * @param {Integer} beginningRow Index of beginning row.
 * @param {Integer} numRows Number of rows currently in use.
 */
function addApprovalColumn(sheet, beginningRow, numRows) {
  /** 
   * TODO: This column needs to be made up of drop-down menus allowing for manager
   * approval/disapproval.
   */
}

/**
 * Adds a NOTIFIED column allowing managers to see which employees
 * have/have not yet been notified of their approval status.
 *
 * @param {Object} sheet Spreadsheet object of current sheet.
 * @param {Integer} beginningRow Index of beginning row.
 * @param {Integer} numRows Number of rows currently in use.
 */
function addNotifiedColumn(sheet, beginningRow, numRows) {
  /** 
   * TODO: This column needs to be made up of drop-down menus signifying
   * whether or not an employee has been notified. 
   */
}

/**
 * Sends a notification email to employees, with the
 * appropriate approval/disapproval subject and message.
 *
 * @param {String} email Employee's email.
 * @param {String} emailSubject Appropriate email subject line regarding
 * whether or not employee's timesheet has been approved.
 * @param {String} emailMessage Appropriate email message body regarding
 * whether or not employee's timesheet has been approved.
 */
function notify(email, emailSubject, emailMessage) {
    /** 
     * TODO: Use MailApp to send an automated email with the appropriate
     * fields and parameters!
     */
}

/**
 * Sets the notification status to NOTIFIED for employees
 * who have received a notification email.
 *
 * @param {Object} sheet Current Spreadsheet.
 * @param {Object} notifiedValues Array of notified values.
 * @param {Integer} i Current status in the for loop.
 * @parma {Integer} beginningRow Row where iterations began.
 */
function updateNotifiedStatus(sheet, notifiedValues, i, beginningRow) {
  /** 
   * TODO: Set an employee's notified status to 'NOTIFIED', both in the
   * notifiedValues array & reflected in the Sheet itself.
   */
}

/** 
 * Checks the approval status of every employee, and calls helper functions
 * to notify employees via email & update their notification status.
 */
function checkApprovedStatusToNotify() {
  /**
   * TODO: Insert code which 
}

/** 
 * Set up the Timesheets Responses form, & link the form's trigger to 
 * send manager an email when a new request is submitted.
 */
function setUpForm() {
  /**
   * TODO: Insert code which checks if a Form is already linked to this Sheet and,
   * if not, creates a new form with the appropriate input values & names.
   * Additionally, set up a form trigger which will call onFormSubmit every time
   * a new response is submitted.
   */
}

/**
 * Handle new form submissions to trigger the workflow.
 *
 * @param {Object} event Form submit event
 */
function onFormSubmit(event) {
  /**
   * TODO: Insert code which inserts a new Form submission into the Sheet,
   * where each field ends up in the appropriate column index.
   */
}

/**
 * Converts a form response to an object keyed by the item titles. Allows easier
 * access to response values.
 *
 * @param {FormResponse} response
 * @return {Object} Form values keyed by question title
 */
function getResponsesByName(response) {
  /** 
   * TODO: Insert the code which allows you to obtain a form's responses by
   * their field names!
   */
}