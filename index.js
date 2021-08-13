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
 * A tool to generate full names, emails, and usernames in bulk
 */

class Namerr {

  /**
  * @returns String - single name "firstname lastname"
  */
  static makeName() {
    let rand = Math.floor(Math.random() * 4500);
    console.log(`${firstNames[rand]} ${lastNames[rand]}`);
    return `${firstNames[rand]} ${lastNames[rand]}`;
  }


  /**
  * @argument Integer - input how many names you want to have populate return array
  * @returns Array of Strings, ["first last", "first last", "... ..."]
  */
  static makeNames(total = 1) {
    let results = [];
    for (let i = 0; i < total; i++) {
      let rand = Math.floor(Math.random() * 4500);
      results.push(`${firstNames[rand]} ${lastNames[rand]}`);
    }
    console.log(results);
    return results
  }


  /**
  * @returns String - single name "firstname lastname"
  */
  static makeEmail() {
    let rand = Math.floor(Math.random() * 4500);
    let userNums = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
    console.log(`${firstNames[rand]}_${lastNames[rand] + userNums}@${_.shuffle(emailDomains)[0]}`.toLowerCase());
    return `${firstNames[rand][0]}_${lastNames[rand], + userNums}@${_.shuffle(emailDomains)[0]}`.toLowerCase();
  }


  /**
  * @argument Integer - input how many emails you want to have populate return array
  * @returns Array of Strings, ["e_mail00@domain.com", "....", "..."]
  */
  static makeEmails(total = 1) {
    let results = [];

    for (let i = 0; i < total; i++) {
      let userNums = `${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
      let rand = Math.floor(Math.random() * 4500);
      results.push(`${firstNames[rand][0]}_${lastNames[rand] + userNums}@${_.shuffle(emailDomains)[0]}`.toLowerCase());
    }
    console.log(results);
    return results;
  }


  /**
  * @argument Integer - input how many user objects you want to have populate return object
  * @returns obj or user obj, {0:{firstname, middlename, lastname, fullname, firstlast, email}, 1:{...},2:{...}}
  */
  static makeUsers(total = 1) {
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

    console.log(results);
    return results;
  }

  static makePassword() {
    let password = uuidv4();
    console.log(password);
    return password;
  }
}

module.exports = {Namerr}

// Namerr.makeUsers();
// Namerr.makeNames();
// Namerr.makeName();
// Namerr.makeEmail();
// Namerr.makeEmails(2500);
// Namerr.makePassword();