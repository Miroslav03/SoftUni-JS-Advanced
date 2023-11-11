function juice(arr) {

    const bottles = new Map;
    const amount = new Map;
    for (const juice of arr) {
        let [juiceName, quanity] = juice.split(' => ');
        quanity = Number(quanity);

        if (!amount.has(juiceName)) {
            amount.set(juiceName, 0);
        }

        let totalAmount = amount.get(juiceName) + quanity;

        if (totalAmount >= 1000) {
            if (!bottles.has(juiceName)) {
                bottles.set(juiceName, 0);
            }

            let newBottles = Math.trunc(totalAmount / 1000);
            let currentBottles = bottles.get(juiceName)
            bottles.set(juiceName, currentBottles + newBottles)
        }

        amount.set(juiceName,totalAmount % 1000)

    }
    for (const arr of Array.from(bottles)) {
        console.log(`${arr[0]} => ${arr[1]}`);
    }
}
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']


)