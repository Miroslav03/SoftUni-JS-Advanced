const { expect } = require("chai");

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}


describe('Main tests',function(){
    it(`Correct result`,() =>{
        const arr = [1,2,3]
        const value = sum(arr)
        expect(value).to.equal(6)
    })
    it(`Incorrect result`,() =>{
        const arr = [1,2,3]
        const value = sum(arr)
        expect(value).to.not.equal(7)
    })
    it(`Incorrect input`,() =>{
        const arr = ['Miro',2,3]
        const value = sum(arr)
        expect(isNaN(value)).to.equal(true)
    })
    it(`Empty arr`,() =>{
        const arr = []
        const value = sum(arr)
        expect(value).to.equal(0)
    })
})