function roadRadar(speed, place) {
    let speedLimit = undefined;
    let status = undefined;
    switch (place) {
        case 'motorway': {
            speedLimit = 130;
            break;
        }
        case 'interstate': {
            speedLimit = 90;
            break;
        }
        case 'city': {
            speedLimit = 50;
            break;
        }
        case 'residential': {
            speedLimit = 20;
            break;
        }
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if (speed > speedLimit) {
        if ((speed - speedLimit) <= 20) {
            status = 'speeding'
        } else if ((speed - speedLimit) > 20 && (speed - speedLimit) <= 40) {
            status = 'excessive speeding'
        }else{
            status = 'reckless driving'
        }
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }


}
roadRadar(200, 'motorway')