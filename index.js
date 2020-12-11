// Inquirer variable to allow use of NPM Inquirer module
const inquirer = require("inquirer");
// File service variable that allows for reading/writing of files
const fs = require('fs');
// Variable to connect generateMarkdown function to application
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;



// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        message: "Please enter a one-sentence description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Please tell us about your project:",
        name: "about",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the link to clone the repo?",
        name: "clone",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ]
    },
    {
        type: "input",
        message: "Please enter any testing protocols you used for your project?",
        name: "test",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email?",
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL of the live site?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the URL of the github repo?",
    },


]
// function to write README file titles and content
function writeToFile(fileName, data) {
    let readMeData = generateMarkdown(data);
    fs.writeFileSync(fileName, readMeData, function (err) {

        if (err) {
            return console.log(err);
        }
    });
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, 2));
        data.licenseBadge = licenseBadge(data.license);
        writeToFile("created-README.md", data);
    });
}

// function call to initialize program
init();

// End of line