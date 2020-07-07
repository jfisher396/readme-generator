// function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  # Project Title:

  ${data.title}

  ${data.licenseBadge}
  
---

  ## Description:

  ${data.description}

  ---

  ## Table of Contents:
  *[Installation](#Installation) 
  *[Usage](#Usage)
  *[License](#License)
  *[Contributing](#Contribution)
  *[Tests](#Tests) 
  *[Questions](#Contact-Information)

---

  ## Installation:

  ${data.installation}

---

  ## Usage:

  ${data.usage}

---

  ## License
  License used for this project - ${data.license}
    * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

  ## Contributing:

  ${data.contribution}

---

  ## Tests:
  ${data.test}

---

  ## Contact Information:
    *GitHub Username: ${data.userName}
    *GitHub Email: ${data.userEmail}
  
`;
}

module.exports = generateMarkdown;