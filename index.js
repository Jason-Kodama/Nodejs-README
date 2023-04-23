// setting variables to use the fs/inquirer modules.
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({Title, Description, Table, Installation, Usage, License, Contributing, Tests, Questions}) => {
    const readme = `
    # ${Title}

    ## Description
    
    ${Description}
    
    ## Table of Contents
    
    * [Description](#description)
    
    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contributing](#contributing)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    ## Installation
    
    ${Installation}
    
    ## Usage
    
    ${Usage}
    
    ## License
    
    ${License}
    
    ## Contributing
    
    ${Contributing}
    
    ## Tests
    
    ${Tests}
    
    ## Questions
    
    If you have any questions, feel to reach out to me 
    ${Questions}
    https://github.com/Jason-Kodama
    
    `;
fs.writeFile('README.MD', readme, (err) => {
    err ? console.error(err) : console.log('File creation success!!')
} )
};


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this README?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'Write a brief description for this README.',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Write an installation guide.',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Write contents for the Usage section.',
            name: 'Usage',
        },
        {
            type: 'list',
            message: 'Pick a license for the README.',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines.',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Enter tests used.',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Questions',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Github',
        }

    ])
    .then(generateReadMe)
