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
console.log(rgbToHexColor(66, 135, 245, 0))

describe("Main tests", function () {


    it('Valid ', () => {
        expect(rgbToHexColor(1, 1, 1)).to.equal('#010101')
    })
    it('Invalid ', () => {
        expect(rgbToHexColor(-1, -1, -1)).to.equal(undefined)
    })

    it('Invalid Green ', () => {
        expect(rgbToHexColor(50, -1, 50)).to.equal(undefined)
    })
    it('Invalid Red ', () => {
        expect(rgbToHexColor(-1, 50, 50)).to.equal(undefined)
    })
    it('Invalid Blue ', () => {
        expect(rgbToHexColor(50, 50, -1)).to.equal(undefined)
    })

    it('More args ', () => {
        expect(rgbToHexColor(50, 50, 50,0)).to.equal(`#323232`)
    })

    it('Decimal number', () => {
        expect(rgbToHexColor(50.2, 50, 50,0)).to.equal(undefined)
    })

    it('String number', () => {
        expect(rgbToHexColor('50.2', 50, 50,0)).to.equal(undefined)
    })

    it('Highest input', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    })
    it('Lowest input', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    })

    it('Higher Red', () => {
        expect(rgbToHexColor(257,0,0)).to.equal(undefined)
    })
    it('Higher Green', () => {
        expect(rgbToHexColor(0,257,0)).to.equal(undefined)
    })

    it('Higher Blue', () => {
        expect(rgbToHexColor(0,257,0)).to.equal(undefined)
    })
})

