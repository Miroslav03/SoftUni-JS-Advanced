function printDeckOfCards(arrOfCards) {
    const finalArr = [];
    let flag = undefined;
    for (const el of arrOfCards) {
        let face = undefined;
        let suit = undefined;
        if (el.length == 3) {
            face = el[0] + el[1];
            suit = el[2]
        } else {
            [face, suit] = el.split('');
        }
        const card = createCard(face, suit);
        finalArr.push(card)
    }
    if (flag == true) {
        return
    }
    console.log(finalArr.join(' '));


    function createCard(face, suit) {
        let finalFace = undefined;
        let finalSuit = undefined;
        const suits = {
            'S': `\u2660`,
            'H': `\u2665`,
            'D': `\u2666`,
            'C': `\u2663`
        }

        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        if (cardFaces.includes(face)) {
            finalFace = face;
        } else {
            console.log(`Invalid card: ${face}${suit}`);
            flag = true;
            return
        }

        if (suits.hasOwnProperty(suit)) {
            finalSuit = suit
        } else {
            console.log(`Invalid card: ${face}${suit}`);
            flag = true;
            return
        }

        return `${face}${suits[suit]}`
    }
}
printDeckOfCards(['5S', '3D', 'QD', '1C'])