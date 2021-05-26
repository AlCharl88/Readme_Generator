const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
const mitText = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";

const mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)";
const mozillaText = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";

const inqversion = "![npm](https://img.shields.io/npm/v/inquirer)";
const inqText = "Copyright (c) 2016 Simon Boudrias (twitter: @vaxilart) Licensed under the MIT license.";


let licenseLink = "";
let licenseText = "";


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      licenseLink = mit;
      break;
    case "Mozilla":
      licenseLink = mozilla;
      break;
    case "Inquirer":
      licenseLink = inqversion;
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}
// renderLicenseBadge(license);

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      licenseLink = mit;
      break;
    case "Mozilla":
      licenseLink = mozilla;
      break;
    case "Inquirer":
      licenseLink = inqversion;
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}

// renderLicenseLink(license);

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
      licenseText = mitText;
      break;
    case "Mozilla":
      licenseText = mozillaText;
      break;
    case "Inquirer":
      licenseText = inqText;
      break;
    default:
      licenseText = "";
  }
  return licenseText;
}

// renderLicenseSection(license);

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {

  // Generate Table of Content
  let draftTable = '## Table of Content';
  if (userResponses.description !== ``) { 
    draftTable += ` * [Description](#descripton)` };

  if (userResponses.installation !== ``) { 
    draftTable += ` * [Installation](#installation)` };

  if (userResponses.usage !== ``) { 
    draftTable += ` * [Usage](#usage)` };
  
  if (userResponses.guidlines !== ``) { 
    draftTable += ` * [Guidlines](#guidlines)` };
  
  if (userResponses.test !== ``) { 
    draftTable += ` * [Test](#test)` };
  
  if (userResponses.license !== ``) { 
    draftTable += ` * [License](#license)` };
  
  // Project Title and Description 

  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repository}?style=flat&logo=appveyor) 

  ## Description

  ${userResponses.description}
  `
// Add table of content to markdown
  draftMarkdown += draftTable;

// Add license to markdown
  draftMarkdown += ` * [License](#license)`;

// Installation
    draftMarkdown += `
    
    ### Installation
    
    ${userResponses.installation}
    `

  // Usage
  draftMarkdown += `
    
    #### Usage
    
    ${userResponses.usage}
    `

    // Guidlines

    draftMarkdown += `
    
    ##### Guidlines
    
    ${userResponses.guidlines}
    `

    // Tests

    draftMarkdown += `
    
    ###### Test
    
    ${userResponses.test}
    `

    // License

    draftMarkdown += `
    
    ####### License
    
    ${userResponses.license}
    `

    // Questions
    let draftDevelopper = 
    `
    ########  Questions
    ${userResponses.username}
    ![Developer Profile Picture](${userInfo.avatar_url}) 
  
    For any additional question, please contact me with the information below:
   
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;
    
    // Add Github email to question section if not null

    if (userInfo.email !== null) {
  
    draftDevelopper +=
    `
    Email: ${userInfo.email}
  
    `};
    
    // Add Question section to markdown

    draftMarkdown += draftDevelopper;

    // Return Markdown

    return draftMarkdown;

}

module.exports = generateMarkdown;
