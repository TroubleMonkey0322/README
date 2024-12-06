// TODO: Include packages needed for this application
import colors from 'colors';
import inquirer from 'inquirer';
import fs from 'fs';


// TODO: Create an array of questions for user input
   
  
  inquirer 
  .prompt([

 {
    type: 'input',
    message: colors.rainbow('Title'),
    name: 'title',
      },
      {
        type: 'input',
        message: colors.magenta('Description'),
        name: 'description',
              },
              {
                type: 'list',
                message: colors.gray('License'),
                name: 'license',
                choices: ['MIT', 'ISC', 'Mozilla Public License 2.0', 'Open Software License 3.0' ],
              },
              {
                type: 'input',
                message: colors.cyan('Contributing'),
                  name: 'contributing',
              },
              {
                type: 'input',
                message: colors.white('Installation'),
                name: 'installation',
              },
              {
                type: 'input',
                message: colors.blue('Usage'),
                name: 'usage',
              },
              {
                type: 'input',
                message: colors.green('Contributing'),
                name: 'contributing',
              },
             {
             type: 'input',
              message: colors.yellow('Tests'),
              name: 'test',
             },
             {
              type: 'input',
              message: colors.red('Questions'),
              name: 'questions'
             },
    ]).then(answers => {
      const readmeContent = `
      # ${answers.title}
      
      ## Description
      ${answers.description}

     ## Table of Contents
     
     
      ## Installation
      ${answers.installation}

      ## Usage
      ${answers.usage}

      ## License
      ${answers.license}

      ## Contributing
      ${answers.contributing}

      ## Tests
      ${answers.test}

      ## Questions
      ${answers.questions}
      `;

              

// TODO: Create a function to write README file
fs.writeFileSync('README.md', readmeContent);
console.log('README.md has been generated!');
});

        

// TODO: Create a function to initialize app
//function () {}

// Function call to initialize app
// init();

