// function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  # ${data.title}

  # Description:

  ${data.description}

  ---

  # Table of contents 
  *[Installation](#Installation) 
  *[Usage](#Usage) 
  *[Contributing](#Contribution)
  *[Tests](#Tests) 
  *[Questions](#Contact-Information)

  
---

  ## Installation Instructions:

  ${data.installation}

---

  ## Usage:

  ${data.usage}

---

  # Contributing

  ${data.contribution}

---

  # Tests
  ${data.test}

---

  # Contact Information
    *GitHub Username: ${data.userName}
    *GitHub Email: ${data.userEmail}
  
  
`;
}

module.exports = generateMarkdown;