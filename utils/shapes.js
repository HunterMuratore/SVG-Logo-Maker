const validColors = require('../colors.json');

class Shape {
    constructor(color) {
        this.color = color;
    }

    checkColor() {
        if (this.color.toLowerCase() === 'random') {
            this.color = validColors[Math.floor(Math.random() * validColors.length)];
        }
    }
}

class Circle extends Shape {
    constructor(answer) {
        super(answer.shapeColor);

        this.answer.shape = 'circle';
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
        
        this.shape = 'square';
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        
        this.shape = 'triangle';
    }
}

module.exports = {Circle, Square, Triangle};
