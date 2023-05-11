function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

const { expect } = require('chai')
sum([1,2,'das'])

describe('Main tests',function(){

    it('Take an  empty array',() =>{
        const emptyArr = [];
        const result = sum(emptyArr)
        expect(result).to.equal(0)
    })
    it('Return the sum of the values',() =>{
        const emptyArr = [1,2,3];
        const result = sum(emptyArr)
        expect(result).to.equal(6)
    })
    it('Return the sum of the values',() =>{
        const emptyArr = [1,2,3];
        const result = sum(emptyArr)
        expect(result).to.equal(6)
    })

})