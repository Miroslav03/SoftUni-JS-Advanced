function roadRadar(km,name){

    let speedLimit  = 0 
    let flag = true

    switch (name) {
        case `motorway`:{
            speedLimit = 130
            if(km>speedLimit){
                flag = true
            }else{
                flag = false
            }
            break;
        }
        case `interstate`:{
            speedLimit= 90;
            if(km>speedLimit){
                flag = true
            }else{
                flag = false
            }
            break;
        }
        case `city`:{
            speedLimit= 50;
            if(km>speedLimit){
                flag = true
            }else{
                flag = false
            }
            break;
        }
        case `residential`:{
            speedLimit= 20;
            if(km>speedLimit){
                flag = true
            }else{
                flag = false
            }
            break;
        }    
            
    }

    let status = ``

    if(!flag){
        console.log(`Driving ${km} km/h in a ${speedLimit} zone`);
    }else{
        let kmOver = km-speedLimit
        if(kmOver<=20){
            status = `speeding`
        }else if(kmOver<=40){
            status = `excessive speeding`
        }else{
            status = `reckless driving`
        }
        console.log(`The speed is ${km-speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }



}
roadRadar(40,
    `city`)