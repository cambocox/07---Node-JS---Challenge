// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is the project installed?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is the project used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to the project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can the project be tested?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is the project under?',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
      }
      
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }

// Function to initialize app
function init() {
    inquirer.prompt(questions)
      .then((responses) => {
        const markdownContent = generateMarkdown(responses);
        writeToFile('./output/README.md', markdownContent);
        console.log('README.md has been generated!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Function call to initialize app
  init();