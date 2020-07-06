const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        message: "Please enter a description of your project:",
        name: "description",
    },
    {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
            "email",
            "phone",
            "telekinesis"
        ]
    }

])

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();