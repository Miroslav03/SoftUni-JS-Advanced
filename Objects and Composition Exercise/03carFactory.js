function carFactory(car) {

    function createEngine(hp) {
        const engine = {};
        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function createCarriage(color, type) {
        const carriage = {};
        carriage.type = type;
        carriage.color = color;

        return carriage;
    }

    function createWheels(wheelsize) {
        const wheels = ['', '', '', ''];
        if (wheelsize % 2 == 0) {
            wheelsize--
        }
        wheels.fill(wheelsize)

        return wheels;
    }
    
    return car = {
        model:car.model,
        engine:createEngine(car.power),
        carriage:createCarriage(car.color,car.carriage),
        wheels:createWheels(car.wheelsize)
        
    }
    
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
