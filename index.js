const readme = require('./utils/classReadme')

// TODO: Create a function to initialize app
function init() {
    let myREADME = new readme.README();
    myREADME.generateREADME();
}

// Function call to initialize app
init();
