const { expect } = require('chai')


function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}
console.log(isOddOrEven('22'))

describe('Main tests', function () {
    it('Expext not a string', () => {
        expect(isOddOrEven(1)).to.equal(undefined)
    })
    it('Expext not a string', () => {
        expect(isOddOrEven(true)).to.equal(undefined)
    })
    it('Expext an odd length', () => {
        expect(isOddOrEven('1')).to.equal('odd')
    })
    it('Expext an even length', () => {
        expect(isOddOrEven('22')).to.equal('even')
    })

})