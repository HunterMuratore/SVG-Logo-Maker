class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }
    
    render() {
        return `<rect width="300" height="200" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}

module.exports = {Circle, Square, Triangle};
