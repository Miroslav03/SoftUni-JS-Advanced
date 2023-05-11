function printDeckOfCards(cards) {
    const finalCardArr = []
    let message = undefined;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let face = undefined;
        let suit = undefined;
        if (card.length > 2) {
            face = card[0] + card[1];
            suit = card[2];
        } else {
            face = card[0];
            suit = card[1];
        }
        const readyCard = createCard(face, suit)
        finalCardArr.push(readyCard)
        if (message != undefined) {
            return console.log(message);
        }
    }

    function createCard(face, suit) {

        const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
        const suits = {
            "S": `\u2660`,
            "H": `\u2665`,
            "D": `\u2666`,
            "C": `\u2663`
        }

        if (!faces.includes(face)) {
            return message = `Invalid card: ${face + suit}`

        } else if (!suits.hasOwnProperty(suit)) {
            return message = `Invalid card: ${face + suit}`
        }

        return `${face}${suits[suit]}`

    }

    return console.log(finalCardArr);
}
