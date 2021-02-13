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
        type: 'list',
        name: 'license',
        message: 'What kind of license would your project have',
        choices: ['MIT', 'Apache', 'None']
    }
// email , projectname , description, license use choices (mit , appache ..), 
//what command should run dependicies (npm i)
// what command should be run to test (npm test)
//what does the user need to know about using the repo
//what does the user need to know about contributing

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
