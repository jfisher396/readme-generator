// Inquirer variable to allow use of NPM Inquirer module
const inquirer = require("inquirer");
// File service variable that allows for reading/writing of files
const fs = require('fs');
// Variable to connect generateMarkdown function to application
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path')

// array of questions for user
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        message: "Please enter a brief description of your project:",
        name: "description",
    },
     {
         type: "input",
         message: "Questions?",
         name: "questions",
     }
    // {
    //     type: "input",
    //     message: "What are the installation instructions for your project?",
    //     name: "installation",
    // },
    // {
    //     type: "input",
    //     message: "Please describe how we can use this program?",
    //     name: "usage",
    // },
    // {
    //     type: "input",
    //     message: "How can someone contribute to your project?",
    //     name: "contribution",
    // },
    // {
    //     type: "input",
    //     message: "Please enter any testing protocols you used for your project?",
    //     name: "test",
    // },
    // {
    //     type: "input",
    //     name: "userName",
    //     message: "What is your GitHub username?",
    // },
    // {
    //     type: "input",
    //     name: "userEmail",
    //     message: "What is your GitHub email?",
    // }
]


// function to write README file
function writeToFile(fileName, data) {
    let readMeData = generateMarkdown(data);
    fs.writeFile(fileName, readMeData, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers) {
        fs.writeFileSync(path.join(process.cwd(), "README.md"), 
        generateMarkdown({...answers}), 
        err => err && console.log(err)
        )
        console.log({...answers});
    });
}
// function call to initialize program
init();