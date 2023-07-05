/*
Packages
inquirer
file system
generateMarkdown utility
*/
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown.js');

/**
 * Creates a README data object.
 * @class
 * @classdesc This object takes in strings to build a README.md file
 * It takes no inputs and the parameters should be entered in manually.
 * Null values will not be entered put into the README.
 * @property {string} title         -Title of Project
 * @property {string} description   -Description of Project
 * @property {string} installation  -Installation Instructions
 * @property {string} usage         -Usage Information
 * @property {string} contribution  -Contribution Guidelines
 * @property {string} test          -Test Instructions
 * @property {string} gitHub        -User GitHub Profile
 * @property {string} email         -User Email
 * @property {array} questions      -Questions for user input
 * @method generateREADME()         -Generates a README.md file in the working directory
 */
class README{
    constructor(){
        this.title;
        this.description;
        this.installation;
        this.usage;
        this.contribution;
        this.test;
        this.gitHub;
        this.email;
        this.questions = [];
    }
    generateREADME(){
        let content = '';
        fs.writeFileSync('./README.md', content);
    }
}
// TODO: Create a function to initialize app
function init() {
    let myREADME = new README();
    myREADME.generateREADME();
}

// Function call to initialize app
init();
