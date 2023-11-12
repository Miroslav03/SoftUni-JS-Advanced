function solution() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = String(color);
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)
            this.ribbonColor = String(ribbonColor);
            this.ribbonLength = Number(ribbonLength);
        }

        get ribbon() {
            return {
                color: this.ribbonColor,
                length: this.ribbonLength
            }
        }

    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this.text = text;
        }

    }

    return {
        Balloon, PartyBalloon, BirthdayBalloon
    }
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);