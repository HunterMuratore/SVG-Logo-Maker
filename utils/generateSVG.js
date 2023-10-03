const validColors = require('../colors.json');

function generateSVG(answers) {
    console.log(answers);
    console.log('SVG Generated!');

    if (answers.color.toLowerCase() === 'random') {
        answers.color = validColors[Math.floor(Math.random() * validColors.length)];
    }

    if (answers.shapeColor.toLowerCase() === 'random') {
        answers.shapeColor = validColors[Math.floor(Math.random() * validColors.length)];
    }

    console.log(answers.color);
    console.log(answers.shapeColor);
}

module.exports = generateSVG;
