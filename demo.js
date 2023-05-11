const { expect } = require('chai')

function sum(a,b){
    return a+b;
}

describe("Main tests", function (){
    it('works with hole numbers',()=>{
        expect(sum(3,4)).to.equal(7)
    })
})
