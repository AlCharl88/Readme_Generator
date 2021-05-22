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

    // Table of Content

    {
        type: 'input',
        name: 'Table of Content',
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
        message: 'Provide a descriptuon of your project',
        defaut: 'Installation Instructions',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log('Installation instructions of your project is required')
            }
            return true;
        }

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
