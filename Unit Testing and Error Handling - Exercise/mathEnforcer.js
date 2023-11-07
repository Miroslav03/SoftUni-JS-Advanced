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

/* console.log(mathEnforcer.addFive(1)) */


describe('Main tests', () => {
    it('add five function working', () => {
        expect(mathEnforcer.addFive('Miro')).to.equal(undefined);
        expect(mathEnforcer.addFive('1')).to.equal(undefined);
        expect(mathEnforcer.addFive(12)).to.equal(17);
        expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
        expect(mathEnforcer.addFive(-5)).to.equal(0);

    })
    it('subtractTen function working', () => {
        expect(mathEnforcer.subtractTen('Miro')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(12.5)).to.equal(2.5);
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);

    })
    it('sum function working', () => {
        expect(mathEnforcer.sum('Miro','Miro')).to.equal(undefined);
        expect(mathEnforcer.sum('1','1')).to.equal(undefined);
        expect(mathEnforcer.sum('1',1)).to.equal(undefined);
        expect(mathEnforcer.sum(1,'1')).to.equal(undefined);
        expect(mathEnforcer.sum(1,1)).to.equal(2);
        expect(mathEnforcer.sum(-1,-1)).to.equal(-2);
        expect(mathEnforcer.sum(1)).to.equal(undefined);
        expect(mathEnforcer.sum(0.1,0.2)).is.closeTo(0.3,0.001);
    })
})