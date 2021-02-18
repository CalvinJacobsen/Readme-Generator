// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');

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
            type: 'input',
            name: 'contributions',
            message: 'Author: ',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Lisense: '

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


    ]).then((resoponsesObj) => {
        //inputing responses to file string --> then inputting into md file
        const filename = `${resoponsesObj.projectTitle.toLowerCase().split(' ').join('')}.md`;
        //initializing and putting Project title at top
        let fileBody = `# ${resoponsesObj.projectTitle} \n\n`;

        //inputs description
        fileBody += `## Description \n\n ${resoponsesObj.description} \n\n`;
        fileBody += `## Installation Instructions \n\n ${resoponsesObj.installation} \n\n`;
        fileBody += `## Usage Information \n\n ${resoponsesObj.usage} \n\n`;
        fileBody += `## Contributions \n\n ${resoponsesObj.contributions} \n\n`;
        fileBody += `## Tests \n\n ${resoponsesObj.tests} \n\n`;

        writeToFile(filename, fileBody);
    });

};

// Function call to initialize app
init();
