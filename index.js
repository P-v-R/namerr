"use strict";

const { firstNames } = require("./names/firstNames");
const { lastNames } = require("./names/lastNames");
const { emailDomains } = require("./names/emailDomains");
const { v4: uuidv4 } = require('uuid');
const _ = require("lodash");

let firstName = _.shuffle(firstNames);
let lastName = _.shuffle(lastNames);



/**
 * Namerr 
 * 
 * A tool to generate full names, emails, passwords, and usernames in bulk
 */

class Namerr {

  /**
  * Namerr.name() - returns a single full name string
  * 
  * @returns String - single name "firstname lastname"
  */
  static name() {
    let rand = Math.floor(Math.random() * 4500);
    // console.log(`${firstNames[rand]} ${lastNames[rand]}`);
    return `${firstNames[rand]} ${lastNames[rand]}`;
  }


  /**
  * Namerr.names(#) - returns an array of full name strings n long
  * 
  * @argument Integer - input how many names you want to have populate return array
  * @returns Array of Strings, ["first last", "first last", "... ..."]
  */
  static names(total = 1) {
    let results = [];
    for (let i = 0; i < total; i++) {
      let rand = Math.floor(Math.random() * 4500);
      results.push(`${firstNames[rand]} ${lastNames[rand]}`);
    }
    // console.log(results);
    return results
  }


  /**
  * Namerr.email() - returns a single email address string
  * 
  * @returns String - single name "firstname lastname"
  */
  static email() {
    let rand = Math.floor(Math.random() * 4500);
    let userNums = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
    // console.log(`${firstNames[rand][0]}_${lastNames[rand] + userNums}@${_.shuffle(emailDomains)[0]}`.toLowerCase());
    return `${firstNames[rand][0]}_${lastNames[rand] + userNums}@${_.shuffle(emailDomains)[0]}`.toLowerCase();
  }


  /**
  * Namerr.emails(#) -  returns an array of email address strings n long
  * 
  * @argument Integer - input how many emails you want to have populate return array
  * @returns Array of Strings, ["e_mail00@domain.com", "....", "..."]
  */
  static emails(total = 1) {
    let results = [];

    for (let i = 0; i < total; i++) {
      let userNums = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
      let rand = Math.floor(Math.random() * 4500);
      results.push(`${firstNames[rand][0]}_${lastNames[rand] + userNums}@${_.shuffle(emailDomains)[0]}`.toLowerCase());
    }
    // console.log(results);
    return results;
  }


  /**
  * Namerr.username() - returns a single username string
  * 
  * @returns String - single name "p_vonr55"
  */
  static username() {
    let rand = Math.floor(Math.random() * 4500);
    let userNums = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
    // console.log(`${firstName[rand][0]}_${lastName[rand].slice(0,4)}${userNums}`.toLowerCase());
    return `${firstName[rand][0]}_${lastName[rand].slice(0,4)}${userNums}`.toLowerCase();
  }



  /**
  * Namerr.users(#) - returns a object indexed with n ammount of user object  
  * 
  * @argument Integer - input how many user objects you want to have populate return object
  * @returns obj or user obj, {0:{firstName, middleName, lastName, fullName, firstLast, email, username, password}, 1:{...},2:{...}}
  */
  static users(total = 1) {
    let randomEmails = _.shuffle(emailDomains);
    let results = {};
    for (let i = 0; i < total; i++) {

      let userNums = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
      let fullName = `${firstName[i]} ${lastName[i]}`;
      let email = `${firstName[i][0]}_${lastName[i]}${userNums}@${randomEmails[i % randomEmails.length]}`.toLowerCase();

      results[i] = {
        firstName: firstName[i],
        middleName: firstName[i+1],
        lastName: lastName[i],
        fullName: `${firstName[i]} ${firstName[i+1][0]}. ${lastName[i]}`,
        firstLast: fullName,
        email,
        username: `${firstName[i][0]}_${lastName[i].slice(0,4)}${userNums}`,
        password:uuidv4()
      };
    }

    // console.log(results);
    return results;
  }

  /**
  * Namerr.password() - returns a single unique password using uuidv4
  */
  static password() {
    let password = uuidv4();
    // console.log(password);
    return password;
  }
}

module.exports = {Namerr};