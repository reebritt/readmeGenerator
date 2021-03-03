const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'project',
        message: 'What is the name of the project?'
       
    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would your project have?',
        choices: ['MIT', 'Apache', 'None']
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependicies?',
        default: 'npm i'

    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
        default: 'npm test'
    },

    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing?'
    }
   

];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        writeToFile("README.md", generateMarkdown({...responses}))
    })
}

// function call to initialize program
init();
