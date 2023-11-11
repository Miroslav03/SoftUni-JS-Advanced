function car(carArr) {
    let obj = {};
    for (const car of carArr) {
        let [brand, model, producedCars] = car.split(' | ');
        producedCars = Number(producedCars);
        if (!obj.hasOwnProperty(brand)) {
            obj[brand] = [{ model, producedCars }]
        } else {
            let modelIndex = obj[brand].findIndex(obj => obj.model === model)
            if (modelIndex !== -1) {
                obj[brand][modelIndex].producedCars += producedCars
            } else {
                obj[brand].push({ model, producedCars })
            }
        }
    }

    for (const [key,carObj] of Object.entries(obj)) {
        console.log(key);
        for (const [index,obj] of Object.entries(carObj)) {
            console.log(`###${obj.model} -> ${obj.producedCars}`);
        }
    }

}
car(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)