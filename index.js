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
        name: 'title',
        message: 'Enter the title of your project',
        defaut: 'Project Title',
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
        name: 'Description',
        message: 'Provide a descriptuon of your project',
        defaut: 'Project Description',
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
        name: 'Installation',
        message: 'Provide the installation instructions of your project',
        defaut: 'Installation Instructions',
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
        name: 'Usage',
        message: 'Provide the usage information relative to your project',
        defaut: 'Usage Information',
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
        name: 'Guidlines',
        message: 'Provide guidlines for others developers, which can be interrested to contribute to your project',
        defaut: 'Guidlines',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Contribution guidlines to your project are required')
            }
            return true;
        }

    },

    // Text instrcutions

    {
        type: 'input',
        name: 'Test',
        message: 'Provide instruction how to run and test your application',
        defaut: 'Test Instructions',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Test instructions how to run the applications are required')
            }
            return true;
        }

    },

    // License
    {
        type: 'input',
        name: 'License',
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
function init() {
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
        await writeFileAsync('Your Readme.md', markdown);
    } catch(err) {
        console.log(err);
    }
    
};

// Function call to initialize app
init();
