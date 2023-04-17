// setting variables to use the fs/inquirer modules.
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this README?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a brief description for this README.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Create a table of contents for this README.',
            name: 'Table Of Contents',
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
            type: 'input',
            message: 'Pick a license for the README.',
            name: 'License',
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
            message: 'Enter any questions regarding the README.',
            name: 'Questions',
        }

    ])
