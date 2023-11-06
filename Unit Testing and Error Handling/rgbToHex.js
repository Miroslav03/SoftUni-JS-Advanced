const { expect } = require('chai')


function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }

    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }

    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("Main tests", () => {
    it('Invalid red', () => {
        const red1 = -1;
        const red2 = 256;
        const red3 = 'Miro';
        const red4 = 2.4;
        const red5 = '2.4';

        const green = 2;
        const blue = 4;

        const result1 = rgbToHexColor(red1, green, blue);
        const result2 = rgbToHexColor(red2, green, blue);
        const result3 = rgbToHexColor(red3, green, blue);
        const result4 = rgbToHexColor(red4, green, blue);
        const result5 = rgbToHexColor(red5, green, blue);

        expect(result1).to.equal(undefined);
        expect(result2).to.equal(undefined);
        expect(result3).to.equal(undefined);
        expect(result4).to.equal(undefined);
        expect(result5).to.equal(undefined);
    })
    it('Invalid green', () => {
        const green1 = -1;
        const green2 = 256;
        const green3 = 'Miro';
        const green4 = 2.4;
        const green5 = '2.4';

        const red = 2;
        const blue = 4;

        const result1 = rgbToHexColor(red, green1, blue);
        const result2 = rgbToHexColor(red, green2, blue);
        const result3 = rgbToHexColor(red, green3, blue);
        const result4 = rgbToHexColor(red, green4, blue);
        const result5 = rgbToHexColor(red, green5, blue);

        expect(result1).to.equal(undefined);
        expect(result2).to.equal(undefined);
        expect(result3).to.equal(undefined);
        expect(result4).to.equal(undefined);
        expect(result5).to.equal(undefined);
    })
    it('Invalid blue', () => {
        const blue1 = -1;
        const blue2 = 256;
        const blue3 = 'Miro';
        const blue4 = 2.4;
        const blue5 = '2.4';

        const red = 2;
        const green = 4;

        const result1 = rgbToHexColor(red, green, blue1);
        const result2 = rgbToHexColor(red, green, blue2);
        const result3 = rgbToHexColor(red, green, blue3);
        const result4 = rgbToHexColor(red, green, blue4);
        const result5 = rgbToHexColor(red, green, blue5);

        expect(result1).to.equal(undefined);
        expect(result2).to.equal(undefined);
        expect(result3).to.equal(undefined);
        expect(result4).to.equal(undefined);
        expect(result5).to.equal(undefined);
    })

    it('Valid input', () => {
        const red = 1;
        const green = 1;
        const blue = 1;

        const result = rgbToHexColor(red, green, blue);
        expect(result).to.equal('#010101')
    })
    it('All invalid input', () => {
        const red = -1;
        const green = -1;
        const blue = -1;

        const result = rgbToHexColor(red, green, blue);
        expect(result).to.equal(undefined);
    })

    it('More than 3 parameters', () => {
        const red = 0;
        const green = 0;
        const blue = 0;
        const unknownParameter = 0;
        const result = rgbToHexColor(red, green, blue,unknownParameter);
        expect(result).to.equal('#000000');
    })

    it('Highest input', () => {
        const red = 255;
        const green = 255;
        const blue = 255;
        const result = rgbToHexColor(red, green, blue,);
        expect(result).to.equal('#FFFFFF')
    })
    it('Lowest input', () => {
        const red = 0;
        const green = 0;
        const blue = 0;
        const result = rgbToHexColor(red, green, blue,);
        expect(result).to.equal('#000000');
    })

}) 