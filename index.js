// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Project title
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username',
        default: '',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('You muss enter your Github username')
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'repo',
        message: 'provide your Github repo',
        default: '',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('You Github repo is required')
            }
            return true;
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
        default: 'Project Title',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('You muss enter the title of your project')
            }
            return true;
        }

    },

    // Project description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a descriptuon of your project',
        default: 'Project Description',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('A description of your project is required')
            }
            return true;
        }

    },


    // Installation Instructions

    {
        type: 'input',
        name: 'installation',
        message: 'Provide the installation instructions of your project',
        default: 'Installation Instructions',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Installation instructions of your project are required')
            }
            return true;
        }

    },

    // Usage Information

    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information relative to your project',
        default: 'Usage Information',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Usage information relative to your project is required')
            }
            return true;
        }

    },

    // Contribution guidlines

    {
        type: 'input',
        name: 'guidlines',
        message: 'Provide guidlines for others developers, which can be interrested to contribute to your project',
        default: 'Guidlines',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Contribution guidlines to your project are required')
            }
            return true;
        }

    },

    // Test instrcutions

    {
        type: 'input',
        name: 'test',
        message: 'Provide instruction how to run and test your application',
        default: 'Test Instructions',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Test instructions how to run the applications are required')
            }
            return true;
        }

    },

    // License
    {
        type: 'list',
        name: 'license',
        message: 'Choice a license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('A license for your project is required')
            }
            return true;
        }

    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! Your Readme.md file has been generated')
  );
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        // Prompt inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your Responses: ", userResponses);
        console.log("Thank for your responses");

        //  Call Github api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your Github user info: ", userInfo);

        // Insert inquirer userReponses and Gthub userInfo into  generateMarkdown
        console.log("Generating your Readme file");
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // Write markdown to file
        await writeFileAsync('RExampleReadme.md', markdown);
    } catch(error) {
        console.log(error);
    }
    
};

// Function call to initialize app
init();
