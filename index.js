//Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

//function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, data, (err) => {
        // In case of a error throw err. 
        if (err) throw err;
    });

};

//Create a function to initialize app
function init() {
    //An array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter a name in for your project: '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation process: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'License: ',
            choices: ['MIT', 'ISC', 'MPL 2.0', 'OSL 3.0', 'SIL']

        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Contributors: ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests: ',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'GitHub Username: ',

        },
        {
            type: 'input',
            name: 'email',
            message: 'E-mail address: ',

        }


    ]).then((resoponsesObj) => {
        //switch to put badge on top
        var license = resoponsesObj.license
        switch (license) {
            case 'MIT':
                licenseIMG = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                break;
            case 'ISC':
                licenseIMG = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
                break;
            case 'MPL 2.0':
                licenseIMG = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
                break;
            case 'Apache':
                licenseIMG = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case 'SIL Open Font License 1.1':
                licenseIMG = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
                break;
        }
        //inputing responses to file string --> then inputting into md file
        const filename = `README.md`;
        //initializing and putting Project title at top
        let fileBody = `${licenseIMG}\n\n# ${resoponsesObj.projectTitle} \n\n`;

        //inputs description
        fileBody += `## Table of Contents\n\n`;
        fileBody += `- [Project Title](#project-title)\n`;
        fileBody += `- [Description](#description)\n`;
        fileBody += `- [Table of contents](#table-of-contents)\n`;
        fileBody += `- [Installation Instructions](#installation)\n`;
        fileBody += `- [Usage Information](#usage)\n`;
        fileBody += `- [Contributions](#contribute)\n`;
        fileBody += `- [Questions](#questions)\n`;
        fileBody += `- [Tests](#tests)\n`;
        fileBody += `- [License](#license)\n\n`;

        fileBody += `## Description \n\n ${resoponsesObj.description} \n\n`;
        fileBody += `## Installation Instructions \n\n ${resoponsesObj.installation} \n\n`;
        fileBody += `## Usage Information \n\n ${resoponsesObj.usage} \n\n`;
        fileBody += `## Contributions \n\n ${resoponsesObj.contributions} \n\n`;
        fileBody += `## Questions \n\n You can ask your questions by messaging me on Github at -> https://github.com/${resoponsesObj.githubUsername} <br /> or by emailing me at -> ${resoponsesObj.email}\n\n`;
        fileBody += `## Tests \n\n ${resoponsesObj.tests} \n\n [(Back to top)](#table-of-contents)`;

        writeToFile(filename, fileBody);
    });

};

// Function call to initialize app
init();
