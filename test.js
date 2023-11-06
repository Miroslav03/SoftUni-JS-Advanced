const {expect} = require ('chai')

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe('Main tests',() =>{
    it('Returns object',() =>{
        const obj = createCalculator()
        expect(obj).to.haveOwnPropertyDescriptor('add')
        expect(obj).to.haveOwnPropertyDescriptor('subtract')
        expect(obj).to.haveOwnPropertyDescriptor('get')
        expect(typeof obj).to.equal('object')
    })

    it('Add function number',() =>{
        const obj = createCalculator()
        obj.add(12);
        expect(obj.get()).to.equal(12);
    })
    it('Add function string',() =>{
        const obj = createCalculator()
        obj.add('Miro');
        expect(isNaN(obj.get())).to.equal(true);

    }) 
    it('Add function string number',() =>{
        const obj = createCalculator()
        obj.add('1.2');
        expect(obj.get()).to.equal(1.2);
    })
    it('Add function undefined',() =>{
        const obj = createCalculator()
        obj.add(undefined);
        expect(isNaN(obj.get())).to.equal(true);
    })
    //SUBTRACT
    it('Subtract function string',() =>{
        const obj = createCalculator()
        obj.subtract('Miro');
        expect(isNaN(obj.get())).to.equal(true);
    })
    it('Subtract function number',() =>{
        const obj = createCalculator()
        obj.subtract(1);
        expect(obj.get()).to.equal(-1);
    })
    it('Subtract string number',() =>{
        const obj = createCalculator()
        obj.subtract('1.2');
        expect(obj.get()).to.equal(-1.2);
    })
    it('Subtract undefined',() =>{
        const obj = createCalculator()
        obj.subtract(undefined);
        expect(isNaN(obj.get())).to.equal(true);
    })
    it('Add then subtract correctly',() =>{
        const obj = createCalculator()
        obj.add(5)
        obj.subtract(1);
        expect(obj.get()).to.equal(4);
    })

})