const { expect } = require('chai')

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}
lookupChar('Miro', 2.14)

describe('Main tests', function () {
    it('Both parameters are invalid', () => {
        expect(lookupChar(19, true)).to.equal(undefined)
    })
    it('Both parameters are valid', () => {
        expect(lookupChar('Miro', 2)).to.equal('r')
    })

    it('Second parameter is bigger than the string length', () => {
        expect(lookupChar('Miro', 15)).to.equal('Incorrect index')
    })
    it('Second parameter is lower than the string length', () => {
        expect(lookupChar('Miro', -1)).to.equal('Incorrect index')
    })

    it('First parameter is invalid', () => {
        expect(lookupChar(true, 2)).to.equal(undefined)
    })
    it('Second parameter is a string', () => {
        expect(lookupChar('Miro', '19')).to.equal(undefined)
    })
    it('Second parameter is a floating point number', () => {
        expect(lookupChar('Miro', 2.14)).to.equal(undefined)
    })

})