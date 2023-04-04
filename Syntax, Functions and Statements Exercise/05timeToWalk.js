function timeToWalk(steps,length,speed){

    const totalMeters = steps*length
    const metersPersSecond = speed/3.6
    const restTime = Math.floor(totalMeters/500)*60
    const totalTime = restTime + totalMeters/metersPersSecond

    const hours = Math.floor(totalTime/3600)
    const minutes = Math.floor(totalTime/60)
    const seconds = Math.round(totalTime%60)

    console.log(`${hours < 10 ? "0":""}${hours}:${minutes < 10 ? "0":""}${minutes}:${seconds < 10 ? "0":""}${seconds}`);
}
timeToWalk(4000, 0.60, 5)