// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter directions to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add additional usage information.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this application covered under?',
        choices: ['GNU', 'Apache', 'MIT', 'Mozilla', 'Boost', 'Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile("README.MD", generateMarkdown({ ...data }))
        })
}

// Function call to initialize app
init();

