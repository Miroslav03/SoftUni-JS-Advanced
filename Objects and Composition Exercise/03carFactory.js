function carFactory(car) {

    function engineMaker(car) {
        const power = car.power
        if (power <= 90) {
            return { power: 90, volume: 1800 }
        } else if (power > 90 && power <= 120) {
            return { power: 120, volume: 2400 }
        } else {
            return { power: 200, volume: 3500 }
        }
    }

    function carriageMaker(car) {
        return {
            type: car.carriage,
            color: car.color
        }

    }

    function wheelsMaker(car) {
        let wheelSize = car.wheelsize
        if (wheelSize % 2 == 0) {
            wheelSize--
        }
        const arr = Array(4).fill(wheelSize)
        return arr
    }

    const engine = engineMaker(car)
    const carriage = carriageMaker(car)
    const wheels = wheelsMaker(car)

    console.log({
        model: car.model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    });
    return {
        model: car.model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    }
    

}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
