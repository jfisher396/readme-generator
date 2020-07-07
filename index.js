// Inquirer variable to allow use of NPM Inquirer module
const inquirer = require("inquirer");
// File service variable that allows for reading/writing of files
const fs = require('fs');
// Variable to connect generateMarkdown function to application
const generateMarkdown = require("./utils/generateMarkdown");


// This function will determine badges based on license selection.
function licenseBadge(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
}

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
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Please describe how we can use this program?",
        name: "usage",
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
        message: "How can someone contribute to your project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter any testing protocols you used for your project?",
        name: "test",
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

]
// function to write README file titles and content
function writeToFile(fileName, data) {
    let readMeData = generateMarkdown(data);
    fs.writeFile(fileName, readMeData, function (err) {

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
        writeToFile("README.md", data);
    });
}

// function call to initialize program
init();

// End of line