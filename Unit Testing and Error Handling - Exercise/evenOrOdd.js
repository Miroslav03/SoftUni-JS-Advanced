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



describe('Main tests', () => {
    it('Is not a string', () => {
        const result = isOddOrEven(12)
        expect(result).to.equal(undefined)
    })
    it('Is odd number', () => {
        const result = isOddOrEven('Miro')
        expect(result).to.equal('even')
    })
    it('Is odd number', () => {
        const result = isOddOrEven('Mir')
        expect(result).to.equal('odd')
    })
})