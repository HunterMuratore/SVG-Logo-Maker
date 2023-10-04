const {Circle, Square, Triangle} = require('./shapes.js');

describe('Shape Tests', () => {
    it('Should return a Shape object', () => {
        const circle = new Circle();
        const square = new Square();
        const triangle = new Triangle();

        expect(circle).toBeInstanceOf(Circle);
        expect(square).toBeInstanceOf(Square);
        expect(triangle).toBeInstanceOf(Triangle);
    });

    it('Should set color to blue', () => {
        const shape = new Circle();

        shape.setColor('blue')

        expect(shape.color).toEqual('blue');
    });

    it('Should render the circle svg string', () => {
        const shape = new Circle();
        shape.setColor("blue");

        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue"/>`);
    });

    it('Should render the square svg string', () => {
        const shape = new Square();
        shape.setColor("blue");

        expect(shape.render()).toEqual(`<rect width="300" height="200" fill="blue"/>`);
    });

    it('Should render the triangle svg string', () => {
        const shape = new Triangle();
        shape.setColor("blue");

        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });
})