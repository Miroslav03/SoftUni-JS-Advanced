const { expect } = require('chai')

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}
const obj = createCalculator()
obj.add(5)
obj.subtract(-1)
console.log(obj.get());

describe('Main tests', function () {

    it('typeof main function to equal object', () => {
        expect(typeof createCalculator()).to.equals('object')
    })


    it('Sum', () => {
        const obj = createCalculator()
        obj.add(5)
        expect(obj.get()).to.equal(5)
    })
    it('Subtract', () => {
        const obj = createCalculator()
        obj.add(5)
        obj.subtract(1)
        expect(obj.get()).to.equal(4)
    })


    it('Invalid Sum Input', () => {
        const obj = createCalculator()
        obj.add('as')
        expect(isNaN(obj.get())).to.equal(true)
    })
    it('Invalid Subtract Input', () => {
        const obj = createCalculator()
        obj.subtract('as')
        expect(isNaN(obj.get())).to.equal(true)
    })
    it('Valid Add Parse', () => {
        const obj = createCalculator()
        obj.add('1')
        expect(obj.get()).to.equal(1)
    })

    it('Valid Subtract Parse', () => {
        const obj = createCalculator()
        obj.add('6')
        obj.subtract('3')
        expect(obj.get()).to.equal(3)
    })

    it('add type check', () => {
        const obj = createCalculator()
        expect(typeof obj.add).to.equals('function')
    })
    it('subtract type check', () => {
        const obj = createCalculator()
        expect(typeof obj.subtract).to.equals('function')
    })
    it('get type check', () => {
        const obj = createCalculator()
        expect(typeof obj.get).to.equals('function')
    })

    it('Correct', () => {
        const obj = createCalculator()
        obj.add(5)
        obj.subtract(5)
        expect(obj.get()).to.equals(0)
    })

    it('String parameters', () => {
        const obj = createCalculator()
        obj.add('5')
        obj.subtract('5')
        expect(obj.get()).to.equals(0)
    })

    it('Value can not be modified from outside', () => {
        expect(createCalculator.value).to.equals(undefined)
    })
})