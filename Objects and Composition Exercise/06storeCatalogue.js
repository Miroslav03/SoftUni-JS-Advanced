function storeCatalogue(array) {
    const collection = {};
    for (let i = 0; i < array.length; i++) {
        const [name, price] = array[i].split(' : ');
        const firstLetter = name[0].toUpperCase();
        if (collection.hasOwnProperty(firstLetter)) {
            collection[firstLetter].push({ word: name, price: Number(price) })
        } else {
            collection[firstLetter] = []
            collection[firstLetter].push({ word: name, price: Number(price) })
        }
    }

    const sortedCollection = Object.keys(collection).sort((a, b) => a.localeCompare(b))

    for (const el of sortedCollection) {
        console.log(el)
        const element = collection[el].sort((a, b) => (a.word).localeCompare(b.word));
        for (let i = 0; i < element.length; i++) {
            console.log(`  ${element[i].word}: ${element[i].price}`)
        }
    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
console.log(`-------------------------------------------`);
storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)
