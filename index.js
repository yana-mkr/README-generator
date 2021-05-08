// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
        message: 'What are the contribuation guidelines for your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?'
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
            writeToFile("READMETEST.MD", generateMarkdown({ ...data }))
        })
}

// Function call to initialize app
init();

