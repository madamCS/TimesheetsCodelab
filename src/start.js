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

// Global variables representing the placement of certain columns.
var COLUMN_NUMBER = {
  EMAIL: 3,
  HOURS_START: 4,
  HOURS_END: 8,
  HOURLY_PAY: 9,
  CALC_PAY: 10,
  APPROVAL: 11,
};

/** 
 * Creates the menu item "Timesheets" so user can run scripts on drop-down.
 */
function onOpen() {
  /**
   * TODO: Add code that creates a drop-down menu to run this solution's
   * scripts. 
   */
}

/** 
 * Runs the "Column Setup" script. 
 * Adds "WEEKLY PAY" column with calculated
 * values using array formulas. 
 * Adds an "APPROVAL" column at the end of
 * the sheet, containing drop-down menus to either approve/disapprove employee
 * timesheets.  
 * Adds a "NOTIFIED STATUS" column indicating whether or not an
 * employee has yet been e mailed.
*/
function columnSetup() {
  /**
   * TODO: Add code that sets up three new columns.
   * WEEKLY PAY needs to be filled with each employee's weekly pay value.
   * APPROVAL needs to be made up of drop-down menus allowing for manager
   * approval/disapproval.
   * NOTIFIED STATUS needs to be made up of drop-down menus signifying
   * whether or not an employee has been notified. 
   */
}

/** 
 * Runs the script "Send Emails". Sends e mails to every employee notifying
 * them whether or not their timesheet has been approved.  Checks + updates
 * "NOTIFIED" status so employers do not send e mails more than once.
*/
function sendEmails() {
  /**
   * TODO: Add code that sends emails to all the employees notifying them of 
   * their approval/disapproval status.
   */
}


