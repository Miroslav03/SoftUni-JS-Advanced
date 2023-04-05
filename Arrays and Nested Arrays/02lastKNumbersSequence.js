function lastKNumers(n,k){

    const arr = [1]
    let finalSum = 0 

    for (let i = 0; i < n-1; i++) {
        const elements = arr.slice(-k)
        finalSum = elements.reduce((result,x) => result+x, 0)
        arr.push(finalSum)
    }

    return arr

}
console.log(lastKNumers(6, 3))
lastKNumers(8, 2)