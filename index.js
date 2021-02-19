// TODO: Include packages needed for this application
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

// TODO: Create a function to initialize app
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
            message: 'Installation process : '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: '
        },
        {
            type: 'list',
            name: 'license',
            message: 'Lisense: ',
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

        }
        {
            type: 'input',
            name: 'questions',
            message: 'GitHub Username: ',

        }


    ]).then((resoponsesObj) => {
        //switch to put badge on top
        let liscense = resoponsesObj.liscense
        switch (liscense) {
            case 'MIT':
                liscenseIMG =
                break;
            case 'ISC':
                liscenseIMG =
                break;
            case 'MPL 2.0':
                liscenseIMG =
                break;
            case 'OSL 3.0':
                liscenseIMG =
                break;
            case 'SIL':
                liscenseIMG =
                break;
            default:
            // code block
        }
        //inputing responses to file string --> then inputting into md file
        const filename = `${resoponsesObj.projectTitle.toLowerCase().split(' ').join('')}_readme.md`;
        //initializing and putting Project title at top
        let fileBody = `# ${resoponsesObj.projectTitle} \n\n`;

        //inputs description
        fileBody += `## Table of Contents \n\n 
        - [Project Title](#project-title)\n
        - [Description](#description)\n
        - [Table of contents](#table-of-contents)\n
        - [Installation Instructions](#installation)\n
        - [Usage Information](#usage)\n
        - [Contributions](#contribute)\n
        - [Questions](#questions)\n
        - [Tests](#tests)\n
        - [License](#license)\n`;

        fileBody += `## Description \n\n ${resoponsesObj.description} \n\n`;
        fileBody += `## Installation Instructions \n\n ${resoponsesObj.installation} \n\n`;
        fileBody += `## Usage Information \n\n ${resoponsesObj.usage} \n\n`;
        fileBody += `## Contributions \n\n ${resoponsesObj.contributions} \n\n`;
        fileBody += `## Questions \n\n ${resoponsesObj.questions}\n\n`;
        fileBody += `## Tests \n\n ${resoponsesObj.tests} \n\n [(Back to top)](#table-of-contents)`;

        writeToFile(filename, fileBody);
    });

};

// Function call to initialize app
init();
