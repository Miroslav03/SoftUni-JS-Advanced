const { expect } = require('chai')

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


//console.log(mathEnforcer.addFive(0,3))
console.log(mathEnforcer.subtractTen(-6))
//console.log(mathEnforcer.sum(4))

describe('Main tests', function () {

    describe('addFive tests', () => {

        it('Input is not a number', () => {
            expect(mathEnforcer.addFive('M')).to.equal(undefined)
        })
        it('Input is a string number', () => {
            expect(mathEnforcer.addFive('1')).to.equal(undefined)
        })
        it('Input is a number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15)
        })
        it('Input is a decimal number', () => {
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1)
        })
        it('Input is a negative number', () => {
            expect(mathEnforcer.addFive(-6)).to.equal(-1)
        })
    })

    describe('subtractTen tests', () => {

        it('Input is not a number', () => {
            expect(mathEnforcer.subtractTen('M')).to.equal(undefined)
        })
        it('Input is a string number', () => {
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined)
        })
        it('Input is a number', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9)
        })
        it('Input is a decimal number', () => {
            expect(mathEnforcer.subtractTen(1.1)).to.equal(-8.9)
        })

        it('Input is a negative number', () => {
            expect(mathEnforcer.subtractTen(-6)).to.equal(-16)
        })
    })

    describe('sum tests', () => {

        it('Both inputs are not numbers', () => {
            expect(mathEnforcer.sum('M','M')).to.equal(undefined)
        })
        it('Both inputs are string numbers', () => {
            expect(mathEnforcer.sum('1','1')).to.equal(undefined)
        })

        it('First input is a number second is not', () => {
            expect(mathEnforcer.sum(1,'1')).to.equal(undefined)
        })

        it('Second input is a number first is not', () => {
            expect(mathEnforcer.sum('1',1)).to.equal(undefined)
        })

        it('Both inputs are numbers', () => {
            expect(mathEnforcer.sum(1,1)).to.equal(2)
        })

        it('Both inputs are negative numbers', () => {
            expect(mathEnforcer.sum(-5,-5)).to.equal(-10)
        })

        it('Any of the inputs is not defined', () => {
            expect(mathEnforcer.sum(1)).to.equal(undefined)
        })   
        it('Both inputs are decimal numbers', () => {
            expect(mathEnforcer.sum(0.1,0.2)).is.closeTo(0.3,0.001)
        }) 
    })
})