// Inquirer variable to allow use of NPM Inquirer module
const inquirer = require("inquirer");
// File service variable that allows for reading/writing of files
const fs = require('fs');
// Variable to connect generateMarkdown function to application
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/questions").questions;



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