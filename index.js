// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');

fs.readFile('message.txt', 'utf8', function (error, data) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(data)
    }
});

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter a name in for your project: '
    },
    {
        type:'input',
        name: 'description',
        message: 'Description: '
    },
    {
        type:'input',
        name: 'installation',
        message: 'Installation process : '
    },
    {
        type:'input',
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
        message: 'Lisense: ' (MIT)
        
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

let fileBody = 

    
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
