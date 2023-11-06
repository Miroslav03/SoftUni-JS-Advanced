const { expect } = require('chai')

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Main tests', () => {
    it('Incorrect input',() => {
        const arr = 'Miro'
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
    it('Correct input',() => {
        const arr = []
        const result = isSymmetric(arr)
        expect(result).to.equal(true)
    })
    it('Symetric Arr',() => {
        const arr = [1,1,1]
        const result = isSymmetric(arr)
        expect(result).to.equal(true)
    })
    it('Non-symetric Arr',() => {
        const arr = [1,2,3]
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
    it('Symetric String Arr',() => {
        const arr = ['a','b','b','a']
        const result = isSymmetric(arr)
        expect(result).to.equal(true)
    })
    it('Random String inside the Arr',() => {
        const arr = [1,2,'2',1]
        const result = isSymmetric(arr)
        expect(result).to.equal(false)
    })
})