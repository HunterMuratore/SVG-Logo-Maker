const generateSVG = require('./shapes');

describe('Generate SVG Tests', () => {
    it('Should return a string', () => {
        const svg = generateSVG({
            text: 'HMM',
            color: 'blue',
            shape: 'Circle',
            shapeColor: 'green'
        });

        expect(typeof svg).toBe('string');
    });

    it('Should set random colors', () => {
        const svg = generateSVG({
            text: 'HMM',
            color: 'random',
            shape: 'Circle',
            shapeColor: 'random'
        });

        expect(svg.color).not.toEqual('random');
        expect(svg.shapeColor).not.toEqual('random');
    });
})