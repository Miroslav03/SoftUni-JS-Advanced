function storeCatalogue(array) {
    const collection = {};
    for (let i = 0; i < array.length; i++) {
        const [name,price] = array[i].split(' : ');
        const firstLetter = name[0]
        if(!collection.hasOwnProperty(firstLetter)){
            collection[firstLetter] = []
            collection[firstLetter].push(`${name}: ${price}`)
        }else{
            collection[firstLetter].push(`${name}: ${price}`)
        }
    }   
    const sortedKeys = Object.keys(collection).sort((a,b) => a.localeCompare(b))
   

    for (const key of sortedKeys) {
        let arr = collection[key]
        arr = arr.sort((a,b) => a.localeCompare(b))
        console.log(key);
        for (const name of arr) {
            console.log(`  ${name}`);
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
