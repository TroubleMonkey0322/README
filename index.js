// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
inquirer
.prompt([
 {
    type: 'input',
    message: colors.rainbow('What is your favorite number?'),
    name: 'number',
      },
      {
        type: 'list',
        message: colors.orange('What is your favorite color?'),
        name: 'color',
        choices: ['Pink', 'Blue', 'Green', 'Orange', 'Red'],
      },
      {
        type: 'checkbox',
        message: colors.green('What is your favorite animal?'),
        name: 'animal';
        choices: ['Cat', 'Dog', 'Tiger', 'Dinosaur'],
      },
    ])

        .then((answer) => {
            const fileName = `${answer.name.toLowerCase().split(' ').join('')}.json`;
        

// TODO: Create a function to write README file
fs.writeToFile(fileName, JSON.stringify(data, null, `\t`), (err) =>
    err ? console.log(err) : console.log('Yippee! You did it!')
);
        });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
