const validColors = require('../colors.json');

function generateSVG(answers) {
    if (answers.color.toLowerCase() === 'random') {
        answers.color = validColors[Math.floor(Math.random() * validColors.length)];
    }

    if (answers.shapeColor.toLowerCase() === 'random') {
        answers.shapeColor = validColors[Math.floor(Math.random() * validColors.length)];
    }

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

module.exports = generateSVG;
