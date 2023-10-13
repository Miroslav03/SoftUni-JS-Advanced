function timeToWalk(steps, length, speed) {

    const totalRoad = (steps * length)//2400
    const metersInSec = speed / 3.6;
    const timeInSec = totalRoad / metersInSec;
    const restInMin = Math.floor(totalRoad / 500)

    let totalMin = Math.floor(timeInSec / 60) + restInMin;
    let totalHours = Math.floor(totalMin / 60);
    let finalMin = totalMin % 60
    let finalSeconds = Math.ceil(timeInSec - Math.floor(timeInSec / 60)*60)
    if(totalHours <=9){
        totalHours = `0${totalHours}`
    }
    if(finalMin <=9){
        finalMin = `0${finalMin}`
    }
    if(finalSeconds <=9){
        finalSeconds = `0${finalSeconds}`
    }
    
        console.log(`${totalHours}:${finalMin}:${finalSeconds}`);
    
}
timeToWalk(4000, 0.60, 5)