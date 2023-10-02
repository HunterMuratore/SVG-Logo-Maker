const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
let validColors;

const questions = [
    {
        name: 'text',
        message: 'Enter up to three characters you would like to use for the logo:'.cyan,
        validate: validateText
    },
    {
        name: 'color',
        message: 'Enter a color keyword or a 6 digit hexadecimal number:'.cyan,
        validate: validateColor
    },
    {
        name: 'shape',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square'],
        message: 'Please select a shape'.cyan
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
            userAnswers = answers;
            showChoiceMenu();
        });
}

function validateText(input) {
    if (0 < input.length <= 3) {
        return true;
    }
    
    return 'Text must be between 0 and 3 characters'.brightRed;
}

function validateColor(input) {
    // Read the JSON file containing the array of valid colors and assign the array to a variable
    fs.readFile('colors.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
          return;
        }

        validColors = JSON.parse(data).validColors;
    });

    if (validColors.includes(input)) {
        return true;
    } else if (input.length = 6 && /^[0-9A-Fa-f]+$/.test(input)) {
        return true;
    }
    
    return 'Must enter a color keyword (i.e. Red) or a valid hexadecimal number (i.e. #a1b2c3'.brightRed;
}

init();