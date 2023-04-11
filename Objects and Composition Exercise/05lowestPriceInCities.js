function lowestPrice(array) {

    const collection = {};

    for (let i = 0; i < array.length; i++) {
        let [townName, product, price] = array[i].split(' | ');
        price = Number(price);
        if (collection.hasOwnProperty(product)) {
            if (collection[product].price > price) {
                collection[product].price = price
                collection[product].town = townName
            }
        } else {
            collection[product] = {
                town: townName,
                price, price
            }
        }

    }

    for (const [name, obj] of Object.entries(collection)) {
        console.log(`${name} -> ${obj.price} (${obj.town})`);
    }



}
lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
]
)
