const { expect } = require('chai')

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}

/* console.log(lookupChar('MIro',1)); */

describe('Main tests', () => {
    it('parameters are incorrect', () => {
        expect(lookupChar(12,'Miro')).to.equal(undefined);
        expect(lookupChar(12,1)).to.equal(undefined);
        expect(lookupChar('Miro','MIro')).to.equal(undefined);
        expect(lookupChar('Miro','1.3')).to.equal(undefined);
        expect(lookupChar('Miro','1')).to.equal(undefined);
        expect(lookupChar('Miro',1.2)).to.equal(undefined);
    })

    it('incorrect index', () => {
        expect(lookupChar('Miro',12)).to.equal("Incorrect index");
        expect(lookupChar('Miro',-1)).to.equal("Incorrect index");
    })

    it('incorrect index', () => {
        expect(lookupChar('Miro',3)).to.equal("o");
        
    })
})