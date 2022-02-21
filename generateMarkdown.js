// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

## Description
${data.Description}
  
## Table of Contents
   Project Description/Title
  
## Usage
   ${data.use}
​   This application is used for quick readme generator

## License
   ${data.License}
  
## Installation
   The following necessary dependencies must be installed to run the application properly: undefined
   ${data.install}
## Questions 
   If you have any question please don't hesitate to contact me 
   my email is ${data.email}
   my Github is ${data.github}

## Contributors


`;
}

module.exports = generateMarkdown;
