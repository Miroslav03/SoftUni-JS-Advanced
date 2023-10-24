function lowestPrice(array) {
    const order = {}
    for (let i = 0; i < array.length; i++) {
        let [townName, productName, price] = array[i].split(' | ')
        price = Number(price)
        if (!order.hasOwnProperty(productName)) {
            order[productName] = { townName, price, }
        } else {
            if (price < order[productName].price) {
                order[productName].price = price
                order[productName].townName = townName
            }
        }
    }


    for (const [key, obj] of Object.entries(order)) {
        console.log(`${key} -> ${obj.price} (${obj.townName})`);
    }

}
lowestPrice(['Sample Town | Sample Product | 1000',
    'New York | Sample Product | 700',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 700',
    'New York | Burger | 10']

)
