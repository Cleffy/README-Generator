/*
Packages
inquirer
file system
generateMarkdown utility
license class
*/
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./generateMarkdown.js');
const license = require('./classLicense.js')


//badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const apache = new license.License('Apache 2.0 License', 'https://opensource.org/licenses/Apache-2.0', 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',`   Copyright ${this.year} ${this.owner}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`);

const simplifiedBSD = new license.License('BSD 3-Clause License', 'https://opensource.org/licenses/BSD-3-Clause', 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg', `Note: This license has also been called the “New BSD License” or “Modified BSD License”. See also the 2-clause BSD License.

Copyright ${this.year} ${this.owner}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`);
/*
                    'FreeBSD License',
                    'GNU General Public License (GPL)',
                    'GNU Lesse General Public License (LGPL)',
                    'MIT License',
                    'Mozilla Public License (MPL) 2.0'*/


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
                    'Apache 2.0 License',
                    'BSD 3-Clause License',
                    'BSD 2-Clause License',
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

module.exports = { README };