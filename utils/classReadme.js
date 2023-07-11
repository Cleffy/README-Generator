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
const license = require('./classLicense.js');


//license list from https://www.techtarget.com/searchsoftwarequality/tip/5-common-open-source-software-licenses-you-need-to-know
//badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
let apache2 = new license.License('Apache 2.0 License', 'https://opensource.org/licenses/Apache-2.0', 'https://img.shields.io/badge/License-Apache_2.0-blue.svg');
apache2.returnDescription = function(){
    return `
Copyright ${this.year} ${this.owner}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
};

let BSD3Clause = new license.License('BSD 3-Clause License', 'https://opensource.org/licenses/BSD-3-Clause', 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg');
BSD3Clause.returnDescription = function(){
    return `
Note: This license has also been called the “New BSD License” or “Modified BSD License”. See also the 2-clause BSD License.

Copyright ${this.year} ${this.owner}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
};

let BSD2Clause = new license.License('BSD 2-Clause License', 'https://opensource.org/licenses/BSD-2-Clause', 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg');
BSD2Clause.returnDescription = function(){
    return `
Note: This license has also been called the “Simplified BSD License” and the “FreeBSD License”. See also the 3-clause BSD License.

Copyright ${this.year} ${this.owner}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
};

let GNUGPLv3 = new license.License('GNU GPL v3', 'https://www.gnu.org/licenses/gpl-3.0', 'https://img.shields.io/badge/License-GPLv3-blue.svg');
GNUGPLv3.returnDescription = function(){
    return `
${this.programDescription}
Copyright (C) ${this.year} ${this.owner}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
};

/*
let GNULGPLv3 = new license.License('GNU LGPL v3', 'https://www.gnu.org/licenses/lgpl-3.0', 'https://img.shields.io/badge/License-LGPL_v3-blue.svg');
GNULGPLv3.returnDescription = function(){
    return `
${this.programDescription}
Copyright (C) ${this.year} ${this.owner}

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.`;
};
*/

let MIT = new license.License('The MIT License', 'https://opensource.org/licenses/MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg');
MIT.returnDescription = function(){
    return `
Copyright ${MIT.year} ${MIT.owner}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
};

let mozilla2 = new license.License('Mozilla Public License 2.0', 'https://opensource.org/licenses/MPL-2.0', 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg');
mozilla2.returnDescription = function(){
    return `
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/`;
};

/**
 * Creates a README data object.
 * @class
 * @classdesc This object takes in strings to build a README.md file
 * It takes no inputs and the parameters should be entered in manually.
 * Empty values will not be entered put into the README.
 * @property {string} title             -Title of Project
 * @property {string} description       -Description of Project
 * @property {string} installation      -Installation Instructions
 * @property {string} usage             -Usage Information
 * @property {string} contribution      -Contribution Guidelines
 * @property {string} test              -Test Instructions
 * @property {string} gitHub            -User GitHub Profile
 * @property {string} email             -User Email
 * @property {License} license          -The license of the Project
 * @property {array} references         -References related to the Project
 * @property {array} questions          -Questions for user input
 * @method generateREADME()             -Generates a README.md file in the working directory
 * @method generateTitle()              -Generates the Title section
 * @method generateDescription()        -Generates the Description section
 * @method generateTableOfContents()    -Generates the Table of contents
 * @method generateInstallation()       -Generates the Installation section
 * @method generateUsage()              -Generates the Usage section
 * @method generateLicense()            -Generates the License section
 * @method generateContribution()       -Generates the Contribution section
 * @method generateTests()              -Generates the Tests section
 * @method generateContact()            -Generates the Contact section
 * @method generateReferences()         -Generates the References section
 * @method askQuestions()               -Asks the user a series of questions
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
        this.license;
        this.references = new Array();
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
                name: 'developer',
                type: 'input',
                message: "Who is the developer of the project?"
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
                name: 'license',
                type: 'rawlist',
                message: "What is the title of the project?",
                choices: [
                    apache2.title,
                    BSD3Clause.title,
                    BSD2Clause.title,
                    GNUGPLv3.title,
                    //GNULGPLv3.title,
                    MIT.title,
                    mozilla2.title,
                    'None'
                ]
            },
            {
                name: 'contribution',
                type: 'input',
                message: "How can someone contribute to the project?"
            },
            {
                name: 'tests',
                type: 'input',
                message: "What are some tests for this project?"
            },
            {
                name: 'gitHub',
                type: 'input',
                message: "What is your GitHub username?"
            },
            {
                name: 'email',
                type: 'input',
                message: "What is the project's contact email?"
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
            content += this.generateContribution();
            content += this.generateTests();
            content += this.generateContact();
            content += this.generateReferences();
            fs.writeFileSync('./output/README.md', content);
            console.log(content);
        }
        catch(error){
            console.log(error);
        }
    }
    generateTitle(){
        if(this.license != null){
            return generateMarkdown.generateTitleLicense(this.title, this.license);
        }
        else{
            return generateMarkdown.generateTitle(this.title);
        }
    }
    generateDescription(){
        let description = '';
        description += generateMarkdown.generateH2('Description');
        description += generateMarkdown.generateText(this.description);
        return description;
    }
    generateTableOfContents(){
        let tableOfContents = '';
        let contents = '';
        if(this.installation != ''){
            contents += generateMarkdown.generateLinkedListItem('Installation');
        }
        if(this.usage != ''){
            contents += generateMarkdown.generateLinkedListItem('Usage');
        }
        if(this.license != null){
            contents += generateMarkdown.generateLinkedListItem('License');
        }
        if(this.contribution != ''){
            contents += generateMarkdown.generateLinkedListItem('Contribution');
        }
        if(this.tests != ''){
            contents += generateMarkdown.generateLinkedListItem('Tests');
        }
        if(this.email != '' || this.gitHub != ''){
            contents += generateMarkdown.generateLinkedListItem('Contact');
        }
        if(this.references.length > 0){
            contents += generateMarkdown.generateLinkedListItem('References');
        }
        if(contents != ''){
            tableOfContents += generateMarkdown.generateH2('Table of Contents');
            tableOfContents += contents;
        }
        return tableOfContents;
    }
    generateInstallation(){
        let installation = '';
        if(this.installation != ''){
            installation += generateMarkdown.generateLinkedH2('Installation');
            installation += generateMarkdown.generateText(this.installation);
        }
        return installation;
    }
    generateUsage(){
        let usage = '';
        if(this.usage != ''){
            usage += generateMarkdown.generateLinkedH2('Usage');
            usage += generateMarkdown.generateText(this.usage);
        }
        return usage;
    }
    generateLicense(){
        let license = '';
        if(this.license != null){
            license += generateMarkdown.generateLinkedH2('License');
            license += generateMarkdown.generateText(this.license.returnDescription());
        }
        return license;
    }
    generateContribution(){
        let contribution = '';
        if(this.contribution != ''){
            contribution += generateMarkdown.generateLinkedH2('Contribution');
            contribution += generateMarkdown.generateText(this.contribution);
        }
        return contribution;
    }
    generateTests(){
        let tests = '';
        if(this.tests != ''){
            tests += generateMarkdown.generateLinkedH2('Tests');
            tests += generateMarkdown.generateText(this.tests);
        }
        return tests;
    }
    generateContact(){
        let contact = '';
        let content = '';
        if(this.email != ''){
            content += generateMarkdown.generateLink('Contact Us', `mailto:${this.email}`);
        }
        if(this.gitHub != ''){
            content += generateMarkdown.generateLink(`GitHub - ${this.gitHub}`, `https://github.com/${this.gitHub}/`);
        }
        if(content != ''){
            contact += generateMarkdown.generateLinkedH2('Contact') + contact;
            contact += content;
        }
        return contact;
    }
    generateReferences(){
        let reference = '';
        if(this.references.length > 0){
            reference += generateMarkdown.generateLinkedH2('References');
            for(let credit of this.references){
                reference += generateMarkdown.generateCitation(credit.author, credit.title, credit.link, credit.date);
            }
        }
        return reference;
    }
    
    async askQuestions(){
        console.log("Answer the following questions to the best of your knowledge.");
        console.log("If a section is not needed, leave the answer blank.");
        console.log("Move the generated './output/README.md' to your projects root folder.");
        console.log("Edit this file if more information is needed.");
        let needsReference = true;
        await inquirer.prompt(this.questions)
        .then((data) => {
            this.title = data.title;
            this.description = data.description;
            this.installation = data.installation;
            this.usage = data.usage;
            switch(data.license){
                case apache2.title:
                    this.license = apache2;
                    break;
                case BSD3Clause.title:
                    this.license = BSD3Clause;
                    break;
                case BSD2Clause.title:
                    this.license = BSD2Clause;
                    break;
                case GNUGPLv3.title:
                    this.license = GNUGPLv3;
                    break;
                /*
                case GNULGPLv3.title:
                    this.license = GNULGPLv3;
                    break;
                */
                case MIT.title:
                    this.license = MIT;
                    break;
                case mozilla2.title:
                    this.license = mozilla2;
                    break;
                default:
                    this.license = null;
                    break;
            };
            if(this.license != null){
                this.license.owner = data.developer;
                this.license.year = new Date().getFullYear();
                this.license.programDescription = data.description;
            }
            this.contribution = data.contribution;
            this.tests = data.tests;
            this.gitHub = data.gitHub;
            this.email = data.email;
        });
        while(needsReference){
            await inquirer.prompt([
                {
                    name: 'credit',
                    type: 'confirm',
                    message: 'Do you want to add a reference?'
                }
            ])
            .then(async (data) => {
                needsReference = data.credit;
                if(needsReference){
                    await inquirer.prompt([
                        {
                            name: 'author',
                            type: 'input',
                            message: 'Who is the author?'
                        },
                        {
                            name: 'title',
                            type: 'input',
                            message: 'What is the title?'
                        },
                        {
                            name: 'link',
                            type: 'input',
                            message: 'What is the HTML address?'
                        },
                        {
                            name: 'date',
                            type: 'input',
                            message: 'When was it published?'
                        }
                    ])
                    .then((answers) => {
                        if(answers.author != '' || answers.title != '' || answers.link != ''){
                            let reference = {
                                author: answers.author,
                                title: answers.title,
                                link: answers.link,
                                date: answers.date
                            };
                            this.references.push(reference);
                        }
                    });
                }
            });
        }
    }
}

module.exports = { README };