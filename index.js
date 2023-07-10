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
        this.contributing;
        this.test;
        this.faq;
        this.gitHub;
        this.email;
        this.questions = [{
                name: 'title',
                type: 'input',
                message: "What is the title of the project?"
            },
            {
                name: 'description',
                type: 'input',
                message: "Give a small summary of the project."
            },
            {
                name: 'installation',
                type: 'input',
                message: "Describe the installation procedure."
            },
            {
                name: 'usage',
                type: 'input',
                message: "How do you use this project?"
            },
            {
                //license list from https://www.techtarget.com/searchsoftwarequality/tip/5-common-open-source-software-licenses-you-need-to-know
                name: 'license',
                type: 'rawlist',
                message: "What is the title of the project?",
                choices: [
                    'Apache License 2.0',
                    'Simplified BSD License',
                    'FreeBSD License',
                    'GNU General Public License (GPL)',
                    'GNU Lesse General Public License (LGPL)',
                    'MIT License',
                    'Mozilla Public License (MPL) 2.0'
                ]
            },
            {
                name: 'contributing',
                type: 'input',
                message: "Who contributed to this project?"
            },
            {
                name: 'tests',
                type: 'input',
                message: "What are some tests for this project?"
            },
            {
                name: 'faq',
                type: 'input',
                message: "What are some frequently asked questions?"
            }];
    }
    async generateREADME(){
        try{
            await this.askQuestions();
            let content = '';
            content += this.generateTitle();
            content += this.generateDescription();
            content += this.generateTableOfContents();
            content += this.generateInstallation();
            content += this.generateUsage();
            content += this.generateLicense();
            content += this.generateContributing();
            content += this.generateTests();
            content += this.generateFAQ();
            fs.writeFileSync('./README.md', content);
            console.log(content);
        }
        catch(error){
            console.log(error);
        }
    }
    generateTitle(){
        return generateMarkdown.generateH1(this.title);
    }
    generateDescription(){
        let description = '';
        description += generateMarkdown.generateH2('Description');
        description += generateMarkdown.generateText(this.description);
        return description;
    }
    generateTableOfContents(){
        let tableOfContents = '';
        tableOfContents += generateMarkdown.generateH2('Table of Contents');
        if(this.installation != ''){
            tableOfContents += generateMarkdown.generateLinkedListItem('Installation');
        }
        tableOfContents += generateMarkdown.generateLinkedListItem('Usage');
        tableOfContents += generateMarkdown.generateLinkedListItem('License');
        tableOfContents += generateMarkdown.generateLinkedListItem('Contributing');
        tableOfContents += generateMarkdown.generateLinkedListItem('Tests');
        tableOfContents += generateMarkdown.generateLinkedListItem('FAQ');
        return tableOfContents;
    }
    generateInstallation(){
        let installation = '';
        installation += generateMarkdown.generateLinkedH2('Installation');
        installation += generateMarkdown.generateText(this.installation);
        return installation;
    }
    generateUsage(){
        let usage = '';
        usage += generateMarkdown.generateLinkedH2('Usage');
        usage += generateMarkdown.generateText(this.usage);
        return usage;
    }
    generateLicense(){
        let license = '';
        license += generateMarkdown.generateLinkedH2('License');
        license += generateMarkdown.generateText(this.license);
        return license;
    }
    generateContributing(){
        let contributing = '';
        contributing += generateMarkdown.generateLinkedH2('Contributing');
        contributing += generateMarkdown.generateText(this.contributing);
        return contributing;
    }
    generateTests(){
        let tests = '';
        tests += generateMarkdown.generateLinkedH2('Tests');
        tests += generateMarkdown.generateText(this.tests);
        return tests;
    }
    generateFAQ(){
        let faq = '';
        faq += generateMarkdown.generateLinkedH2('FAQ');
        faq += generateMarkdown.generateText(this.faq);
        return faq;
    }
    async askQuestions(){
        await inquirer.prompt(this.questions)
        .then((data) => {
            this.title = data.title;
            this.description = data.description;
            this.installation = data.installation;
            this.usage = data.usage;
            this.license = data.license;
            this.contributing = data.contributing;
            this.tests = data.tests;
            this.faq = data.faq;
        })
    }
}
// TODO: Create a function to initialize app
function init() {
    let myREADME = new README();
    myREADME.generateREADME();
}

// Function call to initialize app
init();
