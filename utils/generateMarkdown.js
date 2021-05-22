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
  
    For any additinal question, please contact me with the information below:
   
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
