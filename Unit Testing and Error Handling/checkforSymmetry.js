const { expect } = require('chai')

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
console.log(isSymmetric([1, 2, '2', 1]))

describe('Main tests ', function () {

    it('Take an array as argument', () => {
        const arr = [];
        const result = isSymmetric(arr)
        expect(result).to.equal(true)
    })
    it('Incorrect type of input', () => {
        const arr = 'Miro';
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
    it('Check for symetrical Arrays', () => {
        const arr = [1, 2, 2, 1];
        const result = isSymmetric(arr)
        expect(result).to.equal(true)
    })
    it('Check for unsymetrical Arrays', () => {
        const arr = [1, 2, 1, 1];
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
    it('Check for string in the Array', () => {
        const arr = [1, 2, 'Miro', 1];
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
    it('Check for string symetry in the Array', () => {
        const arr = ['a','b','b',"a"];
        const result = isSymmetric(arr)
        expect(result).to.equal(true)
    })
    it('Check for number string in the Array', () => {
        const arr = [1, 2, '2', 1];
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
}
)