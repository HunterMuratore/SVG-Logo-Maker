const validColors = require('../colors.json');

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    checkColors() {
        if (this.color.toLowerCase() === 'random') {
            this.color = validColors[Math.floor(Math.random() * validColors.length)];
        }
    
        if (this.shapeColor.toLowerCase() === 'random') {
            this.shapeColor = validColors[Math.floor(Math.random() * validColors.length)];
        }
    }
}

class Circle extends Shape {
    constructor(shape) {
        super();

        this.shape = shape;
    }
}

class Square extends Shape {
    constructor(shape) {
        super();
        
        this.shape = shape;
    }
}

class Triangle extends Shape {
    constructor(shape) {
        super();
        
        this.shape = shape;
    }
}

module.exports = {Circle, Square, Triangle};
