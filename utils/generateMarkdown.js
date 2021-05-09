// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License](#license)`
}
//https://choosealicense.com/licenses/

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  >[Installation](#installation)
  
  >[Usage](#usage)
  
  >[License](#license)
  
  >[Contributing](#contributing)
  
  >[Tests](#tests)
  
  >[Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ### Take a look at my [GitHub](https://github.com/${data.github})!
  

  ### [Email me](mailto:${data.email}) with any questions.
  `;
}

module.exports = generateMarkdown;
