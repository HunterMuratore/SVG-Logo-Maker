const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./utils/shapes');
const validColors = require('./colors.json');

const questions = [
    {
        name: 'text',
        message: 'Enter up to three characters you would like to use for the logo:'.cyan,
        validate: validateText
    },
    {
        name: 'color',
        message: 'Enter a color keyword or a 6 digit hexadecimal number for the text (or try a \'random\' color):'.cyan,
        validate: validateColor
    },
    {
        name: 'shape',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square'],
        message: 'Please select a shape'.cyan
    },
    {
        name: 'shapeColor',
        message: 'Enter a color keyword or a 6 digit hexadecimal number for the shape (or try a \'random\' color):'.cyan,
        validate: validateColor
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        // writeToFile(generateSVG(answers));
        if (answers.shape === 'Circle') {
            const circle = new Circle(answers);
            circle.checkColor();
        }
    });
}

function writeToFile(data) {
    fs.writeFile(`./logo.svg`, data, (err) => {
        if (err) throw err;
    
        console.log('Logo created successfully!');
    });
}

function validateText(input) {
    if (input.length > 0 && input.length <= 3) {
        return true;
    }
    
    return 'Text must be between 0 and 3 characters - try again'.brightRed;
}

function validateColor(input) {
    if (validColors.includes(input.toLowerCase())) {
        return true;
    } else if (input.length == 7 && /^#[0-9A-Fa-f]+$/.test(input)) {
        return true;
    } else if (input.toLowerCase() === 'random') {
        return true;
    }
    
    return 'Must enter a color keyword (i.e. lightseagreen) or a valid 6 digit hexadecimal number (i.e. #deb887) - try again'.brightRed;
}

function generateSVG(answers) {
    if (answers.shape === 'Circle') {
        return `<svg version="1.1" width="300" height="200">
<circle cx="150" cy="100" r="100" fill="${answers.shapeColor}"/>
<text x="150" y="120" font-size="50" text-anchor="middle" fill="${answers.color}">${answers.text}</text>
</svg>`;
    } else if (answers.shape === 'Square') {
        return `<svg version="1.1" width="300" height="200">
<rect width="300" height="200" fill="${answers.shapeColor}"/>
<text x="150" y="120" font-size="50" text-anchor="middle" fill="${answers.color}">${answers.text}</text>
</svg>`;
    } else if (answers.shape === 'Triangle') {
        return `<svg version="1.1" width="300" height="200">
<polygon points="150,20 30,180 270,180" fill="${answers.shapeColor}"/>
<text x="150" y="150" font-size="50" text-anchor="middle" fill="${answers.color}">${answers.text}</text>
</svg>`;
    }
}

init();
